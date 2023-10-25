"use client"

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import Script from 'next/script'

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
        else {
            <Script
                id="Clarity"
            >
            {`
                    (function(c,l,a,r,i,t,y){
                        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "jg7avbatlf");
            `}
            </Script>

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