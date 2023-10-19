import styles from '@/styles/styles'
import React from 'react'

const SwipeGridIconsText = ({ data = [], cssClass }) => {
    return (
        <ul className={`grid py-6 w-full h-full ${cssClass}`}>
            {/* Map over data  */}
            {data.map((item, index) => (
                <li
                    key={index}
                    id={item.text}
                    className={`w-full h-full flex flex-col justify-center items-center gap-5  rounded-lg shadow-sm ${styles.borderInsetWhite3} py-6 `}
                >
                    {item.icon}
                    <h3 className='text-[12px] font-semibold' >{item.text}</h3>
                </li>
            ))}
        </ul >
    )
}

export default SwipeGridIconsText