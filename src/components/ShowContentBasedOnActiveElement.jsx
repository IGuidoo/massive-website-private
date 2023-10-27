"use client"

import React, { useEffect, useState, useMemo } from "react";

// Import Components
// import { SwipeableBase, SwipeableArrowNavigation, SwipeableHeading, SwipeableTextNavigation } from "../features/swipe/SwipeableTest";
import {
    SwipeableBase,
    SwipeableArrowNavigation,
    SwipeableTextNavigation,
    SwipeableHeading,
} from "@/features/swipe";

import IconHeadingTextIndex from "./cards/IconHeadingTextIndex";
import IconLeftHeadingText from "./cards/IconLeftHeadingText";
import { HomeEcommerce } from "@/assets/images";

const ShowContentBasedOnActiveElement = ({ data = [], indexCardType }) => {
    const activeIndexShownFirst = 0;
    const [activeServiceIndex, setActiveServiceIndex] = useState(activeIndexShownFirst);
    const [activeBusinessIndex, setActiveBusinessIndex] = useState(0);

    useEffect(() => {
        setActiveBusinessIndex(0);  // Reset inner index when service changes
    }, [activeServiceIndex]);

    const CardComponent = useMemo(() => getIndexCardComponent(indexCardType), [indexCardType]);

    return (
        <>
            <ul className={`flex flex-col md:grid grid-cols-4 gap-6`}>
                {data.map((dienst, index) => (
                    <CardComponent
                        key={index}
                        cardData={dienst}
                        index={index}
                        activeIndex={activeServiceIndex}
                        setactiveindex={setActiveServiceIndex}
                    />

                ))}
            </ul>
            <div>
                {data.map((dienst, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-1 gap-8 xl:gap-16 xl:grid-cols-2 mt-8 xl:mt-12 ${activeServiceIndex === index ? "block" : "hidden"}`}
                    >
                        <SwipeableBase activeIndex={activeBusinessIndex} setActiveIndex={setActiveBusinessIndex} useClone={true} itemsCount={dienst.content.selection.length}>
                            <SwipeableHeading headings={dienst.content.selection.map(item => item.heading)} />

                            <SwipeableTextNavigation>
                                {dienst.content.selection.map(item => item.typeOfBusiness)}
                            </SwipeableTextNavigation>

                            {dienst.content.selection.map((item, index) => (
                                <div key={index} className={`${activeBusinessIndex === index ? 'block' : 'hidden'}`}>
                                    <ul className="flex flex-col gap-6 md:gap-12">
                                        {item.content.map((data, index) => (
                                            <IconLeftHeadingText key={index} data={data} />
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </SwipeableBase>

                        <div className="my-auto p-20 m-12 bg-primary-100 rounded-3xl">
                            <HomeEcommerce />
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