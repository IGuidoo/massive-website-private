"use client"

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import klaro without SSR
const Klaro = dynamic(() => import('klaro'), {
  ssr: false,
  loading: () => null, // You can return a placeholder component if needed
});

import klaroConfig from '@/config/klaro-config';

function KlaroConsent() {
  const klaroInstance = useRef(null);

  useEffect(() => {
    // Attach the config to the window object
    window.klaroConfig = klaroConfig;

    // Check if the imported Klaro is an object with a setup function
    if (Klaro && typeof Klaro.setup === "function") {
      Klaro.setup(window.klaroConfig);
      klaroInstance.current = Klaro;
    } else {
      console.warn("Unexpected Klaro object:", Klaro);
    }
  }, []);

  return null;
}

export default KlaroConsent;
