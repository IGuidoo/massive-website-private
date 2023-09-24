import React, { useState } from 'react';
import parse from 'html-react-parser';

const Accordion = ({ diensten }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    // Ref to scrol back to after closing the diensten 
    const beginSectionRef = React.useRef(null);

    // Scroll back to top of section 
    const handleToggleContent = () => {
        if (isExpanded && beginSectionRef.current) {
            beginSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsExpanded(prevState => !prevState);
    };


    const [openedAccordionIndex, setOpenedAccordionIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenedAccordionIndex(openedAccordionIndex === index ? null : index);
    };

    return (
        <>
            {diensten.map((item, index) => (
                <div key={index} ref={beginSectionRef}>
                    <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
                        {item.subTitle}
                    </div>
                    <div className={`accordion-content ${openedAccordionIndex === index ? 'expanded' : ''}`}>
                        {parse(item.body)}

                    </div>
                        {/* Open en close content */}
                        <button className="self-center mt-6" onClick={handleToggleContent}>
                            {isExpanded ? 'Lees minder..' : 'Lees meer..'}
                        </button>

                </div>
            ))}
        </>
    );
};

export default Accordion;
