"use client"

import React, { useState } from 'react'

// Import Utilities
import useWindowWidth from '@/utils/hooks/useWindowWidth'

// Import Comopnents
import BrandedContentBlockWithLogo from '../heading-text/BrandedContentBlockWithLogo'

import {
    SwipeableBase,
    SwipeableArrowNavigation,
} from "@/features/swipe";


import SwipeGridIconsText from '../SwipeGridIconsText'

const TextGridIcons = ({ data = [] }) => {
    const windowWidth = useWindowWidth();
    
    // Determine chunk size based on window width or default to mobile configuration
    const chunkSize = (windowWidth === undefined || windowWidth <= 768)
        ? 4
        : (windowWidth <= 1024 ? 9 : 12);

    // Chunk data to show in swipeable grid
    const chunks = chunkArray(data.img, chunkSize);
    function chunkArray(array, chunkSize) {
        const results = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            results.push(array.slice(i, i + chunkSize));
        }
        return results;
    }

    // Define the activeIndex state here -- used in the swipeable components
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <BrandedContentBlockWithLogo data={data.content} hideMbButtons={true} containerStyles="col-span-5 my-auto xl:max-w-lg " />
            <div className="col-span-7 relative">
                <SwipeableBase activeIndex={activeIndex} setActiveIndex={setActiveIndex} itemsCount={chunks.length}>
                    {chunks.map((chunk, index) => (
                        <SwipeGridIconsText key={index} data={chunk} cssClass="grid-cols-2  md:grid-cols-3 lg:grid-rows-4 gap-4" />
                    ))}
                </SwipeableBase>
                <SwipeableArrowNavigation activeIndex={activeIndex} itemsCount={chunks.length} setActiveIndex={setActiveIndex} />

            </div>
        </>
    );
}

export default TextGridIcons