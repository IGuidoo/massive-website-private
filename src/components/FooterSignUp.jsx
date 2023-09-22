"use client"

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import SimpleForm from "@/components/SimpleForm";
import styles from "@/styles/styles";


const SplineRaket = dynamic(() => import('@/animations/Raket'), {
    loading: () => <div></div>, // Optional loading component
    ssr: false  // This will only load the component on the client side
});



const Test = ({ data = [] }) => {
    const [isXL, setIsXL] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            if (window.innerWidth >= 1280) {
                setIsXL(true);
            } else {
                setIsXL(false);
            }
        };

        checkWindowSize(); // Initial check
        window.addEventListener('resize', checkWindowSize);

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

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
            {isXL && <SplineRaket className=" top-10 right-[10%] -z-10 hidden xl:block" />}

        </>
    )
}

export default Test