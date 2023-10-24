"use client"

import { useEffect } from "react";
import { useCookies } from "react-cookie";

function LoadCookies() {
    const [cookies] = useCookies(['marketing', 'analytics', 'statistics']);

    useEffect(() => {
        if (cookies.marketing) {
            console.log('Marketing cookies accepted');
        }
        if (cookies.analytics) {
            console.log('Analytics cookies accepted');
            // ...
        }
        if (cookies.statistics) {
            console.log('Statistics cookies accepted');
            // ...
            // loadScript('path-to-statistics-script.js')
        }
    }, [cookies]);

    const loadScript = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.head.appendChild(script);
    }

    return null;  // This component doesn't need to render anything
}


export default LoadCookies