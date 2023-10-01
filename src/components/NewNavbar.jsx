"use client"

import React, { useState } from 'react'
import Link from 'next/link';

const NewNavbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [dropMenuOpen, setDropMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);


    return (
        <nav className="z-10 w-full bg-gray-900">
            <div className="relative max-w-screen-xl px-8 py-4 mx-auto flex items-center justify-between">
                <Link className='text-white text-2xl font-semibold' href="/">
                    Massive logo
                </Link>
                <ul className={`${navOpen ? "block" : "hidden"} absolute top-full left-0 z-20 bg-gray-900 w-full px-8 py-4 flex flex-col space-y-4 lg:relative lg:top-0 lg:left-auto lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 lg:bg-transparent`}>
                    <li className="relative group"
                        onMouseEnter={() => setDropMenuOpen(true)}
                        onMouseLeave={() => setDropMenuOpen(false)}>
                        <a
                            href="#"
                            className="text-white text-lg hover:bg-gray-700 px-2 py-1 rounded flex items-center justify-between"
                        >
                            Dropdown Menu
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <ul
                            className={`${dropMenuOpen ? "block" : "hidden"
                                } absolute left-0 mt-2 w-48 bg-gray-900 text-white text-lg py-2 rounded flex flex-col space-y-2`}
                        >
                            <li>
                                <a href="#" className="px-4 py-2 hover:bg-gray-700 block">
                                    Drop menu 1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="px-4 py-2 hover:bg-gray-700 block">
                                    Drop menu 2
                                </a>
                            </li>
                            {/* ... other dropdown menu items */}


                        </ul>
                    </li>
                    <li className="relative group"
                        onMouseEnter={() => setMegaMenuOpen(true)}
                        onMouseLeave={() => setMegaMenuOpen(false)}>
                        <a
                            href="#"
                            className="text-white text-lg hover:bg-gray-700 px-2 py-1 rounded flex items-center justify-between"
                        >
                            Mega Menu
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        {/* Mega Menu Items */}
                        <div
                            className={`${megaMenuOpen ? "block" : "hidden"
                                } absolute left-0 mt-2 w-96 bg-gray-900 text-white text-lg py-4 px-4 rounded grid grid-cols-2 gap-4`}
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Design Services</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="hover:text-gray-400">
                                            Graphics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-400">
                                            Vectors
                                        </a>
                                    </li>
                                    {/* ... other mega menu items */}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Email Services</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="hover:text-gray-400">
                                            Personal Email
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-gray-400">
                                            Business Email
                                        </a>
                                    </li>
                                    {/* ... other mega menu items */}
                                </ul>
                            </div>
                            {/* ... other mega menu columns */}
                        </div>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="text-white text-2xl"
                    >
                        {navOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default NewNavbar