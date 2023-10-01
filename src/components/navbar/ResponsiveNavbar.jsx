"use client"

import React, { useEffect } from 'react'
import Link from 'next/link';
import styles from '@/styles/styles';
import  "@/components/navbar/ResponsiveNavbar.css"
import "@/styles/icons.css"

import MegaDropdown from '@/components/navbar/MegaDropdown.jsx';
import SmallDropdownWithIcons from './SmallDropdownWithIcons';
import { MenuLogo, OutlineMail } from "@/components/icons"

import {
    ComputerDesktopIcon,
    ShoppingCartIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    ServerIcon,
    PresentationChartLineIcon,
} from '@heroicons/react/24/outline'


const ResponsiveNavbar = () => {
    useEffect(() => {
        /*=============== SHOW MENU ===============*/
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)

            // Function to toggle menu
            const toggleMenu = () => {
                nav.classList.toggle('show-menu')
                toggle.classList.toggle('show-icon')
            }

            toggle.addEventListener('click', toggleMenu)
            return () => toggle.removeEventListener('click', toggleMenu);
        }

        // Array to hold cleanup functions
        const cleanupFuncs = [];
        // Call showMenu and store cleanup function
        cleanupFuncs.push(showMenu('nav-toggle', 'nav-menu'))

        /*=============== SHOW DROPDOWN MENU ===============*/
        const dropdownItems = document.querySelectorAll('.dropdown__item')

        // Loop through each dropdown item
        dropdownItems.forEach((item) => {
            const dropdownButton = item.querySelector('.dropdown__button')
            const handleButtonClick = () => {
                const showDropdown = document.querySelector('.show-dropdown')
                toggleItem(item)
                if (showDropdown && showDropdown !== item) {
                    toggleItem(showDropdown)
                }
            }

            // Add click event listener to dropdown button
            dropdownButton.addEventListener('click', handleButtonClick)

            // Store cleanup function to remove event listener
            cleanupFuncs.push(() => dropdownButton.removeEventListener('click', handleButtonClick));
        })

        // Function to display the dropdown
        const toggleItem = (item) => {
            // Select each dropdown content
            const dropdownContainer = item.querySelector('.dropdown__container')
            if (item.classList.contains('show-dropdown')) {
                dropdownContainer.removeAttribute('style')
                item.classList.remove('show-dropdown')
            } else {
                // Add the maximum height to the dropdown content and add the show-dropdown class
                dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
                item.classList.add('show-dropdown')
            }
        }

        /*=============== DELETE DROPDOWN STYLES ===============*/
        const mediaQuery = matchMedia('(min-width: 1024px)'),
            dropdownContainer = document.querySelectorAll('.dropdown__container')

        // Function to remove dropdown styles in mobile mode when browser resizes
        const removeStyle = () => {
            // Validate if the media query reaches 1118px
            if (mediaQuery.matches) {
                dropdownContainer.forEach((e) => e.removeAttribute('style'))
                dropdownItems.forEach((e) => e.classList.remove('show-dropdown'))
            }
        }

        // Add resize event listener
        window.addEventListener('resize', removeStyle)

        // Store cleanup function to remove event listener
        cleanupFuncs.push(() => window.removeEventListener('resize', removeStyle));

        // Return cleanup function from useEffect to run when component unmounts
        return () => cleanupFuncs.forEach(cleanupFunc => cleanupFunc());

    }, []);




    return (
        // <!--=============== HEADER ===============-->
        <header className="relative top-0 left-0 w-full shadow-mdW z-10">
            <nav className={` p-6 lg:h-20 lg:flex   ${styles.gutter} max-w-[1536px] mx-auto `} >
                <div className=" h-full flex justify-between items-center" style={{ flexGrow: "1.8" }}>
                    <Link href="/" className=''>
                        Massive
                    </Link>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-menu-line nav__toggle-menu"></i>
                        <i className="ri-close-line nav__toggle-close"></i>
                    </div>
                </div>

                {/* <!--=============== NAV MENU ===============--> */}
                <div className="nav__menu lg:flex lg:flex-grow lg:justify-between" id="nav-menu">
                    <ul className="nav__list">
                        {/* <!--=============== DROPDOWN 1 ===============--> */}
                        <MegaDropdown data={discover} />

                        {/* <!--=============== DROPDOWN 2 ===============--> */}
                        <SmallDropdownWithIcons data={diensten} />

                    </ul>

                    <ul className="nav__list">
                        <li className={`flex place-self-center ${styles.gutter} py-5`} >
                            <Link href="/docs" className={`text-sm font-semibold leading-6 text-secondary-900 place-self-center`}>
                                Blog
                            </Link>
                        </li>
                        <li className={` flex flex-col lg:flex-row px-4 lg:px-0 self-center`}>
                            <Link href="/contact" className={`contact-home text-sm leading-6 font-semibold text-primary-100 py-2`}>
                                <OutlineMail />
                                Contact
                            </Link>
                        </li>

                    </ul>
                </div>

                <div>
                </div>
            </nav>
        </header>
    )
}

export default ResponsiveNavbar


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

const diensten = {
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
