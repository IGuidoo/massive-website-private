import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import styles from '@/styles/styles';

const SwipeableBase = ({ children, activeIndex, setActiveIndex, useClone = false, itemsCount }) => {
    // Swipeable handlers, used to detect swipe events, 
    // and update the activeIndex state, 
    // which is used to show/hide the correct child, 
    // and update the navigation dots, 
    // Currently, this only supports left/right swiping, 
    // Once itemCount is reached, it will loop back to the beginning
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setActiveIndex(prev => {
                const newIndex = (prev + 1) % itemsCount;
                console.log('swiped left', newIndex);
                return newIndex;
            });
        },
        onSwipedRight: () => {
            setActiveIndex(prev => {
                const newIndex = (prev - 1 + itemsCount) % itemsCount;
                console.log('swiped right', newIndex);
                return newIndex;
            });
        }
    });

    // Swipeable handlers, no loop
    // const handlers = useSwipeable({
    //     onSwipedLeft: () => {
    //         if (activeIndex < itemsCount - 1) {
    //             setActiveIndex(prev => {
    //                 const newIndex = prev + 1;
    //                 console.log('swiped left', newIndex);
    //                 return newIndex;
    //             });
    //         }
    //     },
    //     onSwipedRight: () => {
    //         if (activeIndex > 0) {
    //             setActiveIndex(prev => {
    //                 const newIndex = prev - 1;
    //                 console.log('swiped right', newIndex);
    //                 return newIndex;
    //             });
    //         }
    //     }
    // });
    

    // specify the type of component to render
    if (useClone) {
        return (
            <div {...handlers}>
                {React.Children.map(children, (child) => {
                    // Check if child is a DOM element type
                    if (typeof child.type === 'string') {
                        return child;  // Return the child without adding additional props
                    }
                    // Otherwise, it's a custom component and can receive the props
                    return React.cloneElement(child, { activeIndex, setActiveIndex });
                })}
            </div>
        );
    }

    return (
        <div {...handlers}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className={`${activeIndex === index ? 'block' : 'hidden'}`}>
                    {child}
                </div>
            ))}
        </div>
    );
};


const SwipeableArrowNavigation = ({ activeIndex, itemsCount, setActiveIndex }) => {
    return (
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
    );
};

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
        <div ref={containerRef} className={`flex justify-between rounded-4xl px-5 py-3 bg-secondary-50 my-8 overflow-hidden ${styles.borderInsetWhite3}`}>
            {React.Children.map(children, (child, index) => (
                <span
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`whitespace-nowrap rounded-3xl cursor-pointer text-sm leading-5 font-medium px-6 py-2 
          ${activeIndex === index ? "text-secondary-50 bg-primary-500 shadow-inner" : ""}`}
                >
                    {child}
                </span>
            ))}
        </div>
    );
};

const SwipeableHeading = ({ headings, activeIndex }) => {
    return (
        <h2 className="text-5xl leading-none font-bold text-secondary-800">
            {headings[activeIndex]}
        </h2>
    );
};


export { SwipeableBase, SwipeableArrowNavigation, SwipeableTextNavigation, SwipeableHeading };
