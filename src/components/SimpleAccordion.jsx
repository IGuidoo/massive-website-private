import React from 'react'

import styles from '@/styles/styles'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Accordion = ({ data = [], cssClass, cssIndivClass }) => {


    return (
        <div className={`${cssClass}`} >
            {data.map((item, index) => (
                <div>
                    <input type="checkbox" name="detail-one" id={`detail-${index}`} className='simple-accordion__input' />
                    <details open key={item.title} className={` simple-accordion text-base leading-6 font-medium text-secondary-700 md:text-lg md:leading-7 ${cssIndivClass}`}>
                        <summary className='p-8'>
                            <label for={`detail-${index}`} className='flex gap-6 simple-accordion__label'>
                                <h3 className='text-xl leading-7 font-semibold text-secondary-800 simple-accordion__heading'>{item.title}</h3>
                                <ChevronDownIcon className="w-8 h-8 ml-auto chevron" />
                            </label>
                        </summary>
                        <div className='px-8 mb-8 simple-accordion__body'>
                            {item.body}

                        </div>
                    </details>
                </div>

            ))}
        </div>
    )

}

export default Accordion