"use client"

import React, { useEffect, useState, useMemo } from "react";

// Import Utilities
import useWindowWidth from "@/utils/useWindowWidth";
import styles from "@/styles/styles.js";
import AnimationRef from "@/components/animations/Animation";
// Import Components
import { SwipeableBase, SwipeableArrowNavigation, SwipeableHeading, SwipeableTextNavigation } from "./SwipeableTest";
import IconHeadingTextIndex from "./cards/IconHeadingTextIndex";

const ShowContentBasedOnActiveElement = ({ data = [], indexCardType }) => {
    const activeIndexShownFirst = 0;
    const [activeServiceIndex, setActiveServiceIndex] = useState(activeIndexShownFirst);
    const [activeBusinessIndex, setActiveBusinessIndex] = useState(0);

    useEffect(() => {
        setActiveBusinessIndex(0);  // Reset inner index when service changes
    }, [activeServiceIndex]);

    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;

    const CardComponent = useMemo(() => getIndexCardComponent(indexCardType), [indexCardType]);

    return (
        <>
            <div className={`flex flex-col md:grid grid-cols-4 gap-6`}>
                {data.map((dienst, index) => (
                    <CardComponent
                        key={index}
                        cardData={dienst}
                        index={index}
                        activeIndex={activeServiceIndex}
                        setactiveindex={setActiveServiceIndex}
                    />

                ))}
            </div>
            <div>
                {data.map((dienst, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 gap-8 xl:gap-16
                                                    xl:grid-cols-2 mt-12 xl:mt-24 ${activeServiceIndex === index ? "block" : "hidden"
                            }`}
                    >
                        <div>
                            <SwipeableBase activeIndex={activeBusinessIndex} setActiveIndex={setActiveBusinessIndex} useClone={true} itemsCount={dienst.content.selection.length}>
                                <SwipeableHeading headings={dienst.content.selection.map(item => item.heading)} />

                                <SwipeableTextNavigation>
                                    {dienst.content.selection.map(item => item.typeOfBusiness)}
                                </SwipeableTextNavigation>

                                {dienst.content.selection.map((item, index) => (
                                    <div key={index} className={`${activeBusinessIndex === index ? 'block' : 'hidden'}`}>
                                        <div className="flex flex-col gap-6 md:gap-12">
                                            {/* {isMobile && <AnnimationRef />} */}
                                            {item.content.map((contentItem, index) => (
                                                <div key={index}>
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
                                    </div>
                                ))}


                                <SwipeableArrowNavigation />
                            </SwipeableBase>




                        </div>
                        <div className="my-auto">
                            {/* {!isMobile &&  */}
                            <AnimationRef />
                            {/* // } */}
                        </div>
                    </div>
                ))}


            </div>
        </>
    )
}

export default ShowContentBasedOnActiveElement


function getIndexCardComponent(type) {
    switch (type) {
        case "IconHeadingTextIndex":
            return IconHeadingTextIndex;
        // You can add more cases if you have other types of index cards
        default:
            return () => null; // Default component that renders nothing
    }
}