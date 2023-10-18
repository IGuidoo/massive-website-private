import React from 'react'
import Link from 'next/link'

// Import Utilities
import styles from '@/styles/styles'
import RenderText from '@/lib/RenderText'

// Import Assets
import { LogoSmall } from '@/components/icons'


const LogoSubHeadingHeadingTextButtons = ({ data = [] }) => {
    return (
        <div className="flex flex-col gap-6 xl:max-w-lg grid-pos-row-1">
            <div className="flex gap-3">
                <LogoSmall />
                <p className="text-[12px] sm:text-sm leading-4">
                    {data.subHeading.map((textObj, textIndex) => (
                        <span key={textIndex} className={`${textObj.className}`}>
                            {textObj.content}
                        </span>
                    ))}
                </p>
            </div>

            <h2 className={`${styles.heading2} `}>
                {data.heading}
            </h2>


            <p className={`${styles.paragraaf} `}>
                {data.text}
            </p>

            <div
                className={`${styles.verticalCenter} flex flex-col xl:flex-row gap-4 pb-8 md:pb-0`}
            >
                {data.buttons.map((button, index) => (
                    <Link
                        key={index}
                        href={`${button.url}`}
                        className={`${button.className}`}
                    >
                        {button.content}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LogoSubHeadingHeadingTextButtons