const SwipeableHeading = ({ headings, activeIndex }) => {
    return (
        <h2 className="text-5xl leading-none font-bold text-secondary-800">
            {headings[activeIndex]}
        </h2>
    );
};

export default SwipeableHeading;