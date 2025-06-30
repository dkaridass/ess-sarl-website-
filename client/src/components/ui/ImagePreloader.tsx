import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  onComplete?: () => void;
}

export default function ImagePreloader({ images, onComplete }: ImagePreloaderProps) {
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      onComplete?.();
      return;
    }

    const preloadImage = (src: string) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          onComplete?.();
        }
      };
      img.src = src;
    };

    images.forEach(preloadImage);
  }, [images, onComplete]);

  return null; // This component doesn't render anything
}