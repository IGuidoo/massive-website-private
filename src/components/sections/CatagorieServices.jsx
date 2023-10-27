"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useSwipeable } from "react-swipeable";

// Import Utilities
import styles from "@/styles/styles.js"
import RenderText from "@/lib/RenderText";

// Import Assets
import { MassiveLogoColor } from "@/assets/massiveBranding"


const CatagoriesServices = ({ data = [] }) => {
  const activeDienstIndexShownFirst = 0;
  const [activeDienstIndex, setActiveDienstIndex] = useState(
    activeDienstIndexShownFirst
  );
  useEffect(() => {
    setActiveDienstIndex(activeDienstIndexShownFirst);
  }, []);


  // Swipe funcion 
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeDienstIndex < data[0].diensten.length - 1) {
        setActiveDienstIndex(prev => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (activeDienstIndex > 0) {
        setActiveDienstIndex(prev => prev - 1);
      }
    }
  });

  return (
    <section className=" my-15 md:py-40">
      <div
        className={`relative  bg-secondary-50 md:bg-white shadow-lg  rounded-4xl p-4 lg:p-12 2xl:p-24 ${styles.boxWidth} ${styles.mdHorizontalCenter} ${styles.borderInsetWhite2} `}
      >
        <h2
          className={`${styles.heading2} ${styles.horizontalCenter} max-w-3xl text-center mb-7 hidden md:block`}
        >
          <RenderText content={data[0].heading} />
        </h2>

        {/* list items */}
        <div className={`${styles.flexCenter} gap-4 xl:gap-8 hidden md: md:flex-wrap md:flex`}>
          {data[0].diensten.map((dienst, index) => (
            <div
              className={`px-7 py-2 xl:px-13.5 xl:py-3.5 rounded-full cursor-pointer
                ${styles.borderInsetWhite}
            shadow-sm
            text-base leading-6 font-semibold ${activeDienstIndex === index
                  ? "bg-purple-100 text-indigo-400"
                  : "bg-gray-100 text-gray-500"
                }`}
              key={index}
              onClick={() => setActiveDienstIndex(index)}
            >
              {dienst.buttonText}
            </div>
          ))}
        </div>

        {/* Item contents */}
        <div {...handlers}>
          {data[0].diensten.map((dienst, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 gap-8 xl:gap-16
                        xl:grid-cols-2 mt-12 xl:mt-24 ${activeDienstIndex === index ? "block" : "hidden"
                }`}
            >
              {dienst.img}

              <div className="flex flex-col gap-6 xl:max-w-lg grid-pos-row-1">
                <div className="flex gap-3">
                  <MassiveLogoColor className="w-6 h-3" />
                  <p className="text-[12px] sm:text-sm leading-4">
                    {dienst.topText.map((textObj, textIndex) => (
                      <span key={textIndex} className={`${textObj.className}`}>
                        {textObj.content}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="relative">
                  <h2 className={`${styles.heading2} `}>
                    <RenderText content={dienst.heading} />
                  </h2>
                  <div className=" absolute w-2 xl:w-4 h-[100%] bg-gray-700 left-[-1rem] lg:left-[-3rem] md 2xl:left-[-6rem] top-0 rounded-tr-md rounded-br-md"></div>
                </div>

                <p className={`${styles.paragraaf} `}>
                  <RenderText content={dienst.text} />
                </p>

                <div className="flex justify-center mt-4 md:hidden">
                  {Array.from({ length: data[0].diensten.length }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 mx-1 rounded-full ${activeDienstIndex === index ? "bg-gray-500" : "bg-gray-400"}`}
                    ></span>
                  ))}
                </div>

                <div
                  className={`${styles.verticalCenter} flex flex-col xl:flex-row gap-4 pb-8 md:pb-0`}
                >
                  <Link
                    href={`${dienst.cta2Slug}`}
                    className={`${styles.secondaryCTA}`}
                  >
                    {dienst.cta1Text}
                  </Link>
                  <Link
                    href={`${dienst.cta2Slug}`}
                    className={`${styles.primaryCTA}`}
                  >
                    {dienst.cta2Text}
                  </Link>
                </div>
              </div>

            </div>
          ))}
          <div className={`-z-50 absolute top-0 left-0 h-full w-full custom-bg-gradient rounded-b-4xl ${styles.boxWidth}`}></div>
        </div>
      </div>
    </section>
  );
};

export default CatagoriesServices;



