"use client"

import React, { useState, useRef, useEffect } from "react";
import styles from '@/styles/styles'
import parse from 'html-react-parser';
import Boek from '@/images/Boek.png'
import Image from "next/image";


import useWindowWidth from "@/utils/useWindowWidth";

const Diensten = ({ data = [] }) => {
    // states
    const [activeIndex, setActiveIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const accordionRefs = useRef([]);
    const beginSectionRef = useRef(null);


    const windowWidth = useWindowWidth();

    // styles for scrolling
    const contentStyles = {
        overflow: 'hidden',
        transition: 'max-height 1s ease',
        maxHeight: isExpanded ? '3000px' : '750px'
    };

    // styles to show more gradient
    const gradientStyles = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100px',
        background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    }

    // scroll back to top on mobile after the accordion is closed
    const componentJustMounted = useRef(true);

    useEffect(() => {
        if (componentJustMounted.current) {
            componentJustMounted.current = false;
            return;
        }

        if (activeIndex !== null && accordionRefs.current[activeIndex]) {
            const offsetTop = accordionRefs.current[activeIndex].offsetTop;
            window.scrollTo({
                top: offsetTop - 70, // Set extra scroll padding
                behavior: 'smooth'
            });
        }
    }, [activeIndex]);


    // handle scroll to top of section 
    const handleToggleContent = () => {
        if (isExpanded && beginSectionRef.current) {
            beginSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        // Check if window width is less than a certain breakpoint, e.g., 768 for mobile
        if (windowWidth < 768 && isExpanded) {
            // On mobile close the accordion
            setActiveIndex(null);
        }
        setIsExpanded(prevState => !prevState);
    };



    // open and close accordion on mobile
    const handleToggle = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section ref={beginSectionRef} className={` ${styles.gutter} ${styles.mdHorizontalCenter} ${styles.paddingY}`}>
            <div className="md:flex md:gap-12 xl:gap-24">

                {/* Left side navigation Desktop only */}
                <div className='hidden md:flex md:max-w-[260px] md:w-full flex-col p-7 gap-6 bg-secondary-100 rounded-3xl box-content h-fit'>
                    <p className="text-base leading-6 font-medium text-secondary-600">{data.leftSide.title}</p>
                    <div className="flex md:w-full md:flex-col gap-6 cursor-pointer" role="navigation">
                        {data.dienten.map((dienst, index) => (
                            <div
                                className={`bg-secondary-50 whitespace-nowrap text-base px-4 py-2 lg:px-12 lg:py-4 lg:text-lg leading-7 font-medium text-center rounded-lg
                ${activeIndex === index ? "text-indigo-500 border border-1 border-[#9869E9] test" : "text-secondary-600 shadow-sm"}`}
                                key={index}
                                onClick={() => setActiveIndex(index)}
                            >
                                {dienst.subTitle}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className='flex-grow'>
                    {data.dienten.map((diensten, index) => (
                        <div key={index} ref={el => accordionRefs.current[index] = el}>

                            {/* Accordion Header for mobile*/}
                            <div className='cursor-pointer flex gap-4 my-4 md:hidden'

                                onClick={() => handleToggle(index)}>
                                {diensten.icon}
                                <h3 className={`${styles.heading3} self-center`}>{diensten.subTitle}</h3>
                            </div>
                            <div className="md:hidden mb-4 h-[1px] w-full bg-secondary-500"></div>

                            {/* Accordion Content */}
                            <div className={`transition-all ease-in-out duration-300 ${activeIndex === index ? "block" : "hidden"}`}>
                                <div className='hidden md:flex gap-4 mb-8'>
                                    {diensten.icon}
                                    <div className=''>
                                        <p className='text-sm leading-5 font-semibold text-primary-600 '>{diensten.subTitle}</p>
                                        <h2 className='text-3xl leading-9 font-semibold text-secondary-800 mt-[-4px]'>{diensten.title}</h2>
                                    </div>
                                </div>
                                <h2 className='md:hidden text-3xl leading-9 font-semibold text-secondary-800 mt-[-4px]'>{diensten.title}</h2>

                                <div className={`relative`}>
                                    <div id="diensten" style={contentStyles}>
                                        {parse(diensten.body)}
                                    </div>

                                    {/* Gradient Overlay */}
                                    {!isExpanded && (
                                        <div style={gradientStyles} />
                                    )}

                                </div>

                                <button className="self-center mt-6" onClick={handleToggleContent}>
                                    {isExpanded ? 'Lees minder..' : 'Lees meer..'}
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Right side */}
                <div className='hidden 2xl:block 2xl:max-w-[236px] w-full flex-none'>
                    {/* {data.rightSide.icon} */}
                    <Image
                        // className="absolute -bottom-40 -right-44"
                        src={Boek}
                        alt="eBoek"
                        width={287}
                        height={371}
                        unoptimized
                    />
                    {parse(data.rightSide.body)}
                </div>
            </div>
        </section>
    )
}

export default Diensten

