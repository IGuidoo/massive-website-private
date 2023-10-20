"use client"

import React from "react"
import { Suspense } from "react"
import '@/styles/tailwind.css'
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/styles.js"

import LatestDevelopments from "@/components/LatestDevelopments"
import Footer from "@/components/Footer"
import Carousel from "@/components/Carousel"
import Hero from "../components/Hero"
import Navbar from "@/components/Navbar.jsx"
import CatagoriesServices from "@/components/CatagorieServices"

import {
    Allinone1,
    Allinone2,
    Allinone3,
    LogoSmall,
    PurpleCheckmark,
    HomeMobileBackgroundPNG,

    GoogleGray,
    WordpressGray,
    ShopifyGray,
    OpenaiGray,
    ReactGray,
    GoogleAnalyticsGray,
    AdobeGray,

    FacebookGray,
    InstagramGray,
    LinkedinGray,
    TwitterGray,
} from "../components/icons"

// import homeMobileBackgroundPNG from "../../public/images/homeMobileBackgroundPNG.png
// import test from "@/components/icons/test.svg"

export const metadata = {
    title: {
        template: 'hoi',
        default: 'Home Massive Online Marketing',
    },
    description:
        'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function page() {
    return (
        <div className="">
            <div className="relative bg-white rounded-b-4xl md:bg-transparent">
                <Navbar />
                <Hero data={HeroData} />
                <div className="absolute md:w-[93%] left-[3.5%] top-0 -z-10 md:h-full bg-white rounded-b-4xl border-solid border-white border-3 shadow-lg"></div>
                <div className="absolute bottom-[-16px] w-full h-[50%] -z-20 rounded-b-4xl custom-bg-gradient md:w-[90%] md:left-[5%] md:h-[130%]"></div>
                <div className={`absolute bottom-[-34px] w-full h-full -z-30 bg-secondary-100 rounded-b-4xl md:bottom-[-49px] md:w-[97%] md:left-[1.5%]  md:h-[230%] md:border-solid md:border-white md:border-3`}></div>
            </div>
            <main>
                <AllInOne data={allinoneData} />
                <div className="md:relative overflow-x-clip">
                    <OverOns data={OverOnsData} />
                </div>

                <Suspense>
                    <CatagoriesServices data={CatagoriesServecesData} />
                </Suspense>

                <div className="relative">
                    <LatestDevelopments data={LatestDevelopmentsData} />
                </div>

                    </div>
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36`}>
                    <TextWithIcons data={TextIconData} />
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36 lg:grid lg:grid-cols-12 `}>
                    <TextGridIcons data={newOverOns} />
                </section>

                <section className={` mx-auto py-15 mb:py-36 `}>
                    <div className="flex flex-col gap-2 max-w-[950px] mx-auto">
                        {faqData.map((item, index) => (
                            <>
                                <AccordionSinge key={index} title={item.title} body={item.body} cssClass={`md:rounded-2xl ${styles.borderInsetWhite3} shadow-sm`} />
                                {index !== faqData.length - 1 && (
                                    <svg className="hidden md:block self-center" width="26" height="16" viewBox="0 0 26 16" fill="none">
                                        <g filter="url(#filter0_i_2429_52275)">
                                            <mask id="path-1-outside-1_2429_52275" maskUnits="userSpaceOnUse" x="0" y="-0.388672" width="25" height="16" fill="black">
                                                <rect fill="white" y="-0.388672" width="25" height="16" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.237 10.1152L5.68523 14.667H1V9.98178L10.3705 0.611328H15.0557V5.16312L19.6075 0.611328H24.2927V5.29656L14.9222 14.667H10.237V10.1152Z" />
                                            </mask>
                                            <g filter="url(#filter1_i_2429_52275)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.237 10.1152L5.68523 14.667H1V9.98178L10.3705 0.611328H15.0557V5.16312L19.6075 0.611328H24.2927V5.29656L14.9222 14.667H10.237V10.1152Z" fill="#E7E5E4" />
                                            </g>
                                            <path d="M10.237 10.1152H10.5447V9.37238L10.0194 9.89765L10.237 10.1152ZM5.68523 14.667V14.9747H5.81268L5.9028 14.8846L5.68523 14.667ZM1 14.667H0.692303V14.9747H1V14.667ZM1 9.98178L0.782425 9.76421L0.692303 9.85433V9.98178H1ZM10.3705 0.611328V0.303631H10.243L10.1529 0.393753L10.3705 0.611328ZM15.0557 0.611328H15.3634V0.303631H15.0557V0.611328ZM15.0557 5.16312H14.748V5.90596L15.2733 5.38069L15.0557 5.16312ZM19.6075 0.611328V0.303631H19.48L19.3899 0.393753L19.6075 0.611328ZM24.2927 0.611328H24.6004V0.303631H24.2927V0.611328ZM24.2927 5.29656L24.5103 5.51413L24.6004 5.42401V5.29656H24.2927ZM14.9222 14.667V14.9747H15.0497L15.1398 14.8846L14.9222 14.667ZM10.237 14.667H9.92932V14.9747H10.237V14.667ZM10.0194 9.89765L5.46765 14.4494L5.9028 14.8846L10.4546 10.3328L10.0194 9.89765ZM5.68523 14.3593H1V14.9747H5.68523V14.3593ZM1.3077 14.667V9.98178H0.692303V14.667H1.3077ZM1.21757 10.1994L10.588 0.828903L10.1529 0.393753L0.782425 9.76421L1.21757 10.1994ZM10.3705 0.919025H15.0557V0.303631H10.3705V0.919025ZM14.748 0.611328V5.16312H15.3634V0.611328H14.748ZM15.2733 5.38069L19.8251 0.828903L19.3899 0.393753L14.8381 4.94554L15.2733 5.38069ZM19.6075 0.919025H24.2927V0.303631H19.6075V0.919025ZM23.985 0.611328V5.29656H24.6004V0.611328H23.985ZM24.0751 5.07898L14.7047 14.4494L15.1398 14.8846L24.5103 5.51413L24.0751 5.07898ZM14.9222 14.3593H10.237V14.9747H14.9222V14.3593ZM10.5447 14.667V10.1152H9.92932V14.667H10.5447Z" fill="white" mask="url(#path-1-outside-1_2429_52275)" />
                                            <path d="M25 15.3818L17.9995 15.3818L25 8.38135L25 15.3818Z" fill="#E7E5E4" stroke="white" stroke-width="0.333357" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_i_2429_52275" x="0.692383" y="0.303711" width="24.4746" height="15.8605" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.615394" />
                                                <feGaussianBlur stdDeviation="0.615394" />
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2429_52275" />
                                            </filter>
                                            <filter id="filter1_i_2429_52275" x="0.692383" y="0.303711" width="23.9082" height="14.9786" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="0.307697" />
                                                <feGaussianBlur stdDeviation="0.153849" />
                                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2429_52275" />
                                            </filter>
                                        </defs>
                                    </svg>
                                )}
                            </>
                        ))}
                    </div>
                </section>

                <section className={`${styles.boxWidth} mx-auto py-15 mb:py-36 relative overflow-hidden `}>
                    <SubHeadingHeadingText data={pageSpeedData.title} cssClass="gap-4 md:gap-4 w-full max-w-[800px] absolute z-10 top-[20%]  md:top-[26%] absolute-center md:text-center md:items-center px-6" />
                    <PageSpeedStats />
                </section>





            </main>
            <Footer />
        </div>
    )
}


