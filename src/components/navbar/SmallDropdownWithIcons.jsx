"use client"

import React from 'react'
import Link from 'next/link'
import styles from '@/styles/styles'
import useWindowWidth from '@/utils/useWindowWidth'
import {
    ComputerDesktopIcon,
    ShoppingCartIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    ServerIcon,
    PresentationChartLineIcon,
} from '@heroicons/react/24/outline'

const SmallDropdownWithIcons = () => {
    const windowWidth = useWindowWidth();

    return (
        <li className="dropdown__item relative flex flex-col lg:flex-row place-self-center">
            {/* Change px and py to gutter */}
            <div className={`dropdown__button flex justify-between items-center text-sm font-semibold leading-6 text-secondary-900 ${styles.gutter} py-5 `} >
                {discover.title} <i className="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div className="dropdown__container  bg-white lg:rounded-3xl " style={{width: "max-content"}}>
                <div className="p-4 w-full  lg:max-w-max">
                    {discover.dropdown.list.map((item) => (
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


const discover = {
    "title": "Diensten",
    "dropdown":
    {
        "title": "Most viewed courses",
        "list": [
            { name: 'SEO', description: 'Stijg uit boven je concurenten', href: '/seo', icon: ChartBarIcon },
            { name: 'SEA', description: 'Effective SEA-Campanges', href: '/online-marketing', icon: CursorArrowRaysIcon },
            { name: 'Website', description: 'Creative, datagedreven websites', href: '/website-laten-maken', icon: ComputerDesktopIcon },
            { name: 'eCommerce', description: 'Online web-winkeloplossingen', href: '/webshop-laten-maken', icon: ShoppingCartIcon },
            { name: 'Strategie', description: 'Doelgerichte online strategieën', href: '/online-strategie', icon: PresentationChartLineIcon },
            // { name: 'CMS', description: 'Innovatief contentbeheer', href: '#', icon: ServerIcon },
        ]

    }

}

