// Image optimization utilities for better performance

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (sources: string[]): Promise<void[]> => {
  return Promise.all(sources.map(preloadImage));
};

// Preload critical images for better perceived performance
export const preloadCriticalImages = async () => {
  const criticalImages = [
    '/src/assets/images/brown-coal-mining-111365.jpg',
    '/src/assets/images/workers-6721726_1920.jpg',
    '/src/assets/images/industry-1761801.jpg'
  ];
  
  try {
    await preloadImages(criticalImages);
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};

// Image compression helper for better loading
export const getOptimizedImageUrl = (src: string, width?: number, quality?: number): string => {
  // For production, this could integrate with image CDN services
  // For now, we'll use the original src with loading optimization
  return src;
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};