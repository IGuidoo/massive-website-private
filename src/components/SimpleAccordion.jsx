import React from 'react'

import styles from '@/styles/styles'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Accordion = ({ data = [], cssClass, cssIndivClass }) => {


    return (
        <div className={cssClass}>
            {data.map((item, index) => (
                <div key={item.title}>
                    <input
                        type="checkbox"
                        name={`detail-${index}`}
                        id={`detail-${index}`}
                        className='simple-accordion__input'
                    />
                    <div className={`simple-accordion text-base leading-6 font-medium text-secondary-700 md:text-lg md:leading-7 ${cssIndivClass}`}>
                        <label htmlFor={`detail-${index}`} className='flex gap-6 simple-accordion__label py-5'>
                            <h3 className='text-xl leading-7 font-semibold text-secondary-800 simple-accordion__heading'>
                                {item.title}
                            </h3>
                            <ChevronDownIcon className="w-8 h-8 ml-auto chevron" />
                        </label>
                        <div className='px-8 mb-8 simple-accordion__body'>
                            {item.body}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Accordion