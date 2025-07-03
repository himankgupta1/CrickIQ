import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AdBannerProps {
  slot: string;
  size: 'banner' | 'leaderboard' | 'rectangle' | 'sidebar';
  className?: string;
}

const adSizes = {
  banner: { width: 728, height: 90 },
  leaderboard: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  sidebar: { width: 160, height: 600 }
};

export const AdBanner: React.FC<AdBannerProps> = ({ slot, size, className = '' }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const { width, height } = adSizes[size];

  useEffect(() => {
    if (import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT && adRef.current) {
      try {
        // Load Google AdSense script if not already loaded
        if (!window.adsbygoogle) {
          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          script.setAttribute('data-ad-client', import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT);
          document.head.appendChild(script);
          
          script.onload = () => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          };
        } else {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('Error loading ad:', error);
      }
    }
  }, []);

  // Fallback placeholder ad when no real ads are configured
  const PlaceholderAd = () => (
    <div 
      className={`bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-gray-500">
        <div className="text-sm font-medium mb-1">Advertisement Space</div>
        <div className="text-xs">{width} × {height}</div>
        <div className="text-xs mt-1 opacity-75">Your ad could be here</div>
      </div>
    </div>
  );

  if (!import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT) {
    return <PlaceholderAd />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`ad-container ${className}`}
      ref={adRef}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width, height }}
        data-ad-client={import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </motion.div>
  );
};

// Declare global adsbygoogle for TypeScript
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}