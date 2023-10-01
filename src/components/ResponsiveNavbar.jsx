"use client"

import React, { useEffect } from 'react'
import Link from 'next/link';
import styles from '@/styles/styles';
import useWindowWidth from '@/utils/useWindowWidth';

import MegaDropdown from '@/components/navbar/MegaDropdown.jsx';
import SmallDropdownWithIcons from './navbar/SmallDropdownWithIcons';
import { MenuLogo, OutlineMail } from "@/components/icons"



const ResponsiveNavbar = () => {
    const windowWidth = useWindowWidth();


    useEffect(() => {
        /*=============== SHOW MENU ===============*/
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)

            // Function to toggle menu
            const toggleMenu = () => {
                // Add show-menu class to nav menu
                nav.classList.toggle('show-menu')
                // Add show-icon to show and hide menu icon
                toggle.classList.toggle('show-icon')
            }

            // Add click event listener to toggle
            toggle.addEventListener('click', toggleMenu)

            // Return cleanup function to remove event listener
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

            // Function to handle button click
            const handleButtonClick = () => {
                // Select the current show-dropdown class
                const showDropdown = document.querySelector('.show-dropdown')
                // Call the toggleItem function
                toggleItem(item)
                // Remove the show-dropdown class from other items
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

            // If the same item contains the show-dropdown class, remove
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
                // Remove the dropdown container height style
                dropdownContainer.forEach((e) => e.removeAttribute('style'))
                // Remove the show-dropdown class from dropdown item
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
        <header className="relative top-0 left-0 w-full shadow-md bg-white z-10">
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
                        <MegaDropdown />

                        {/* <!--=============== DROPDOWN 2 ===============--> */}
                        <SmallDropdownWithIcons />

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


const discover = [
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