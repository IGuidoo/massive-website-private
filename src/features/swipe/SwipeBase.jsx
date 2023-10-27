"use client"

import React from 'react';
import { useSwipeable } from 'react-swipeable';


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

export default SwipeableBase;