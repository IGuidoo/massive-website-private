"use client"

import React, { useEffect, useRef } from 'react';
import useWindowWidth from '@/utils/useWindowWidth';
import CircularSegment from '../CircularSegment';
import { SpeedIndex, Toegankelijkheid } from '../icons';
import styles from '@/styles/styles';

const PageSpeedStats = () => {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768; // Adjust this value as per your requirements

    const updateSpeed = 12;
    const planetSpeed = 0.25;

    const divOneRef = useRef(null);
    const divTwoRef = useRef(null);
    const divThreeRef = useRef(null);

    let orbitOne = 150
    let orbitTwo = 250
    let orbitThree = 350
    let orbitFour = 450
    let maxRadius = 500


    const orbits = [
        { radius: orbitOne },
        { radius: orbitTwo },
        { radius: orbitThree },
        { radius: orbitFour },
    ];

    const planets = [
        {
            element: divOneRef,
            radius: orbitTwo,
            angle: -178,
            direction: planetSpeed,
        },
        {
            element: divTwoRef,
            radius: orbitThree,
            angle: -100,
            direction: planetSpeed,
        },
        {
            element: divThreeRef,
            radius: orbitFour,
            angle: -50,
            direction: planetSpeed,
        },
    ];


    useEffect(() => {
        function updatePlanetPosition() {
            planets.forEach((planet) => {
                const { element, radius, angle, direction } = planet;
                if (element.current) {
                    element.current.style.left = maxRadius + radius * Math.cos(angle * (Math.PI / 180)) + "px";
                    element.current.style.top = maxRadius + radius * Math.sin(angle * (Math.PI / 180)) + "px";
                    if (angle >= 0 || angle <= -180) planet.direction = -planet.direction;
                    planet.angle += planet.direction;
                }
            });
            setTimeout(updatePlanetPosition, updateSpeed);
        }

        updatePlanetPosition();

        return () => clearTimeout(updatePlanetPosition);
    }, []);

    return (
        <>
            <div className="pageSpeedAnnimationContainer left-1/2 transform -translate-x-1/2 overflow-hidden">
                {orbits.map((orbit, index) => (
                    <div className="orbit" style={{ width: orbit.radius * 2, height: orbit.radius * 2 }} key={index}></div>
                ))}


                {/* {!isMobile && (
                <> */}
                <svg
                    className="orbitingDiv"
                    id="orbitingDivTwo"
                    ref={divTwoRef}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_dd_2482_6883)">
                        <rect x="3" y="2" width="48" height="48" rx="4" fill="#F9FAFB" />
                        <path
                            d="M32.25 20.75L37.5 26L32.25 31.25M21.75 31.25L16.5 26L21.75 20.75M29.25 17.75L24.75 34.25"
                            stroke="#8B5CF6"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <rect
                            x="3.75"
                            y="2.75"
                            width="46.5"
                            height="46.5"
                            rx="3.25"
                            stroke="white"
                            stroke-width="1.5"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_dd_2482_6883"
                            x="0"
                            y="0"
                            width="54"
                            height="54"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2482_6883"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_2482_6883"
                                result="effect2_dropShadow_2482_6883"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_2482_6883"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
                <svg
                    className="orbitingDiv"
                    id="orbitingDivOne"
                    ref={divOneRef}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_dd_2482_6871)">
                        <rect x="3" y="2" width="48" height="48" rx="4" fill="#F9FAFB" />
                        <path
                            d="M18 22.25V32C18 32.5967 18.2371 33.169 18.659 33.591C19.081 34.0129 19.6533 34.25 20.25 34.25H33.75C34.3467 34.25 34.919 34.0129 35.341 33.591C35.7629 33.169 36 32.5967 36 32V22.25M18 22.25V20C18 19.4033 18.2371 18.831 18.659 18.409C19.081 17.9871 19.6533 17.75 20.25 17.75H33.75C34.3467 17.75 34.919 17.9871 35.341 18.409C35.7629 18.831 36 19.4033 36 20V22.25M18 22.25H36M20.25 20H20.258V20.008H20.25V20ZM22.5 20H22.508V20.008H22.5V20ZM24.75 20H24.758V20.008H24.75V20Z"
                            stroke="#8B5CF6"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <rect
                            x="3.75"
                            y="2.75"
                            width="46.5"
                            height="46.5"
                            rx="3.25"
                            stroke="white"
                            stroke-width="1.5"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_dd_2482_6871"
                            x="0"
                            y="0"
                            width="54"
                            height="54"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2482_6871"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_2482_6871"
                                result="effect2_dropShadow_2482_6871"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_2482_6871"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
                <svg
                    className="orbitingDiv"
                    id="orbitingDivThree"
                    ref={divThreeRef}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_dd_2482_6886)">
                        <rect x="3" y="2" width="48" height="48" rx="4" fill="#F9FAFB" />
                        <path
                            d="M30.59 28.37C30.7982 29.2511 30.8044 30.1678 30.608 31.0516C30.4116 31.9354 30.0177 32.7633 29.4559 33.4732C28.8941 34.1832 28.1789 34.7568 27.364 35.1511C26.549 35.5454 25.6553 35.7501 24.75 35.75V30.95M30.59 28.37C32.4999 26.9788 34.0536 25.1555 35.1242 23.0491C36.1947 20.9427 36.7519 18.6129 36.75 16.25C34.3873 16.2483 32.0577 16.8055 29.9515 17.8761C27.8452 18.9467 26.0221 20.5003 24.631 22.41M30.59 28.37C28.8519 29.6413 26.8603 30.5214 24.75 30.95M24.75 30.95C24.647 30.971 24.543 30.991 24.439 31.01C23.5318 30.2906 22.7104 29.4692 21.991 28.562C22.0099 28.4578 22.0289 28.3538 22.05 28.25M24.631 22.41C23.7499 22.2016 22.833 22.1953 21.9491 22.3916C21.0652 22.588 20.2371 22.9818 19.5271 23.5436C18.817 24.1054 18.2433 24.8207 17.8489 25.6357C17.4546 26.4508 17.2498 27.3446 17.25 28.25H22.05M24.631 22.41C23.3599 24.1478 22.4788 26.14 22.05 28.25M19.811 30.64C19.1532 31.1292 18.6417 31.789 18.332 32.548C18.0223 33.307 17.9262 34.1363 18.054 34.946C18.8638 35.0737 19.6932 34.9774 20.4522 34.6675C21.2112 34.3577 21.871 33.846 22.36 33.188M31.5 23C31.5 23.3978 31.342 23.7794 31.0607 24.0607C30.7794 24.342 30.3978 24.5 30 24.5C29.6022 24.5 29.2206 24.342 28.9393 24.0607C28.658 23.7794 28.5 23.3978 28.5 23C28.5 22.6022 28.658 22.2206 28.9393 21.9393C29.2206 21.658 29.6022 21.5 30 21.5C30.3978 21.5 30.7794 21.658 31.0607 21.9393C31.342 22.2206 31.5 22.6022 31.5 23Z"
                            stroke="#8B5CF6"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <rect
                            x="3.75"
                            y="2.75"
                            width="46.5"
                            height="46.5"
                            rx="3.25"
                            stroke="white"
                            stroke-width="1.5"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_dd_2482_6886"
                            x="0"
                            y="0"
                            width="54"
                            height="54"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_2482_6886"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_2482_6886"
                                result="effect2_dropShadow_2482_6886"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_2482_6886"
                                result="shape"
                            />
                        </filter>
                    </defs>
                </svg>
                {/* </> */}
                {/* )} */}


            </div>
            <div className={` w-full px-30 shadow-inner rounded-3xl ${styles.borderInsetWhite3} vertical-white-gradient__page-speed page-speed__content-container relative  `} style={{ marginTop: -maxRadius }}>
                <SpeedIndex className="pageSpeedIndex" />
                <div className='absolute top-[-20px] h-[20px] bg-secondary-50 w-full'></div>
                <p className='pt-20 lg:pt-8 text-center md:text-left  text-xl leading-7 font-semibold'>Statestieken om over te pieken</p>
                <div className='h-[1px] w-full md:max-w-[430px] bg-secondary-300 mt-2 '></div>
                <div className='lg:grid grid-cols-3 py-12'>
                    <div className='flex flex-col gap-3 md:gap-12'>
                        {pageSpeedData.stats.map((stat, index) => (
                            <div key={index} className='flex gap-4 items-center'>
                                <div>
                                    {stat.icon}
                                </div>
                                <p className={`text-center w-full ml-auto md:text-left md:w-fit md:m-0 ${styles.borderInsetWhite2} bg-secondary-50 py-2 px-4 rounded-lg shadow-sm  text-base leading-6 font-semibold text-secondary-700`} >{stat.text}</p>
                            </div>

                        ))}
                    </div>
                    <div className='col-span-2 flex flex-col gap-3 md:grid grid-cols-2 md:gap-0 grid-rows-3 mt-8 lg:mt-0'>
                        {pageSpeedData.speedStats.map((stat, index) => (
                            <div key={index} className='flex gap-4 w-full md:flex-col md:gap-2 md:w-fit page-speed__item-container'>
                                <div className='flex gap-4 items-center  page-speed__item-container-desk'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#A7F3D0" />
                                        <circle cx="8" cy="8" r="4" fill="#10B981" />
                                    </svg>
                                    <p className='text-base leading-6 font-medium text secondary-700'>{stat.text}</p>
                                </div>
                                <p className='text-xl leading-7 font-medium text-green-600 ml-auto md:ml-12'>{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageSpeedStats


const pageSpeedData = {
    heading: "Statestieken om over te pieken",
    stats: [
        { icon: <Toegankelijkheid />, text: "Toegankelijkheid" },
        { icon: <Toegankelijkheid />, text: "Praktische Tips" },
        { icon: <Toegankelijkheid />, text: "SEO" },
    ],
    speedStats: [
        { text: "First Contentful Paint", value: "0,8 s" },
        { text: "Total Blocking Time", value: "10 ms" },
        { text: "Speed Index", value: "0,8 s" },
        { text: "Large Contentful Paint", value: "1,1 s" },
        { text: "Cumulative Layout Shift", value: "0" },
    ]
}