import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <a 
          href="#home" 
          className="fixed bottom-6 right-6 bg-[#1E5631] hover:bg-[#0F2C19] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        >
          <i className="fas fa-arrow-up"></i>
        </a>
      )}
    </>
  );
}
