"use client"

import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const SwipeableContainer = ({ children }) => {
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

    return (
        <div {...handlers}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className={`${activeIndex === index ? 'block' : 'hidden'}`}>
                    {child}
                </div>
            ))}
            <div className="flex justify-center mt-4 items-center">
                <button 
                    onClick={() => setActiveIndex(prev => (prev > 0 ? prev - 1 : 0))}
                    disabled={activeIndex === 0}
                    aria-label="Previous item"
                    role="button"
                    className="hidden lg:block"
                >
                    ◀
                </button>
                {Array.from({ length: itemsCount }).map((_, index) => (
                    <span
                        key={index}
                        className={`h-4 w-4 mx-1 rounded-full ${activeIndex === index ? "bg-primary-500" : "bg-secondary-400"}`}
                    ></span>
                ))}
                <button 
                    onClick={() => setActiveIndex(prev => (prev < itemsCount - 1 ? prev + 1 : itemsCount - 1))}
                    disabled={activeIndex === itemsCount - 1}
                    aria-label="Next item"
                    role="button"
                    className="hidden lg:block"
                >
                    ▶
                </button>
            </div>
        </div>
);
};

export default SwipeableContainer;
