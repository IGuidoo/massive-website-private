"use client"

import React, { useEffect, useState } from "react";

// Import Utilities
import styles from "@/styles/styles.js"
import SwipeableWithHeading from "./SwipeableWithHeading";
// import AnnimationRef from "./annimations/Animation";
import useWindowWidth from "@/utils/useWindowWidth";


const ShowContentBasedOnActiveElement = ({ data = [] }) => {
    const activeIndexShownFirst = 0;
    const [activeIndex, setActiveIndex] = useState(
        activeIndexShownFirst
    );
    useEffect(() => {
        setActiveIndex(activeIndexShownFirst);
    }, []);

    const windowWidth = useWindowWidth()
    const isMobile = windowWidth <= 768

    return (
        <>
            <div className={`flex flex-col md:grid grid-cols-4 gap-6`}>
                {data.map((dienst, index) => (
                    <div
                        className={`p-3 gap-4 md:gap-0 md:p-6 flex md:flex-col rounded-lg ${styles.borderInsetWhite2}
                ${activeIndex === index
                                ? "bg-secondary-50 "
                                : "bg-primary-50 "
                            }`}
                        key={index}
                        onClick={() => setActiveIndex(index)}
                    >
                        <div className={`${dienst.indexCard.colors} w-[44px] h-[44px] p-3 rounded `}>
                            {dienst.indexCard.icon}
                        </div>
                        <div className="">
                            <h4 className="text-base leading-6 font-semibold md:text-2xl md:leading-8 text-secondary-800 md:pt-6">{dienst.indexCard.heading}</h4>
                            <p className="text-sm leading-5 font-medium md:text-base md:leading-6 md:font-semibold text-secondary-500 md:pt-3">{dienst.indexCard.subHeading}</p>

                        </div>
                    </div>
                ))}
            </div>
            <div>
                {data.map((dienst, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 gap-8 xl:gap-16
                                                    xl:grid-cols-2 mt-12 xl:mt-24 ${activeIndex === index ? "block" : "hidden"
                            }`}
                    >
                        <div>
                            <SwipeableWithHeading setActiveIndex={setActiveIndex} headings={dienst.content.selection.map(item => item.heading)}>
                                {dienst.content.selection.map((item, index) => (
                                        
                                        <div key={index} typeofbusiness={item.typeOfBusiness} className="flex flex-col gap-6 md:gap-12">
                                            {/* {isMobile && <AnnimationRef />} */}
                                            {item.content.map(contentItem => (
                                                <div key={contentItem.heading}>
                                                    <div className="flex flex-col gap-3 md:flex-row md:gap-6">
                                                        <div className={`text-primary-500 shadow-lg flex-none ${styles.borderInsetWhite2} w-[44px] h-[44px] p-3 rounded `}>
                                                            {contentItem.icon}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xl leading-7 font-semibold text-secondary-800">{contentItem.heading}</h4>
                                                            <p className="pt-1">{contentItem.text}</p>
                                                        </div>
                                                    </div>
                                                    <div className="h-[1px] w-full bg-green-100 md:hidden"></div>

                                                </div>
                                            ))}

                                        </div>
                                ))}
                            </SwipeableWithHeading>


                        </div>
                        <div className="my-auto">
                            {/* {!isMobile && <AnnimationRef />} */}
                        </div>
                    </div>
                ))}


            </div>
        </>
    )
}

export default ShowContentBasedOnActiveElement