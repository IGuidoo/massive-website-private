import React from 'react'

import styles from '@/styles/styles'
import { LogoSmall } from '../icons'

const TextWithIcons = ({ data = [] }) => {
    return (
        <>
            <div className='flex flex-col gap-4 items-center pb-12 md:pb-11'>
                <div className="flex text-xs leading-4">
                    <LogoSmall />
                    {data.title.topText.map((textObj, textIndex) => (
                        <p key={textIndex} className={`${textObj.className}`}>
                            {textObj.content}
                        </p>
                    ))}
                </div>
                <h3 className={`${styles.heading4xl}`}>{data.title.heading}</h3>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-2'>
                {data.content.map((item) => (
                    <div key={item.title} className='text-base leading-6 font-medium text-secondary-700 md:text-lg md:leading-7 p-4 md:p-8'>
                        <div className='flex gap-6 items-center'>
                            <div className={`${item.colors} w-[44px] h-[44px] p-3 rounded border border-1 border-white shadow-sm`}>
                                {item.icon}
                            </div>
                            <h3 className='text-xl leading-7 font-semibold text-secondary-800'>{item.title}</h3>
                        </div>
                        {item.body ? (
                            <div className='pt-4'>
                                {item.body}
                            </div>
                        ) : null}
                    </div>

                ))}
            </div>
        </>
    )
}

export default TextWithIcons


