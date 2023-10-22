"use client"

import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import SimpleForm from "@/components/SimpleForm";
import styles from "@/styles/styles";
import useWindowWidth from '@/utils/useWindowWidth'; // adjust the path according to your folder structure

const FooterSignUp = ({ data = [] }) => {
    const [loadAnimation, setLoadAnimation] = useState(false);
    const windowWidth = useWindowWidth();
    const isXL = windowWidth >= 1280;
    const ref = useRef(null);

    useEffect(() => {
        if (isXL) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    // Load the animation when this element is in view
                    setLoadAnimation(true);
                    observer.disconnect(); // No need to keep observing once we've loaded the animation
                }
            });

            observer.observe(ref.current);

            // Clean up on component unmount
            return () => {
                observer.disconnect();
            };
        }
    }, [isXL]);

    const SplineRaket = loadAnimation && dynamic(() => import('@/animations/Raket'), {
        loading: () => <div></div>, // Optional loading component
        ssr: false  // This will only load the component on the client side
    });

    return (
        <>
            <div className="py-[75px] lg:py-[130px]">
                <div className="flex flex-col gap-12 ">
                    <div className="max-w-[560px] mx-auto text-center flex flex-col gap-8">
                        <h2
                            className={`${styles.heading1} text-center`}
                        >
                            {data.heading}
                        </h2>
                        <p className="text-secondary-500 max-w-[363px] mx-auto">
                            {data.text}
                        </p>
                    </div>
                    <div className={`max-w-[750px] w-full mx-auto px-6 md:px-8 py-4 shadow-sm bg-secondary-50 rounded-2xl border border-white`}>
                        <SimpleForm data={data.cta1} />
                    </div>
                </div>
            </div>
            <div ref={ref}>
                {SplineRaket && <SplineRaket className="top-10 right-[10%] -z-10 hidden xl:block" />}
            </div>
        </>
    );
}


export default FooterSignUp;
