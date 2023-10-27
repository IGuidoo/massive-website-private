"use client"

import React, { useEffect } from "react";

const SwipeableTextNavigation = ({ children, activeIndex, setActiveIndex }) => {
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
        <div ref={containerRef} className={`flex gap-3 md:gap-6 py-3 bg-secondary-50 my-8 overflow-hidden `}>
            {React.Children.map(children, (child, index) => (
                <span
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`whitespace-nowrap rounded-xl cursor-pointer 
          ${activeIndex === index ? " gradient-primary-100 " : "border border-secondary-100 "}`}
                >
                    <h4 className={`whitespace-nowrap rounded-3xl cursor-pointer text-sm leading-5 font-semibold px-6 py-2 
          ${activeIndex === index ? "text-gradient-primary " : "text-secondary-500"}`}>
                        {child}
                    </h4>
                </span>
            ))}
        </div>
    );
};


export default SwipeableTextNavigation;