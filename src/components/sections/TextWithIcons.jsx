import React from 'react'

import styles from '@/styles/styles'
import { LogoSmall } from '../icons'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const TextWithIcons = ({ data = [] }) => {
    return (
        <section className={` ${styles.gutter} ${styles.mdHorizontalCenter} ${styles.paddingY} z-10 relative`}>
            <div className='flex flex-col gap-4 items-center pb-12 lg:pb-24'>
                <div className="flex text-xs leading-4">
                    <LogoSmall />
                    {data.title.topText.map((textObj, textIndex) => (
                        <p key={textIndex} className={`${textObj.className}`}>
                            {textObj.content}
                        </p>
                    ))}
                </div>
                <h3 className={`${styles.heading2}`}>{data.title.heading}</h3>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-2 gap-8'>
                {data.content.map((item) => (

                    <div key={item.title} className='text-base leading-6 font-medium text-secondary-700 md:text-lg md:leading-7'>
                        <div className='flex gap-6 items-center pb-4 '>
                            <div className={`${ item.colors } w-[44px] h-[44px] p-3 rounded border border-1 border-white shadow-sm`}>
                                {item.icon}
                            </div>
                            <h3 className='text-xl leading-7 font-semibold text-secondary-800'>{item.title}</h3>
                        </div>
                        {item.body}
                    </div>

                ))}
            </div>
        </section>
    )
}

export default TextWithIcons


