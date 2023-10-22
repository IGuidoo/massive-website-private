import React from 'react'
import styles from '@/styles/styles'

const IconLeftHeadingText = ({ data = [], containerStyles }) => {
    return (
        <>
            {data.map((contentItem, index) => (
                <li key={index} className={`${containerStyles}`}>
                    <div className="flex flex-col gap-3 md:flex-row md:gap-6">
                        <div className={`text-primary-500 shadow-lg flex-none ${styles.borderInsetWhite2} w-[44px] h-[44px] p-3 rounded `}>
                            {contentItem.icon}
                        </div>
                        <div>
                            <h4 className="text-xl leading-7 font-semibold text-secondary-800">{contentItem.heading}</h4>
                            <p className="pt-1">{contentItem.text}</p>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-green-100 md:hidden"></div>
                </li>
            ))}    </>
    )
}

export default IconLeftHeadingText