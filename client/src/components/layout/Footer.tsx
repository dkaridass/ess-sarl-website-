import { Link } from "wouter";
import { navigationItems } from "@/lib/constants";
import logoImage from "../../assets/Logo_Mambo_v01.png";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !email.includes('@')) {
      toast({
        title: t('footer.newsletter.invalidEmail'),
        description: t('footer.newsletter.enterValidEmail'),
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit to API
      const response = await apiRequest(
        "POST",
        "/api/subscribe",
        { email }
      );
      
      setSubscribed(true);
      setEmail("");
      
      toast({
        title: t('footer.newsletter.thankYou'),
        description: t('footer.newsletter.success'),
        variant: "default"
      });
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      
      // Handle different error scenarios
      if (error.message && error.message.includes("already subscribed")) {
        toast({
          title: t('footer.newsletter.alreadySubscribed'),
          description: t('footer.newsletter.emailAlreadySubscribed'),
          variant: "default"
        });
      } else {
        toast({
          title: t('footer.newsletter.failed'),
          description: t('footer.newsletter.error'),
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <footer className="text-white">
      {/* Pre-Footer Banner - SRK Style */}
      <div className="bg-[#30B4F2]">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl md:text-2xl font-semibold md:max-w-md">
              {t('footer.preBanner.title')}
            </h3>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-[#30B4F2] text-sm uppercase tracking-wider font-bold px-6 py-3 transition-colors"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Section - SRK Style */}
      <div className="bg-[#1E5631] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">{t('footer.newsletter.title')}</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {t('footer.newsletter.subtitle')}
            </p>
            {subscribed ? (
              <div className="bg-green-600/20 text-white p-4 max-w-md mx-auto rounded">
                <i className="fas fa-check-circle text-2xl mb-2"></i>
                <p>{t('footer.newsletter.subscribedSuccessfully')}</p>
              </div>
            ) : (
              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder={t('footer.newsletter.placeholder')} 
                      className="flex-1 px-4 py-3 text-sm focus:outline-none border-0 text-gray-800" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-[#30B4F2] hover:bg-[#1D97D1] text-white px-6 py-3 transition-colors uppercase tracking-wider text-sm font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          {t('footer.newsletter.sending')}
                        </>
                      ) : t('footer.newsletter.button')}
                    </button>
                  </div>
                  
                  <p className="text-xs text-white/70 mx-auto max-w-sm">
                    {t('footer.newsletter.consent')}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Footer Content - SRK Style */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <a href="#home" className="inline-block bg-white p-2 rounded-sm">
                  <img src={logoImage} alt="ESS SARL Logo" className="h-10" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {t('footer.aboutText')}
              </p>
              <div className="flex space-x-3">
                {["linkedin-in", "facebook-f", "twitter"].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-gray-800 hover:bg-[#30B4F2] w-8 h-8 rounded-sm flex items-center justify-center transition-colors"
                    aria-label={`Follow us on ${icon === 'linkedin-in' ? 'LinkedIn' : icon === 'facebook-f' ? 'Facebook' : 'Twitter'}`}
                  >
                    <i className={`fab fa-${icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4 uppercase">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      className="text-gray-400 hover:text-[#30B4F2] transition-colors text-sm block py-1"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4 uppercase">
                {t('footer.services')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#30B4F2] transition-colors text-sm block py-1">
                    {t('services.environmental.title')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#30B4F2] transition-colors text-sm block py-1">
                    {t('services.safety.title')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#30B4F2] transition-colors text-sm block py-1">
                    {t('services.electrical.title')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#30B4F2] transition-colors text-sm block py-1">
                    {t('services.construction.title')}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-[#30B4F2] transition-colors text-sm block py-1">
                    {t('services.consulting.title')}
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4 uppercase">
                {t('nav.contact')}
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start text-gray-400">
                  <i className="fas fa-map-marker-alt mt-1.5 mr-3 text-[#30B4F2] w-4 text-center"></i>
                  <div>
                    02 Avenue Papy LUBOTA,<br />
                    quartier Golf Tshamalale,<br />
                    Lubumbashi, Haut-Katanga,<br />
                    Democratic Republic of Congo
                  </div>
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-envelope mr-3 text-[#30B4F2] w-4 text-center"></i>
                  <a href="mailto:office@ess-sarl.com" className="hover:text-[#30B4F2] transition-colors">
                    office@ess-sarl.com
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-phone-alt mr-3 text-[#30B4F2] w-4 text-center"></i>
                  <a href="tel:+243838704393" className="hover:text-[#30B4F2] transition-colors">
                    +243 83 870 43 93
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 bg-gray-900">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              © {new Date().getFullYear()} ESS SARL. {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap justify-center">
              <a href="#" className="text-gray-500 hover:text-[#30B4F2] transition-colors text-xs px-3 py-1 border-r border-gray-700">
                {t('footer.links.careers')}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#30B4F2] transition-colors text-xs px-3 py-1 border-r border-gray-700">
                {t('footer.links.news')}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#30B4F2] transition-colors text-xs px-3 py-1 border-r border-gray-700">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="text-gray-500 hover:text-[#30B4F2] transition-colors text-xs px-3 py-1">
                {t('footer.links.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top - SRK Style */}
      <div className="bg-[#30B4F2] text-center">
        <a 
          href="#home" 
          className="inline-block py-3 px-5 text-white"
          aria-label="Back to top"
        >
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
}