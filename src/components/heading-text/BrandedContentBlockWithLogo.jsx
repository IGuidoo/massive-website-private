import React from 'react'
import Link from 'next/link'

// Import Utilities
import styles from '@/styles/styles'
import RenderText from '@/lib/RenderText'

// Import Assets
import { MassiveLogoColor } from '@/assets/massiveBranding'


const BrandedContentBlockWithLogo = ({ data = [], containerStyles, hideMbButtons }) => {
    return (
        <div className={`flex flex-col gap-6 xl:max-w-lg ${containerStyles}`}>
            <div className="flex gap-3 items-center">
                <MassiveLogoColor className="w-5 h-3" />
                <p className="text-[12px] sm:text-sm leading-4">
                    {data.subHeading.map((textObj, textIndex) => (
                        <span key={textIndex} className={`${textObj.className}`}>
                            {textObj.content}
                        </span>
                    ))}
                </p>
            </div>

            <h2 className={`${styles.heading4xl} `}>
                <RenderText content={data.heading} />
            </h2>


            <p className={`${styles.text} `}>
                {data.text}
            </p>

            <div
                className={`${styles.verticalCenter} flex flex-col xl:flex-row gap-4 pb-8 md:pb-0 mt-[80px] ${hideMbButtons ? "hidden md:flex" : ""}`}
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

export default BrandedContentBlockWithLogo