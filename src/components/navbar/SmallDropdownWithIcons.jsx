"use client"

import React from 'react'
import Link from 'next/link'
import styles from '@/styles/styles'


const SmallDropdownWithIcons = ({ data }) => {

    return (
        <li className="dropdown__item relative flex flex-col lg:flex-row place-self-center">
            {/* Change px and py to gutter */}
            <div className={`dropdown__button flex justify-between items-center text-sm font-semibold leading-6 text-secondary-900 ${styles.gutter} py-5 `} >
                {data.title} <i className="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div className="dropdown__container  bg-white lg:rounded-3xl lg:translate-x-[-30%]" style={{width: "max-content"}}>
                <div className="p-4 w-full  lg:max-w-max">
                    {data.dropdown.list.map((item) => (
                        <div
                            key={item.name}
                            className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon className="h-6 w-6 text-secondary-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                                <Link href={item.href} className="block font-semibold text-secondary-900">
                                    <h4>{item.name}</h4>
                                    <span className="absolute inset-0" />
                                </Link>
                                <p className="mt-1 text-secondary-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </li>
    )
}

export default SmallDropdownWithIcons



