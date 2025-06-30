import { useState, useEffect } from 'react';

interface UseImageOptimizationOptions {
  priority?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useImageOptimization = (
  src: string,
  options: UseImageOptimizationOptions = {}
) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(options.priority || false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return {
    isLoaded,
    isInView,
    hasError,
    setIsInView,
    handleLoad,
    handleError,
    shouldLoad: isInView && !hasError
  };
};

// Hook for preloading critical images
export const useImagePreloader = (images: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (images.length === 0) {
      setIsComplete(true);
      return;
    }

    const preloadPromises = images.map((src) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(src));
          resolve(src);
        };
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          resolve(src); // Resolve anyway to not block other images
        };
        img.src = src;
      });
    });

    Promise.all(preloadPromises).then(() => {
      setIsComplete(true);
    });
  }, [images]);

  return { loadedImages, isComplete };
};