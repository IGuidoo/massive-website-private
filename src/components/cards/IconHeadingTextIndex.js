import styles from "@/styles/styles";

const IconHeadingTextIndex = ({ cardData, index, activeIndex, setactiveindex }) => {
    return (
        <li
            className={`p-3 gap-4 md:gap-0 md:p-6 flex md:flex-col rounded-lg cursor-pointer 
                ${styles.borderInsetWhite2}
                ${activeIndex === index ? "bg-secondary-50 " : "bg-primary-50 "}
            `}
            
            onClick={() => setactiveindex(index)}
        >
            <div className={`${cardData.indexCard.colors} w-[44px] h-[44px] p-3 rounded `}>
                {cardData.indexCard.icon}
            </div>
            <div className="">
                <h4 className="text-base leading-6 font-semibold md:text-2xl md:leading-8 text-secondary-800 md:pt-6">{cardData.indexCard.heading}</h4>
                <p className="text-sm leading-5 font-medium md:text-base md:leading-6 md:font-semibold text-secondary-500 md:pt-3">{cardData.indexCard.subHeading}</p>
            </div>
        </li>
    );
}

export default IconHeadingTextIndex;