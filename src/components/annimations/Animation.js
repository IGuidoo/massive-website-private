"use client"

// npm install --save @lottiefiles/react-lottie-player

import React, { useEffect, useRef } from "react";
import bodymoving_test from './bodymoving_test.json';
// import animationData from '../assets/animations/test.json';

const AnnimationRef = () => {
    const animatedElRef = useRef(null);
    const lottieAnimationRef = useRef(null);

    // Play animation on mount
    useEffect(() => {
        if (animatedElRef.current) {
            // Settings 
            const animation = lottie.loadAnimation({
                container: animatedElRef.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: bodymoving_test,
                speed: 1
            });
            lottieAnimationRef.current = animation;
        }
    }, []);

    return (
        <div>
            <script defer src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" integrity="sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>

            {/* Canvas for Animation */}
            <div ref={animatedElRef} className="animatedName"></div>
        </div>
    );
};

export default AnnimationRef;