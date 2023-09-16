import React from "react";
import Link from "next/link";

import { MenuLogo, OutlineMail } from "./icons"

import {
    FacebookGray,
    InstagramGray,
    LinkedinGray,
    TwitterGray,
} from "./icons"

// import { footerData } from "../../constants/footerData";
import styles from "@/styles/styles";
import RenderText from "@/lib/RenderText";



const Footer = () => {
    return (
        <div id="footer" className={` relative }`}> {/*${styles.paddingX*/}
            <div className=" h-[700px]">
                {/* <RenderText content={newsletterSignUpText[0].heading} />
                <RenderText content={newsletterSignUpText[0].text} /> */}
                test
                <div>
                    ADD EMAIL TEMPLATE
                </div>
            </div>

            <footer className={`relative lg:w-[93%] ${styles.horizontalCenter} `} aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                {/* <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">  ${styles.boxWidth} ${styles.horizontalCenter}*/}
                <div className={`relative pt-[52px] px-4 md:px-[50px] lg:px-[104px] lg:pt-24 bg-secondary-50 rounded-t-4xl`}>
                    <div className="grid gap-12 grid-flow-row xl:grid-cols-3 xl:gap-8">
                        <div className="gap-x-4 gap-y-10 gap grid grid-cols-2 md:grid-cols-4 xl:gap-8 xl:col-span-2 xl:mt-0 xl:order-1">

                            <div>
                                <h3 className={`text-xl leading-7 font-semibold text-secondary-700`}>
                                    {footerData.diensten.title}
                                </h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {footerData.diensten.list.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`${styles.textBase}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl leading-7 font-semibold text-secondary-700`}>
                                    {footerData.kennisbank.title}
                                </h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {footerData.kennisbank.list.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`${styles.textBase}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className={`text-xl leading-7 font-semibold text-secondary-700`}>
                                    {footerData.documentatie.title}
                                </h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {footerData.documentatie.list.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`${styles.textBase}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className={`text-xl leading-7 font-semibold text-secondary-700`}>
                                    {footerData.handigeLinks.title}
                                </h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {footerData.handigeLinks.list.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={`${styles.textBase}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between gap-12  xl:gap-[160px]  ">
                            <div>
                                <div className="space-y-12 xl:space-y-8">
                                    <MenuLogo />
                                    <p className={`max-w-[330px] text-sm leading-5 font-normal text-secondary-600 `}> {/*${styles.paragraafSmall}*/}
                                        <RenderText content={footerData.slogan} />
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex space-x-6 justify-center md:justify-normal">
                                    {footerData.social.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={`${styles.textBase}`}
                                        >
                                            <span className="sr-only">{item.name}</span>
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-12 pb-4   grid grid-flow-row gap-4   md:grid-cols-2 text-center md:text-right text-xs text-secondary-500">
                        <div className="flex gap-2 justify-center md:justify-start">
                            {footerData.legal.map((item, index) => (
                                <React.Fragment key={item.name}>
                                    <Link href={item.href}>
                                        {item.name}
                                    </Link>
                                    {index < footerData.legal.length - 1 && <div> | </div>}
                                </React.Fragment>
                            ))}
                        </div>
                        
                        <div className="w-full h-[1px] bg-secondary-300 md:-order-1 md:col-span-2"></div>

                        <p className="">
                            &copy; 2020 Massive - All rights reserved.
                        </p>
                    </div>
                    <div className="absolute h-full  custom-bg-gradient top-0 left-0 -z-10 "></div>
                </div>
                {/*   */}
                <div className={`w-full 2xl:w-[100%]  mx-4 rounded-t-4xl ${styles.horizontalCenter} absolute h-full top-0 -z-10 custom-bg-gradient`}></div>
            </footer>


            <div className={`absolute w-[97%] h-full bg-secondary-100 top-0 -z-20 left-[1.5%]`}></div>

        </div>
    );
};

export default Footer;



const footerData = {
    slogan: ['Onze visie is om de grenzen van traditionele marketing te verleggen om samen met onze partners nieuwe hoogtes te bereiken.'],

    diensten: {
        title: 'Diensten',
        list: [
            { name: 'Website', href: '#' },
            { name: 'eCommerce', href: '#' },
            { name: 'SEO', href: '/seo' },
            { name: 'SEA', href: '#' },
            { name: 'CMS', href: '#' },
            { name: 'Steategie', href: '#' },
        ]
    },

    kennisbank: {
        title: "Kennisbank",
        list: [
            { name: 'Website', href: '#' },
            { name: 'eCommerce', href: '#' },
            { name: 'Seo', href: '#' },
        ],
    },

    documentatie: {
        title: "Documentatie",
        list: [
            { name: 'Code Wiki', href: '#' },
            { name: 'SEO Wiki', href: '/docs' },
        ],
    },

    handigeLinks: {
        title: 'Handige Links',
        list: [
            { name: 'Over Massive', href: '#' },
            { name: 'Massive Webshop', href: '#' },
            { name: 'Blog Generator', href: '#' },
            { name: 'Persona Generator', href: '#' },
            { name: 'Vacatures', href: '#' },
        ]
    },



    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Algemene voorwaarden', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: <FacebookGray />
        },
        {
            name: 'Twitter',
            href: '#',
            icon: <TwitterGray />
        },
        {
            name: 'Instagram',
            href: '#',
            icon: <InstagramGray />
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: <LinkedinGray />
        }
    ],
}