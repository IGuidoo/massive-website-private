import React from 'react'
import styles from '@/styles/styles'

const IconLeftHeadingText = ({ data = [], containerStyles }) => {
    return (
        <li className={`${containerStyles}`}>
            <div className="flex flex-col gap-3 md:flex-row md:gap-6">
                <div className={` text-gradient-primary-css shadow-lg flex-none ${styles.borderInsetWhite2} w-[44px] h-[44px] p-3 rounded `}>
                    {data.icon}
                </div>
                <div>
                    <h4 className="text-xl leading-7 font-semibold text-gradient-primary-css">{data.heading}</h4>
                    <p className="pt-1">{data.text}</p>
                </div>
            </div>
            <div className="h-[1px] w-full bg-green-100 md:hidden"></div>
        </li>
    )
}

export default IconLeftHeadingText