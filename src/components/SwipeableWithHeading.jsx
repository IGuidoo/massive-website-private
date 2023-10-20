"use client"

import RenderText from "@/lib/RenderText";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "@/styles/styles";

const SwipeableWithHeading = ({ children, headings }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsCount = React.Children.count(children);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (activeIndex < itemsCount - 1) {
                setActiveIndex(prev => prev + 1);
            }
        },
        onSwipedRight: () => {
            if (activeIndex > 0) {
                setActiveIndex(prev => prev - 1);
            }
        }
    });

    const heading = headings[activeIndex];
    const containerRef = React.useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
    
        const selectedItem = container.children[activeIndex];
        if (!selectedItem) return;
    
        const containerMid = container.offsetWidth / 2;
        const itemMid = selectedItem.offsetWidth / 2;
    
        // Compute the distance to scroll. This ensures the selected item is centered.
        const scrollLeft = selectedItem.offsetLeft - containerMid + itemMid;
    
        container.scrollLeft = scrollLeft;
    }, [activeIndex]);
    

    return (
        <div {...handlers}>
            <h2 className="text-5xl leading-none font-bold text-secondary-800">
                {/* <RenderText content={heading} /> */}
                {heading}
            </h2>
            <div ref={containerRef} className={`flex justify-between rounded-4xl px-5 py-3 bg-secondary-50 my-8 overflow-hidden ${styles.borderInsetWhite3}`}>
                {React.Children.map(children, (child, index) => {
                    const typeOfBusiness = child.props.typeOfBusiness;
                    return (
                        <>
                            <span
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={` whitespace-nowrap rounded-3xl cursor-pointer text-sm leading-5 font-medium px-6 py-2 
                                ${activeIndex === index ? "text-secondary-50 bg-primary-500 shadow-inner" : ""}`}
                            >
                                {typeOfBusiness}
                            </span>
                        </>
                    );
                })}
            </div>
            {React.Children.map(children, (child, index) => (
                <div key={index} className={`${activeIndex === index ? 'block' : 'hidden'}`}>
                    {child}
                </div>
            ))}
        </div>
    );
};

export default SwipeableWithHeading;
