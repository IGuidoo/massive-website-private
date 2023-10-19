"use client"

import React from 'react'

// Import Utilities
import useWindowWidth from '@/utils/useWindowWidth'

// Import Comopnents
import LogoSubHeadingHeadingTextButtons from '../LogoSubHeadingHeadingTextButtons'
import SwipeGridIconsText from '../SwipeGridIconsText'
import SwipeableContainer from '../SwipeableContainer'

const TextGridIcons = ({ data = [] }) => {

    const windowWidth = useWindowWidth();

    // Determine chunk size based on window width or default to mobile configuration
    const chunkSize = (windowWidth === undefined || windowWidth <= 768)
        ? 4
        : (windowWidth <= 1024 ? 9 : 12);

    // Chunk your data
    const chunks = chunkArray(data.img, chunkSize);


    function chunkArray(array, chunkSize) {
        const results = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            results.push(array.slice(i, i + chunkSize));
        }
        return results;
    }
    

    return (
        <>
            <LogoSubHeadingHeadingTextButtons data={data.content} hideMbButtons={true} cssClass="col-span-5 my-auto" />
            <div className="col-span-7">
                <SwipeableContainer>
                    {chunks.map((chunk, index) => (
                        <SwipeGridIconsText key={index} data={chunk} cssClass="grid-cols-2  md:grid-cols-3 lg:grid-rows-4 gap-4" />
                    ))}
                </SwipeableContainer>
            </div>
        </>
    )

}

export default TextGridIcons