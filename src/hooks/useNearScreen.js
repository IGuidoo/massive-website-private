"use client"

import { useState, useEffect, useRef } from 'react';

const useNearScreen = (rootMargin = '100px 0px') => {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsNearScreen(true);
                observer.disconnect();
            }
        }, {
            rootMargin: rootMargin
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            observer.disconnect();
        };
    }, [rootMargin]);

    return [ref, isNearScreen];
};

export default useNearScreen;
