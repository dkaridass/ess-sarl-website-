import { useState, useEffect } from "react";
import { Link } from "wouter";
import { navigationItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import logoImage from "../../assets/Logo_Mambo_v01.png";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 shadow-md transition-all duration-300`}>
      {/* Enhanced Top Mini Bar */}
      <div className="bg-gradient-to-r from-primary-green to-primary-blue py-2 text-white text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center divide-x divide-white/20">
            <a href="tel:+243838704393" className="flex items-center hover:text-white/90 transition-colors pr-4 group">
              <i className="fas fa-phone-alt mr-2 text-xs group-hover:scale-110 transition-transform"></i>
              <span className="font-medium">+243 83 870 43 93</span>
            </a>
            <a href="mailto:office@ess-sarl.com" className="flex items-center hover:text-white/90 transition-colors px-4 group">
              <i className="fas fa-envelope mr-2 text-xs group-hover:scale-110 transition-transform"></i>
              <span className="font-medium">office@ess-sarl.com</span>
            </a>
            <span className="px-4 flex items-center">
              <i className="fas fa-map-marker-alt mr-2 text-xs"></i>
              <span className="font-medium">Lubumbashi, Democratic Republic of Congo</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-medium">Free Consultation:</span>
              <span className="bg-white/20 px-2 py-1 rounded-full font-bold">This Month</span>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-white hover:text-white/90 transition-colors hover:scale-110 transform">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-white/90 transition-colors hover:scale-110 transform">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-white/90 transition-colors hover:scale-110 transform">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-0.5 hidden md:block">
        <div className="container mx-auto px-4 flex justify-end">
          <div className="flex items-center text-xs text-gray-600">
            <a href="#" className="px-3 py-1 hover:text-primary-blue transition-colors">Careers</a>
            <Link href="/blog" className="px-3 py-1 hover:text-primary-blue transition-colors">{t('nav.blog')}</Link>
            <a href="#" className="px-3 py-1 hover:text-primary-blue transition-colors">Media</a>
            <div className="flex items-center border-l border-gray-300 pl-3 ml-3">
              <span className="pr-2">Language:</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className={`${isScrolled ? "py-2" : "py-3"} bg-white transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src={logoImage} 
                alt="ESS SARL Logo" 
                className={`${isScrolled ? "h-16" : "h-20"} md:${isScrolled ? "h-18" : "h-24"} w-auto object-contain transition-all duration-300 max-w-[200px] md:max-w-[250px]`} 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-sm px-3 py-2 text-gray-700 hover:text-primary-blue border-b-2 border-transparent hover:border-primary-copper transition-all"
              >
                {t(`nav.${item.label.toLowerCase()}`)}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-2 btn-primary px-6 py-2.5 text-sm font-semibold"
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Search Bar - SRK Style */}
      <div className="bg-gray-200/80 py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="relative max-w-md ml-auto">
            <input 
              type="text" 
              placeholder={t('header.searchPlaceholder')}
              className="w-full py-1 px-4 pl-10 text-sm border border-gray-300 focus:outline-none focus:border-[#2C5F7C] rounded-sm"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <div className="pb-2 mb-2">
              <input 
                type="text" 
                placeholder={t('header.searchPlaceholder')}
                className="w-full py-2 px-4 pl-10 text-sm border border-gray-300 focus:outline-none focus:border-[#2C5F7C] rounded-sm bg-gray-50"
              />
              <i className="fas fa-search absolute left-7 top-5 text-gray-400"></i>
            </div>
            
            {navigationItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="block py-2 hover:text-[#2C5F7C] transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.label.toLowerCase()}`)}
              </a>
            ))}
            
            <div className="pt-2 flex flex-col space-y-2">
              <a href="#" className="text-sm hover:text-[#2C5F7C] transition-colors">Careers</a>
              <Link href="/blog" className="text-sm hover:text-[#2C5F7C] transition-colors">{t('nav.blog')}</Link>
              <a href="#" className="text-sm hover:text-[#2C5F7C] transition-colors">Media</a>
            </div>
            
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
              <span className="text-sm text-gray-500">Language:</span>
              <LanguageSwitcher />
            </div>
            
            <div className="pt-3">
              <a 
                href="#contact" 
                className="block text-center btn-primary px-6 py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
