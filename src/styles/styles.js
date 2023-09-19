const styles = {
    boxWidth: "xl:max-w-[1536px] w-full",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    horizontalCenter: "ml-auto mr-auto",
    mdHorizontalCenter: "md:ml-auto md:mr-auto",
    verticalCenter: "mt-auto mb-auto",
    mdVerticalCenter: "md:mt-auto md:mb-auto",


    paddingX: "sm:px-16 px-3",
    paddingY: "sm:py-16 py-3",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",



    borderInsetWhite: " border-solid border-white border-1.5",
    borderInsetWhite2: "border-solid border-white border-2",
    borderInsetWhite3: "border-solid border-white border-3",

    buttonP4: "px-8 py-[14px]",

    buttonT2: "text-base leading-6 font-semibold",

    buttonS3: "rounded-lg button-gradient-purple text-secondary-50",


    gutter: 'px-6 md:max-w-[1536px]',
    gutterPadding: 'px-6',



    
    heading1: "text-3xl leading-9 font-bold text-secondary-800 md:text-4xl md:leading-10   ",
    heading2: "text-3xl leading-9 font-bold text-secondary-700 md:text-5xl md:leading-none",
    heading3: "text-2xl leading-8 font-semibold text-secondary-800 md:text-5xl md:leading-none",
    // Footer 
    // heading4: "text-xl leading-7 font-semibold text-gray-700",
    
    subHeading: "text-xs leading-4 font-semibold text-primary-500 md:text-sm md:leading-5",

    text: "text-base leading-6 font-medium text-secondary-700 md:text-lg md:leading-7",
    textSmall: "text-xs leading-4 font-normal text-secondary-600 md:text-base md:leading-6 md:font-normal",





    primaryCTA: "w-full md:w-fit bg-primary-500 px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50",
    secondaryCTA: "w-full md:w-fit bg-secondary-50 text-secondary-600 px-6 py-3 rounded-lg justify-center flex border-solid border-white border-1.5 shadow-md   text-base leading-6 font-semibold text-secondary-50",



    lineAfterElement: `content: '""',
      display: 'block',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      width: '1px',
      backgroundColor: '#e5e7eb', // This is the color for bg-gray-300 in Tailwind
      height: '100%'`,
};

export const layout = {
    // section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;