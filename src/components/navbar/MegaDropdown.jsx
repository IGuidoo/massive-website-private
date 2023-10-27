"use client"

import React from 'react'
import Link from 'next/link'
import styles from '@/styles/styles'
import useWindowWidth from '@/utils/hooks/useWindowWidth'
import { ChevronDownIcon } from '@heroicons/react/20/solid';


const MegaDropdown = ({ data }) => {
    const windowWidth = useWindowWidth();

    return (
        <li className="dropdown__item flex flex-col lg:flex-row place-self-center">
            {/* Change px and py to gutter */}
            <div className="dropdown__button flex justify-between items-center text-sm font-semibold leading-6 text-secondary-900 px-6 py-5 "> 
                {data.title} <ChevronDownIcon className='w-6 dropdown__arrow' />
            </div>

            <div className="dropdown__container max-w-[1200px] w-full mx-auto lg:px-16 bg-white shadow-md cursor-pointer">
                <div className=' max-h-max   '>
                    <div className='grid grid-flow-row gap-7 max-w-[1500px] mx-auto lg:grid-flow-col'>
                        {data.dropdown.map((item, index) => (
                            <div key={item.title} className={`flex flex-col pl-10 gap-2 lg:pl-0 lg:py-16 lg:align-baseline lg:gap-5 ${windowWidth <= 1024 ? (index === 0 ? 'mt-5' : '') + (index === data.length - 1 ? 'mb-5' : '') : ''}`}>
                                <div className='w-[60px] h-[60px] bg-primary-200 rounded-full grid place-items-center mb-4'>
                                    <i className={`${item.icon} text-xl lg:text-3xl text-primary-600`}></i>
                                </div>
                                <span className='text-base leading-6 font-medium text-secondary-700'>{item.title}</span>
                                <ul className='flex flex-col gap-1 lg:gap-3'>
                                    {item.list.map((linkItem) => (
                                        <li key={linkItem.name} className='h-fit'>
                                            <Link href={linkItem.href} className={`${styles.textBase} hover:text-primary-600`}>{linkItem.name}</Link>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        </li>
    )
}

export default MegaDropdown



