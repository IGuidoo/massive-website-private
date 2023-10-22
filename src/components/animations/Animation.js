"use client"

// npm install --save @lottiefiles/react-lottie-player

import React, { useEffect, useRef } from "react";
import bodymoving_test from './bodymoving_test.json';
// import animationData from '../assets/animations/test.json';
import lottie from 'lottie-web';

const AnimationRef = () => {
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
            <script defer type="module" src="/lottie.min.js" ></script>

            {/* Canvas for Animation */}
            <div ref={animatedElRef} className="animatedName"></div>
        </div>
    );
};

export default AnimationRef;