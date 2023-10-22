"use client"

// npm install --save @lottiefiles/react-lottie-player

import React, { useEffect, useRef } from "react";
import useNearScreen from "@/utils/useNearScreen";

// import { Partytown } from '@builder.io/partytown/react';
import bodymoving_test from './bodymoving_test.json';
import lottie from 'lottie-web';

const AnimationRef = () => {
    const [animatedElRef, isNearScreen] = useNearScreen();
    const lottieAnimationRef = useRef(null);

    useEffect(() => {
        if (isNearScreen && !lottieAnimationRef.current) {
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
    }, [isNearScreen, animatedElRef]);

    return (
        <div>
            {isNearScreen && <script defer type="text/partytown" src="/lottie.min.js" />}
            <div ref={animatedElRef} className="animatedName"></div>
        </div>
    );
};

export default AnimationRef;