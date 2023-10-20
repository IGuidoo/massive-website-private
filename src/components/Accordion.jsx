"use client"

// components/Accordion.js
import { useState } from 'react';
import styles from '@/styles/styles';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Accordion = ({ title, body, cssClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    const contentTransitionDuration = isOpen ? "duration-700" : "duration-500";


    return (
        <div className={`${cssClass}`}>
            <div
                className="cursor-pointer p-8 flex justify-between items-center "
                onClick={handleToggle}
            >
                <h3 className={`text-xl leading-7 font-semibold transition-colors duration-500  ${isOpen ? "text-primary-500" : "text-secondary-800"} `}>
                    {title}
                </h3>
                <ChevronDownIcon className={`w-8 h-8 ml-auto transform transition-transform duration-500 ${isOpen ? "-rotate-90" : ""}`} />
            </div>
            <div
                className={`overflow-hidden transition-max-height ${contentTransitionDuration} ease-in ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}
            >
                <div className="px-8 pb-8 text-lg leading-7 font-medium">
                    
                    {body}
                </div>
            </div>
        </div>
    );
};


export default Accordion;
