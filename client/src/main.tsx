import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Import i18n
import "./i18n/i18n";

// Preload critical images for better performance
import miningImage from "./assets/images/brown-coal-mining-111365.jpg";
import workersImage from "./assets/images/workers-6721726_1920.jpg";
import industryImage from "./assets/images/industry-1761801.jpg";
import miningFacilityImage from "./assets/images/mining-facility-aerial.jpg";

// Preload critical images immediately
const preloadCriticalImages = () => {
  const criticalImages = [miningFacilityImage, miningImage, workersImage, industryImage];
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Start preloading as early as possible
preloadCriticalImages();

const container = document.getElementById("root")!;

// Ensure we only create one root instance
if (!(container as any).__reactRoot) {
  (container as any).__reactRoot = createRoot(container);
}

(container as any).__reactRoot.render(<App />);