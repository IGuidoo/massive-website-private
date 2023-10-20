"use client"

import React, { useEffect, useState } from "react";

// Import Utilities
import styles from "@/styles/styles.js"


const ShowContentBasedOnActiveElement = ({ data = [] }) => {
  const activeIndexShownFirst = 0;
  const [activeIndex, setActiveIndex] = useState(
    activeIndexShownFirst
  );
  useEffect(() => {
    setActiveIndex(activeIndexShownFirst);
  }, []);

  return (
    <>
      <div className={`${styles.flexCenter} gap-4 xl:gap-8 hidden md: md:flex-wrap md:flex`}>
        {data[0].diensten.map((dienst, index) => (
          <div
            className={`px-7 py-2 xl:px-13.5 xl:py-3.5 rounded-full cursor-pointer
                ${styles.borderInsetWhite}
            shadow-sm
            text-base leading-6 font-semibold ${activeIndex === index
                ? "bg-purple-100 text-indigo-400"
                : "bg-gray-100 text-gray-500"
              }`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {dienst.buttonText}
          </div>
        ))}
      </div>
      <div>
        {data[0].diensten.map((dienst, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 gap-8 xl:gap-16
                        xl:grid-cols-2 mt-12 xl:mt-24 ${activeIndex === index ? "block" : "hidden"
              }`}
          >
            {dienst.img}

            <div className="flex flex-col gap-6 xl:max-w-lg grid-pos-row-1">

<p>contet</p>

            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default ShowContentBasedOnActiveElement