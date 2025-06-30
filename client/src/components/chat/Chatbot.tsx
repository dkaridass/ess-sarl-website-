import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquareTextIcon, X, SendIcon, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

export default function Chatbot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('chatbot.initialMessage'),
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Send message to API
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputMessage }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();

      // Add bot response
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.message,
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: t('chatbot.errorMessage'),
        isBot: true,
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        title: t('chatbot.errorTitle'),
        description: t('chatbot.defaultErrorResponse'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
        aria-label={t('chatbot.toggleLabel')}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-[450px] bg-white rounded-lg shadow-xl z-50 flex flex-col h-[500px] border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquareTextIcon className="mr-2" size={20} />
              <h3 className="font-semibold">{t('chatbot.title')}</h3>
            </div>
            <button 
              onClick={toggleChatbot}
              className="text-white hover:text-gray-200"
              aria-label={t('chatbot.closeChat')}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-3 rounded-lg max-w-[85%] whitespace-pre-wrap ${
                  msg.isBot
                    ? 'bg-gray-100 text-gray-800 self-start'
                    : 'bg-blue-600 text-white self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 text-gray-800 self-start p-3 rounded-lg max-w-[85%]">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <Textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chatbot.inputPlaceholder')}
                className="min-h-9 resize-none"
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon"
                disabled={isLoading || !inputMessage.trim()}
              >
                <SendIcon size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}