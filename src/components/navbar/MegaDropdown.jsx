"use client"

import React from 'react'
import Link from 'next/link'
import styles from '@/styles/styles'
import useWindowWidth from '@/utils/useWindowWidth'

const MegaDropdown = () => {
    const windowWidth = useWindowWidth();

    return (
        <li className="dropdown__item flex flex-col lg:flex-row place-self-center">
            {/* Change px and py to gutter */}
            <div className="dropdown__button flex justify-between items-center text-sm font-semibold leading-6 text-secondary-900 px-6 py-5 "> 
                {discover.title} <i className="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div className="dropdown__container">
                <div className=' max-h-max bg-white shadow-md cursor-pointer '>
                    <div className='grid grid-flow-row gap-7 max-w-[1500px] mx-auto lg:grid-flow-col'>
                        {discover.dropdown.map((item, index) => (
                            <div key={item.title} className={`flex flex-col pl-10 gap-2 lg:pl-0 lg:py-16 lg:align-baseline lg:gap-5 ${windowWidth <= 1024 ? (index === 0 ? 'mt-5' : '') + (index === discover.length - 1 ? 'mb-5' : '') : ''}`}>
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


const discover = {
    "title": "Discover",
    "dropdown": [
        {
            "icon": "ri-flashlight-line",
            "title": "Most viewed courses",
            "list": [
                { "name": "HTML for beginers", "href": "#" },
                { "name": "Advanced CSS", "href": "#" },
                { "name": "JavaScript OOP", "href": "#" },
            ]

        },
        {
            "icon": "ri-heart-3-line",
            "title": "Popular cources",
            "list": [
                { "name": "Development with Flutter", "href": "#" },
                { "name": "Web development with React", "href": "#" },
                { "name": "Backend development expert", "href": "#" },
            ]

        },
        {
            "icon": "ri-book-mark-line",
            "title": "Careers",
            "list": [
                { "name": "Web development", "href": "#" },
                { "name": "Applecations development", "href": "#" },
                { "name": "UI/UX design", "href": "#" },
                { "name": "Informatic security", "href": "#" },
            ]

        },
        {
            "icon": "ri-file-paper-2-line",
            "title": "Certifications",
            "list": [
                { "name": "Course certificates", "href": "#" },
                { "name": "Free certivicates", "href": "#" },
            ]

        },

    ]
}