const AllInOne = ({ data }) => {
    return (
        <section className=' py-15'>
            <div className={`${styles.gutter} ${styles.mdHorizontalCenter}`}>
                <div className={`pb-7 max-w-[1090px] md:text-center ${styles.mdHorizontalCenter}`}>
                    <div className='flex md:justify-center'>
                        <div className="flex text-xs leading-4">
                            <LogoSmall />
                            {data.topText.map((textObj, textIndex) => (
                                <p key={textIndex} className={`${textObj.className}`}>
                                    {textObj.content}
                                </p>
                            ))}
                        </div>
                    </div>
                    <h3 className={`${styles.heading2} pt-2`}>
                        {data.heading}
                    </h3>
                </div>


                <div className='grid grid-flow-row gap-16 py-15 md:grid-flow-col md:auto-cols-fr md:gap-12  md:py-20 lg:gap-32 xl:py-32  xl:gap-64'>
                    <Allinone1 />
                    <div className='flex flex-col gap-2 md:gap-6 md:my-auto'>
                        <h4 className={`${styles.subHeading}`}>{data.col1.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col1.heading}</h5>
                        <p className={`${styles.text}`}>{data.col1.text}</p>
                    </div>
                </div>

                <div className='grid grid-flow-row gap-16 py-15 md:grid-flow-col md:auto-cols-fr md:gap-12  md:py-20 lg:gap-32 xl:py-32  xl:gap-64'>
                    <Allinone2 className='md:order-2' />
                    <div className='flex flex-col gap-2 md:gap-6 md:my-auto'>
                        <h4 className={`${styles.subHeading}`}>{data.col2.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col2.heading}</h5>
                        <p className={`${styles.text}`}>{data.col2.text}</p>
                    </div>
                </div>

                <div className='grid grid-flow-row gap-16 py-15 md:grid-flow-col md:auto-cols-fr md:gap-12  md:py-20 lg:gap-32 xl:py-32  xl:gap-64'>
                    <Allinone3 />
                    <div className='flex flex-col gap-2 md:gap-6 md:my-auto'>
                        <h4 className={`${styles.subHeading}`}>{data.col3.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col3.heading}</h5>
                        <p className={`${styles.text}`}>{data.col3.text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const OverOns = ({ data = [] }) => {
    return (

        <section className={`${styles.gutter} ${styles.mdHorizontalCenter} py-15 grid grid-flow-row gap-16 xl:py-40 md:w-full  lg:grid-flow-col md:auto-cols-fr overflow-hidden `}>
            <Image
                src={"/images/homeMobileBackgroundPNG.png"}
                width={2800}
                height={2000}
                alt="foto"
                className="scale-[2] lg:order-2 md:scale-[2] xl:transform xl:translate-x-[27%] xl:translate-y-[-45%] xl:absolute xl:right-0 xl:scale-[1.2]"
            />
            <div className={`pt-[19%] flex flex-col gap-8 lg:max-w-[725px] lg:pt-[0%]`}>
                <div className='flex flex-col gap-4'>
                    <div className="flex text-xs leading-4">
                        {/* <img src={LogoSmall} alt="logo" /> */}
                        <LogoSmall />
                        {data.topText.map((textObj, textIndex) => (
                            <p key={textIndex} className={`${textObj.className}`}>
                                {textObj.content}
                            </p>
                        ))}
                    </div>
                    <h3 className={`${styles.heading2}`}>{data.heading}</h3>
                    <p className={`${styles.text}`}>{data.text}</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="text-sm leading-4 font-medium text-secondary-700">
                        <Link href={data.cta[0].link}>
                            {data.cta[0].text}
                        </Link>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {data.tags.map((tag, index) => (
                            <div key={index} className='flex pl-1 pr-4 py-1 gap-1.5 bg-secondary-100 rounded-full'>
                                {/* <img src={PurpleCheckmark} alt="" /> */}
                                <PurpleCheckmark />
                                <h4 className='text-xs leading-4 font-medium self-center text-secondary-500'>{tag.text}</h4> {/* Use tag.text instead of tag.content */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


const HeroData = [
    {
        subHeading: ["Massive"],
        heading: ["Online", "Marketing"],
        text: ["Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren"],
        cta1: {
            text: ["Ontdek onze Diensten"],
            link: "/#"
        },
        cta2: {
            text: ["Start uw Groeireis"],
            link: "/#"
        },
        cta3: {
            text: ["Of neem contact op -->"],
            link: "/#"
        },
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
]

const allinoneData = {
    topText: [
        {
            content: "All-in-one",
            className: "text-gray-800 font-semibold whitespace-nowrap self-center ml-3"
        },
        {
            content: " | ",
            className: "text-purple-300 font-medium whitespace-nowrap self-center ml-3"
        },
        {
            content: "Online Marketing Bureau",
            className: "text-gray-600 font-medium ml-3"
        }
    ],
    heading: ["Breng uw onderneming naar het volgende niveau met Massive"],
    col1: {
        subHeading: ["Marketing"],
        heading: ["Betere marketing besluiten"],
        text: ["Met onze data gedreven aanpak verhogen wij uw ROI doormiddel data gedreven marketingstrategieën en web pagina optmalizaties te implementeren."]
    },
    col2: {
        subHeading: ["Branding"],
        heading: ["Versterk uw Merkidentiteit"],
        text: ["Creëer een blijvende indruk doormiddel van doelgroep anlyses en onze persona-database voor een huisstijl gericht op de behoefte van uw specifieke doelgroep."]
    },
    col3: {
        subHeading: ["Content"],
        heading: ["Verhoog uw positie in Google"],
        text: ["Vergroot uw online aanwezigheid,  bied waardevolle content die uw doelgroep aantrekt en betrokken houdt dankzij onze statistisch gedreven aanpak."]
    },
}

const OverOnsData = {
    // img: homeTelefoon,
    alt: "sag",
    topText: [
        {
            content: "Over ons",
            className: "text-gray-800 font-semibold whitespace-nowrap self-center ml-3"
        },
        {
            content: " | ",
            className: "text-purple-300 font-medium whitespace-nowrap self-center ml-3"
        },
        {
            content: "Ondernemers voor Massive",
            className: "text-gray-600 font-medium ml-3"
        }
    ],
    heading: ["Één oplossing voor jouw Online vindbaarheid"],
    text: ["Door nauw samen te werken met ondernemers voorzien wij hen van creatieve en datagedreven oplossingen met het streven naar transparantie in alles wat we doen."],
    cta: [{ text: "Lees verder -->", link: "/#" }],
    tags: [
        { text: "Unieke aanpak" },
        { text: "Gedreven door Data" },
        { text: "Samen naar Succes" },
        { text: "Transparantie" }
    ]
}

const CatagoriesServecesData = [
    {
        heading: ["Optimeer uw online aanwezigheid met datagedreven analyses"],
        diensten: [
            {
                id: ["website"],
                buttonText: ["Website"],
                topText: [
                    {
                        content: "Website",
                        className: "text-gray-700 font-semibold"
                    },
                    {
                        content: " | ",
                        className: "text-purple-300 font-medium"
                    },
                    {
                        content: "Zakelijke visies omzetten in opmerkelijke successen.",
                        className: "text-gray-600 font-medium"
                    }
                ],
                heading: ["Creatieve webwinkel met Datagedreven Optimalizatie"],
                text: ["Zakelijke visies omzetten in opmerkelijke successen. We doen dit door nauw samen te werken met ondernemers, hen te voorzien van creatieve en datagedreven oplossingen, en altijd te streven naar transparantie in alles wat we doen."],
                cta1Text: ["Wij helpen u graag verder >"],
                cta1Slug: ["hoi"],
                cta2Text: ["Contact"],
                cta2Slug: ["/contact"],
                img: "/images/dienstenWebshop.svg",
            },
            {
                id: ["webshop"],
                buttonText: ["Webshop"],
                topText: [
                    {
                        content: "Webshop",
                        className: "text-gray-700 font-semibold"
                    },
                    {
                        content: " | ",
                        className: "text-purple-300 font-medium"
                    },
                    {
                        content: "Zakelijke visies omzetten in opmerkelijke successen.",
                        className: "text-gray-600 font-medium"
                    }
                ],
                heading: ["webshop Creatieve webwinkel met Datagedreven Optimalizatie"],
                text: ["webshop Zakelijke visies omzetten in opmerkelijke successen. We doen dit door nauw samen te werken met ondernemers, hen te voorzien van creatieve en datagedreven oplossingen, en altijd te streven naar transparantie in alles wat we doen."],
                cta1Text: ["Wij helpen u graag verder >"],
                cta1Slug: ["oke"],
                cta2Text: ["Contact"],
                cta2Slug: ["/contact"],
                img: "/images/dienstenWebshop.svg",
            },
            {
                id: ["seo"],
                buttonText: ["SEO"],
                topText: [
                    {
                        content: "SEO",
                        className: "text-gray-700 font-semibold"
                    },
                    {
                        content: " | ",
                        className: "text-purple-300 font-medium"
                    },
                    {
                        content: "Zakelijke visies omzetten in opmerkelijke successen.",
                        className: "text-gray-600 font-medium"
                    }
                ],
                heading: ["SEO Creatieve webwinkel met Datagedreven Optimalizatie"],
                text: ["SEO Zakelijke visies omzetten in opmerkelijke successen. We doen dit door nauw samen te werken met ondernemers, hen te voorzien van creatieve en datagedreven oplossingen, en altijd te streven naar transparantie in alles wat we doen."],
                cta1Text: ["Wij helpen u graag verder >"],
                cta1Slug: [""],
                cta2Text: ["Contact"],
                cta2Slug: ["/contact"],
                img: "/images/dienstenWebshop.svg",
            },
            {
                id: ["sea"],
                buttonText: ["SEA"],
                topText: [
                    {
                        content: "SEA",
                        className: "text-gray-700 font-semibold"
                    },
                    {
                        content: " | ",
                        className: "text-purple-300 font-medium"
                    },
                    {
                        content: "Zakelijke visies omzetten in opmerkelijke successen.",
                        className: "text-gray-600 font-medium"
                    }
                ],
                heading: ["SEA Creatieve webwinkel met Datagedreven Optimalizatie"],
                text: ["SEA Zakelijke visies omzetten in opmerkelijke successen. We doen dit door nauw samen te werken met ondernemers, hen te voorzien van creatieve en datagedreven oplossingen, en altijd te streven naar transparantie in alles wat we doen."],
                cta1Text: ["Wij helpen u graag verder >"],
                cta1Slug: [""],
                cta2Text: ["Contact"],
                cta2Slug: ["/contact"],
                img: "/images/dienstenWebshop.svg",
            },
            {
                id: ["strategie"],
                buttonText: ["Strategie"],
                topText: [
                    {
                        content: "Strategie",
                        className: "text-gray-700 font-semibold"
                    },
                    {
                        content: " | ",
                        className: "text-purple-300 font-medium"
                    },
                    {
                        content: "Zakelijke visies omzetten in opmerkelijke successen.",
                        className: "text-gray-600 font-medium"
                    }
                ],
                heading: ["Strategie Creatieve webwinkel met Datagedreven Optimalizatie"],
                text: ["Strategie Zakelijke visies omzetten in opmerkelijke successen. We doen dit door nauw samen te werken met ondernemers, hen te voorzien van creatieve en datagedreven oplossingen, en altijd te streven naar transparantie in alles wat we doen."],
                cta1Text: ["Wij helpen u graag verder >"],
                cta1Slug: [""],
                cta2Text: ["Contact"],
                cta2Slug: ["/contact"],
                img: "/images/dienstenWebshop.svg",
            },
        ]
    }
]

const LatestDevelopmentsData = [
    {
        heading: ["Altijd op de hoogte van de laatste ontwikkelingen"],
        text: [
            "Bij Massive zijn wij voortdurend bezig ",
            {
                type: 'link',
                href: '/cms',
                content: '(cms) ',
                className: 'testClass'
            },
            "met de laatste trends en innovaties in de marketingwereld. Hierdoor kunnen we ondernemers voorzien van strategieën die hen een voorsprong geven op hun concurrentie. Het stelt onze klanten in staat om altijd een stap voor te zijn en zich te onderscheiden in hun branche.",
        ],
        icons: [
            {
                id: "google icon",
                icon: <GoogleGray className="w-12 sm:w-16 md:w-22 lg:w-28 aspect-square" />,
                alt: "google icon",
                // tooltip: ["This is a tooltip with a ", {type: 'link',href: '/some-link',content: 'link inside'}," for demonstration."],
                // iconColor: ShopifyGray,
            },
            {
                id: "wordpress icon",
                icon: <WordpressGray className="w-12 sm:w-16  md:w-22 lg:w-28 aspect-square" />,
                alt: "wordpress icon",
                // tooltip: ["WordPress is een Content Management Systeem (CMS) waarmee je een website en webshops kunt bouwen en onderhouden."],
                // iconColor: wordpressGray,
            },
            {
                id: "shopify icon",
                icon: <ShopifyGray className="w-12 sm:w-16 md:w-22 lg:w-28 aspect-square" />,
                alt: "shopify icon",
                // tooltip: ["WordPress is een Content Management Systeem (CMS) waarmee je een website en webshops kunt bouwen en onderhouden."],
                // iconColor: wordpressGray,
            },
            {
                id: "vector icon",
                icon: <OpenaiGray className="w-12 sm:w-16 md:w-22 lg:w-28 aspect-square" />,
                alt: "vector icon",
                // tooltip: ["WordPress is een Content Management Systeem (CMS) waarmee je een website en webshops kunt bouwen en onderhouden."],
                // iconColor: wordpressGray,
            },
            {
                id: "react icon",
                icon: <ReactGray className="w-12 sm:w-16 md:w-22 lg:w-28 aspect-square" />,
                alt: "react icon",
                // tooltip: ["WordPress is een Content Management Systeem (CMS) waarmee je een website en webshops kunt bouwen en onderhouden."],
                // iconColor: wordpressGray,
            },
            {
                id: "googe analytics icon",
                icon: <GoogleAnalyticsGray className="w-12 sm:w-16 md:w-22 lg:w-28 aspect-square" />,
                alt: "googe analytics icon",
                // tooltip: ["WordPress is een Content Management Systeem (CMS) waarmee je een website en webshops kunt bouwen en onderhouden."],
                // iconColor: wordpressGray,
            },
            {
                id: ["adobe icon"],
                icon: <AdobeGray className="w-12 sm:w-16 md:w-22 lg:w-28 aspect-square" />,
                alt: ["adobe icon"],
                // tooltip: ["WordPress is een Content Management Systeem (CMS) waarmee je een website en webshops kunt bouwen en onderhouden."],
                // iconColor: wordpressGray,
            },
        ]
    }
]


const blogCardsData = {
    topText: [
        {
            content: "Blogs",
            className: "text-gray-800 font-semibold whitespace-nowrap self-center ml-3"
        },
        {
            content: " | ",
            className: "text-purple-300 font-medium whitespace-nowrap self-center ml-3"
        },
        {
            content: "Online Marketing",
            className: "text-gray-600 font-medium ml-3"
        }
    ],
    heading: ["Freebies om uw kennis binnen de Online Marketing te vergroten "],
    cards: [
        {
            img: "asdf",
            title: "Massive Website gaat Live!",
            subtite: "Dit is een subtitle",
            text: "Subtitle teksten met kleiner lettertype, Subtitle met kleiner lettertype, Subtitle teksten met kleiner lettertype teksten met kleiner lettertype, Subtitle teksten met kleiner lettertype, Subtitle ",
            tags: [
                { name: "Search Engine Optimalization", slug: "seo-slug" },
                { name: "website", slug: "website-slug" },
                { name: "Webdevelopment", slug: "dev-slug" },
                { name: "On-page SEO", slug: "dev-slug" }
            ]
        },
        {
            img: "asdf",
            title: "Kijk deze kekke code",
            subtite: "Dit is een subtitle",
            text: "Subtitle teksten met kleiner lettertype, Subtitle met kleiner lettertype, Subtitle teksten met kleiner lettertype teksten met kleiner lettertype, Subtitle teksten met kleiner lettertype, Subtitle ",
            tags: [
                { name: "SEO", slug: "seo-slug" },
                { name: "website", slug: "website-slug" },
                { name: "dev", slug: "dev-slug" }
            ]
        },
        {
            img: "asdf",
            title: "Waarom zijn userflows zo belangrijk?",
            subtite: "Dit is een subtitle",
            text: "Subtitle teksten met kleiner lettertype, Subtitle met kleiner lettertype, Subtitle teksten met kleiner lettertype teksten met kleiner lettertype, Subtitle teksten met kleiner lettertype, Subtitle ",
            tags: [
                { name: "SEO", slug: "seo-slug" },
                { name: "website", slug: "website-slug" },
                { name: "dev", slug: "dev-slug" }
            ]
        },
        {
            img: "asdf",
            title: "Test",
            subtite: "Dit is een Test subtitle",
            text: "Subtitle teksten met kleiner lettertype, Subtitle met kleiner lettertype, Subtitle teksten met kleiner lettertype teksten met kleiner lettertype, Subtitle teksten met kleiner lettertype, Subtitle ",
            tags: [
                { name: "SEO", slug: "seo-slug" },
                { name: "website", slug: "website-slug" },
                { name: "dev", slug: "dev-slug" }
            ]
        },
    ]

}