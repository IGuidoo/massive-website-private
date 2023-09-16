"use client"

import React from "react"
import { Suspense } from "react"
import '@/styles/tailwind.css'
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/styles.js"

import { ThemeSelector } from "@/app/docs/_components/ThemeSelector"

import Navbar from "@/components/Aids.jsx"
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
    AdobeGray
} from "../components/icons"
import LatestDevelopments from "@/components/LatestDevelopments"
import Footer from "@/components/Footer"
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
            <Navbar />
            Hello Home page
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

            {/* { testData.test  */}
            <div className=" h-[200px]">

            </div>

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
