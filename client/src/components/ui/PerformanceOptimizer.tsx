import { useEffect } from 'react';

// Performance optimization utilities
export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize image loading with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              const src = img.getAttribute('data-src');
              if (src) {
                img.src = src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      images.forEach(img => imageObserver.observe(img));
    };

    // Enable browser resource hints
    const addResourceHints = () => {
      const head = document.head;
      
      // Add DNS prefetch for external resources
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = '//fonts.googleapis.com';
      head.appendChild(dnsPrefetch);

      // Add preconnect for faster connections
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://fonts.gstatic.com';
      preconnect.crossOrigin = 'anonymous';
      head.appendChild(preconnect);
    };

    // Optimize font loading
    const optimizeFonts = () => {
      // Use font-display: swap for better performance
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    };

    // Apply optimizations
    optimizeImages();
    addResourceHints();
    optimizeFonts();

    // Cleanup function
    return () => {
      // Clean up observers if needed
    };
  }, []);

  return null;
};

// Image compression utility
export const compressImage = (file: File, quality: number = 0.8): Promise<Blob> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        resolve(blob!);
      }, 'image/jpeg', quality);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

// Progressive image loading
export const createProgressiveImage = (src: string, placeholder: string) => {
  const img = new Image();
  const placeholderImg = new Image();
  
  // Load placeholder first
  placeholderImg.src = placeholder;
  
  // Then load full image
  img.onload = () => {
    // Replace placeholder with full image
    const elements = document.querySelectorAll(`img[src="${placeholder}"]`);
    elements.forEach(el => {
      (el as HTMLImageElement).src = src;
      el.classList.add('loaded');
    });
  };
  
  img.src = src;
};