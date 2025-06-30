import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LazyImage from "@/components/ui/LazyImage";
import { preloadImages } from "../../utils/imageOptimization";

// Import new project images
import miningImage from "../../assets/images/brown-coal-mining-111365.jpg";
import workersImage from "../../assets/images/workers-6721726_1920.jpg";
import industryImage from "../../assets/images/industry-1761801.jpg";
import miningFacilityImage from "../../assets/images/mining-facility-aerial.jpg";

// Updated carousel with project-specific images - now with translation keys
const getSlides = (t: any) => [
  {
    image: miningFacilityImage,
    title: "Leading Mining Consultancy in DRC",
    subtitle: "Environmental & Safety Solutions for Major Mining Operations",
    description: "Comprehensive consulting services for mining facilities, ensuring regulatory compliance and operational excellence across the Democratic Republic of Congo."
  },
  {
    image: miningImage,
    title: t('hero.slide1.title'),
    subtitle: t('hero.slide1.subtitle'),
    description: t('hero.slide1.description')
  },
  {
    image: workersImage,
    title: t('hero.slide2.title'),
    subtitle: t('hero.slide2.subtitle'),
    description: t('hero.slide2.description')
  },
  {
    image: industryImage,
    title: t('hero.slide3.title'),
    subtitle: t('hero.slide3.subtitle'),
    description: t('hero.slide3.description')
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const { t } = useTranslation();
  const slides = getSlides(t);

  // Preload carousel images for better performance
  useEffect(() => {
    const preloadCarouselImages = async () => {
      try {
        await preloadImages([miningFacilityImage, miningImage, workersImage, industryImage]);
        setImagesPreloaded(true);
      } catch (error) {
        console.warn('Some carousel images failed to preload:', error);
        setImagesPreloaded(true); // Continue anyway
      }
    };
    
    preloadCarouselImages();
  }, []);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section id="home" className="relative bg-gray-900 overflow-hidden">
      {/* Main Banner with SRK-style Carousel */}
      <div className="relative h-[70vh] md:h-[80vh] bg-gray-900">
        {/* Slides */}
        <div className="h-full relative overflow-hidden">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index 
                  ? "opacity-100 z-10" 
                  : "opacity-0 z-0"
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
              <div className="absolute inset-0 z-0">
                <LazyImage 
                  src={slide.image}
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                  priority={index === 0} // Prioritize first slide
                />
              </div>
              
              {/* Slide Content */}
              <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-32">
                <div className="max-w-3xl slide-content">
                  <div className={`transition-all duration-500 transform ${
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}>
                    <div className="w-24 h-1 bg-[#30B4F2] mb-6"></div>
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white mb-4 font-light">
                      {slide.subtitle}
                    </p>
                    <p className="text-gray-300 mb-8 max-w-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={index === 0 ? "/contact" : index === 1 ? "#services" : "/contact"} 
                        className="bg-[#30B4F2] hover:bg-[#228CBF] text-white px-6 py-3 font-semibold transition-colors duration-300 flex items-center text-sm rounded-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <span>{t('hero.slide' + (index + 1) + '.cta')}</span>
                        <i className="fas fa-arrow-right ml-2"></i>
                      </a>
                      <a 
                        href="/contact" 
                        className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 font-semibold transition-colors duration-300 text-sm rounded-sm"
                      >
                        {t('hero.requestConsultation')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* SRK-style Navigation Indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating) return;
                      setIsAnimating(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? "bg-[#30B4F2] w-12" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#30B4F2] transition-colors"
                  aria-label="Previous slide"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#30B4F2] transition-colors"
                  aria-label="Next slide"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Boxes - SRK Style */}
      <div className="relative bg-white border-t border-gray-200 z-20">
        <div className="container mx-auto px-4 py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 -mt-20 shadow-xl">
            <div className="bg-[#30B4F2] hover:bg-[#228CBF] transition-colors p-8 text-white group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('services.consulting.title')}</h3>
              <p className="mb-4 opacity-90">{t('services.consulting.description')}</p>
              <a href="#services" className="inline-flex items-center text-white hover:text-white/80 font-medium">
                {t('hero.learnMore')} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
            <div className="bg-[#1E5631] hover:bg-[#15402A] transition-colors p-8 text-white group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('services.safety.title')}</h3>
              <p className="mb-4 opacity-90">{t('services.safety.description')}</p>
              <a href="#services" className="inline-flex items-center text-white hover:text-white/80 font-medium">
                {t('hero.learnMore')} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
            <div className="bg-gray-800 hover:bg-gray-900 transition-colors p-8 text-white group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('services.environmental.title')}</h3>
              <p className="mb-4 opacity-90">{t('services.environmental.description')}</p>
              <a href="#services" className="inline-flex items-center text-white hover:text-white/80 font-medium">
                {t('hero.learnMore')} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
