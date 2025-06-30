import { useState } from "react";
import { faqs } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("general");
  
  // Additional FAQs by category
  const faqsByCategory = {
    general: [
      ...faqs,
      {
        question: "How quickly can you respond to a request for service?",
        answer: "For standard consultancy and training requests, we typically respond within 1-2 business days. For emergency response services, we maintain a 24/7 response capability with teams ready to deploy within hours to locations throughout the DRC."
      }
    ],
    services: [
      {
        question: "Can you customize training programs for our specific needs?",
        answer: "Yes, we specialize in developing customized training programs tailored to the specific needs, challenges, and operational context of each client. Our trainers work closely with your team to ensure that programs address your particular requirements and objectives."
      },
      {
        question: "Do you offer remote consultancy services?",
        answer: "While we prefer on-site assessments for most consultancy services, we do offer remote consultancy options for specific needs such as policy development, management system reviews, and some training programs. Contact us to discuss your specific requirements."
      },
      {
        question: "Can you help with ISO certification preparation?",
        answer: "Yes, we provide comprehensive ISO certification preparation services, particularly for ISO 14001 (Environmental Management) and ISO 45001 (Occupational Health and Safety). Our consultants can help you develop and implement management systems, conduct pre-certification audits, and prepare for certification audits."
      },
      {
        question: "What languages do you offer services in?",
        answer: "Our team can provide services in French, English, and several local Congolese languages including Swahili, Lingala, and Tshiluba. All our documentation can be provided in both French and English."
      }
    ],
    technical: [
      {
        question: "What environmental monitoring equipment do you use?",
        answer: "We utilize internationally certified monitoring equipment for air quality, water quality, noise levels, and soil composition. Our equipment is regularly calibrated and maintained according to manufacturer specifications and international standards to ensure accurate results."
      },
      {
        question: "How do you ensure data quality in environmental assessments?",
        answer: "We maintain strict quality control procedures for all our environmental assessments. This includes regular equipment calibration, standardized sampling methods, chain of custody documentation, use of accredited laboratories for sample analysis, and data validation protocols."
      },
      {
        question: "What safety standards do you adhere to?",
        answer: "We adhere to international safety standards including those established by the International Labour Organization (ILO), OHSAS 18001/ISO 45001, and industry-specific standards such as the International Council on Mining and Metals (ICMM) safety guidelines, along with all applicable DRC regulations."
      },
      {
        question: "Can you integrate your solutions with our existing management systems?",
        answer: "Yes, our consultants are experienced in integrating new solutions with existing management systems. We take a careful approach to understand your current systems and processes to ensure seamless integration and avoid duplication or conflicts."
      }
    ],
    company: [
      {
        question: "How long has ESS SARL been operating?",
        answer: "ESS SARL was founded in 2012 and has been providing environmental and safety solutions in the Democratic Republic of Congo for over a decade. During this time, we have continuously expanded our service offerings and expertise to meet the evolving needs of our clients."
      },
      {
        question: "What qualifications do your consultants have?",
        answer: "Our consultants hold advanced degrees in relevant fields such as environmental science, engineering, occupational health and safety, and industrial hygiene. Many also hold professional certifications such as ISO 14001 Lead Auditor, NEBOSH, IOSH, and specialized technical certifications relevant to their areas of expertise."
      },
      {
        question: "Do you have liability insurance for your services?",
        answer: "Yes, ESS SARL maintains comprehensive professional liability insurance coverage for all our services. We can provide certificates of insurance upon request for specific projects or contracts."
      },
      {
        question: "Are you a locally owned Congolese company?",
        answer: "Yes, ESS SARL is a proudly Congolese-owned company based in Lubumbashi, DRC. We combine deep local knowledge with international expertise and standards to provide solutions that are both world-class and specifically adapted to the unique contexts of the Democratic Republic of Congo."
      }
    ]
  };
  
  // Quick contact information
  const contactInfo = {
    email: "office@ess-sarl.com",
    phone: "+243 83 870 43 93",
    whatsapp: "+243 83 870 43 93",
    address: "02 Avenue Papy LUBOTA, quartier Golf Tshamalale, Lubumbashi, Haut-Katanga, DRC"
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Page Title - SRK Style */}
      <section className="bg-gray-900 relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="ESS SARL FAQs" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-20 h-1 bg-[#30B4F2] mb-6"></div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80 max-w-xl">
              Find answers to common questions about our services, processes, and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb - SRK Style */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-[#30B4F2]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">FAQ</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Find answers to frequently asked questions about our services. If you can't find the information you're looking for, please don't hesitate to contact us directly.
            </p>
          </div>
          
          {/* FAQ Categories - SRK Style */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {[
              { id: "general", label: "General Questions" },
              { id: "services", label: "Our Services" },
              { id: "technical", label: "Technical Details" },
              { id: "company", label: "About Our Company" }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#30B4F2] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* FAQ Accordion - SRK Style */}
          <div className="max-w-3xl mx-auto mb-16 bg-white shadow-md p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqsByCategory[activeCategory as keyof typeof faqsByCategory].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="text-left font-semibold py-4 hover:text-[#30B4F2]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Still Have Questions Section - SRK Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 shadow-md">
              <div className="text-3xl text-[#30B4F2] mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Contact Us Directly</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find an answer to your question, feel free to contact us. Our team is ready to help you.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-envelope text-[#30B4F2] w-6"></i>
                  <span className="ml-2">{contactInfo.email}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fas fa-phone-alt text-[#30B4F2] w-6"></i>
                  <span className="ml-2">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <i className="fab fa-whatsapp text-[#30B4F2] w-6"></i>
                  <span className="ml-2">{contactInfo.whatsapp}</span>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>
      
      {/* Common Questions Banner - SRK Style */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Questions by Industry</h2>
            <div className="w-16 h-1 bg-[#30B4F2] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse industry-specific questions and answers to learn more about how our services apply to your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: "Mining",
                icon: "fa-hard-hat",
                questions: [
                  "How do environmental regulations affect mining operations?",
                  "What safety training is required for mining personnel?",
                  "How can we improve our environmental compliance?"
                ]
              },
              {
                industry: "Manufacturing",
                icon: "fa-industry",
                questions: [
                  "What waste management solutions do you offer?",
                  "How can we reduce our environmental footprint?",
                  "What safety protocols should we implement?"
                ]
              },
              {
                industry: "Construction",
                icon: "fa-hammer",
                questions: [
                  "How do we ensure site safety compliance?",
                  "What environmental assessments are needed?",
                  "How do we train workers on environmental awareness?"
                ]
              }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#30B4F2]/10 flex items-center justify-center text-[#30B4F2] mb-4">
                  <i className={`fas ${industry.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{industry.industry} Industry</h3>
                <ul className="space-y-3 mb-6">
                  {industry.questions.map((question, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-question-circle text-[#30B4F2] mt-1 mr-3"></i>
                      <span className="text-gray-700">{question}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}