"use client"

// utils/useWindowWidth.js
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // Initialize state with undefined, so we know when client-side code is not yet run
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to the state
      setWindowWidth(window.innerWidth);
    }
    
    // Only run the following code when window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Set the initial width
      handleResize();

      // Add event listener for resize
      window.addEventListener('resize', handleResize);
      
      // Clean up event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowWidth;
};

export default useWindowWidth;

