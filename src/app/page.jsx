import React from "react"
import { Suspense } from "react"
import '@/styles/tailwind.css'
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/styles.js"

import LatestDevelopments from "@/components/sections/LatestDevelopments"
import Footer from "@/components/sections/Footer"
import Carousel from "@/components/sections/Carousel"
import Hero from "../components/Hero"
import CatagoriesServices from "@/components/sections/CatagorieServices"
import SubHeadingHeadingText from "@/components/heading-text/subHeadingHeadingText"

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

    // Social Icons
    FacebookGray,
    InstagramGray,
    LinkedinGray,
    TwitterGray,
} from "../components/icons"
import {
    SVG_SEA,
    SVG_SEO,
    SVG_Strategie,
    SVG_Webshop,
    SVG_Website,

    // Card Grod imports
    Home_onlineAdvertenties,
    Home_onlineMarketing,
    Home_zoekmachineoptimalizatie,
    Home_zakelijkeWebsite,
    Home_webwinkelOplossingen,
} from "@/images/diensten"

// IconText imports
import { UserGroupIcon, ShieldCheckIcon, MegaphoneIcon, PresentationChartLineIcon, ArrowTrendingUpIcon } from '@heroicons/react/20/solid'


import TagsList from "@/components/TagsList"
import ResponsiveNavbar from "@/components/navbar/ResponsiveNavbar"
import CardGrid from "@/components/sections/CardGrid"
import SubheadingHeadingTextSm from "@/components/heading-text/SubheadingHeadingTextSm"
import TextWithIcons from "@/components/sections/TextWithIcons"
import LogoSubHeadingHeadingTextButtons from "@/components/LogoSubHeadingHeadingTextButtons"

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
        <div className="relative">
            <div className="relative bg-white rounded-b-4xl md:bg-transparent max-w-[1920px] mx-auto">
                <ResponsiveNavbar />

                {/* <Navbar /> */}
                <Hero data={HeroData} />
                <div className="absolute md:w-[97%] 2xl:w-[93%] md:left-[1.5%] 2xl:left-[3.5%] top-0 -z-10 md:h-full bg-white rounded-b-4xl border-solid border-white border-3 shadow-lg"></div>
                <div className="absolute bottom-[-16px] w-full h-[50%] -z-20 rounded-b-4xl custom-bg-gradient 2xl:w-[90%] 2xl:left-[5%] 2xl:h-[130%]"></div>
                <div className={`absolute bottom-[-34px] w-full h-full -z-30 bg-secondary-100 rounded-b-4xl 2xl:bottom-[-49px] 2xl:w-[97%] 2xl:left-[1.5%]  2xl:h-[230%] 2xl:border-solid 2xl:border-white 2xl:border-3`}></div>
            </div>
            <main>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15`}>
                    <SubHeadingHeadingText data={dienstenGridData.title} cssClass="gap-4 md:gap-4 max-w-[680px]"/>
                    <div className="mt-[79px] lg:mt-[47px]">
                        <CardGrid data={dienstenGridData.cards} />
                    </div>
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15`}> 
                        <SubheadingHeadingTextSm data={OnzeDienstenData.title} cssClass="gap-3 max-w-[854px] items-center md:text-center md:mx-auto" />

                </section>


                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15`}>
                    <TextWithIcons data={TextIconData} />
                </section>
                
                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15`}>
                    <LogoSubHeadingHeadingTextButtons data={newOverOns} />
                </section>



                <AllInOne data={allinoneData} />
                <div className="md:relative overflow-x-clip">
                    <OverOns data={OverOnsData} />
                </div>

                <Suspense>
                    <CatagoriesServices data={CatagoriesServecesData} />
                </Suspense>

                <Suspense>
                    <div className="relative">
                        <LatestDevelopments data={LatestDevelopmentsData} />
                    </div>
                </Suspense>
                <Suspense>
                    {/* { testData.test  */}
                    <div className=" h-[200px]"></div>
                </Suspense>
                <Suspense>
                    <Carousel data={blogCardsData} className={`${styles.borderInsetWhite3}`} />
                </Suspense>
                <div className="h-[300px]"></div>

            </main>
            <Suspense>
                <Footer />
            </Suspense>
            {/* <div className="absolute top-[500px] left-1/2 transform -translate-x-1/2"> 
            <svg width="1835" height="2458" viewBox="0 0 1835 2458" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1787.5" y="1675.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="56.5" y="112.5" width="47" height="47" rx="11.5" transform="rotate(90 56.5 112.5)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="56.5" y="498.5" width="47" height="47" rx="11.5" transform="rotate(90 56.5 498.5)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="0.5" y="1164.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="0.5" y="1108.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="4.5" y="1960.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="4.5" y="2072.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="4.5" y="2128.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1412.5" y="618.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="60.5" y="1960.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1669.5" y="622.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="112.5" y="0.5" width="47" height="47" rx="11.5" transform="rotate(90 112.5 0.5)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1596.5" y="767.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1725.5" y="622.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="112.5" y="56.5" width="47" height="47" rx="11.5" transform="rotate(90 112.5 56.5)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1781.5" y="678.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1731.5" y="1731.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1731.5" y="1563.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1731.5" y="1619.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1645.5" y="1101.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1645.5" y="1157.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1589.5" y="1101.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="112.5" y="554.5" width="47" height="47" rx="11.5" transform="rotate(90 112.5 554.5)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="-0.5" y="0.5" width="47" height="47" rx="11.5" transform="matrix(-1 0 0 1 1778 2354)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="56.5" y="1220.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="-0.5" y="0.5" width="47" height="47" rx="11.5" transform="matrix(-1 0 0 1 1722 2410)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="-0.5" y="0.5" width="47" height="47" rx="11.5" transform="matrix(-1 0 0 1 1778 2298)" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="52.5" y="1623.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="108.5" y="1679.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1356.5" y="618.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
                <rect x="1412.5" y="674.5" width="47" height="47" rx="11.5" fill="#F9FAFB" stroke="#D1D5DB"/>
            </svg>

            </div> */}
        </div>
    )
}


const dienstenGridData = {
    title: {
        subHeading: "Website of Web-winkel laten maken?",
        heading: [
            'Professioneel Website Laten Maken: Uw ',
            { type: 'span', content: 'Online Succes', className: 'text-primary-500' },
            ' Begint Hier'
        ],
        text: "Bent u opzoek naar Webdesign of Web development, een zakelijke website of een ecommerce webshop? Wij zorgen voor website beheer die niet alleen visueel aantrekkelijk is maar ook geoptimalizeerd en gebruiksvriendelijk."
    },
    cards: [
        { img: <Home_zakelijkeWebsite />, heading: "Zakelijke Website laten Maken", text: "Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw bedrijf!" },
        { img: <Home_webwinkelOplossingen />, heading: "Ecommerce & Webwinkel Oplossingen", text: "Geintreseerd in een webshop laten maken? Breng je bedrijfs visie tot leven met een online marketing bureau dat naar u luistert." },
        { img: <Home_zoekmachineoptimalizatie />, heading: "Zoekmachineoptimalizatie", text: "Wordt hoger gevonden in google met onze SEO diensten, voor een breeder bereik en vertrouwen." },
        { img: <Home_onlineAdvertenties />, heading: "Online Advertenties", text: "Ontdek nieuwe lead generatie met onze (SEA) digital marketing campagnes." },
        { img: <Home_onlineMarketing />, heading: "Online Marketing Strategie", text: "Krijg inzagen op bedrijfs statestieken en optimeer via data gedreven besluiten." },
    ]
}


const OnzeDienstenData = {
    title: {
        subHeading: "Digital Marketing Bureau",
        heading: [
            "Uw marketing partner voor ",
            { type: "span", content: "Online Succes", className: "text-primary-500" }
        ],
        text: "Wij zijn een full-service online marketing bureau dat zich richt op het leveren van resultaten voor onze klanten. Wij bieden een breed scala aan diensten aan, waaronder webdesign, webdevelopment, SEO, SEA, social media marketing, content marketing en meer."
    },
}

const TextIconData = {
    title: {
        topText: [
            { content: "SEO", className: "text-gray-800 font-semibold whitespace-nowrap self-center ml-3" },
            { content: " | ", className: "text-purple-300 font-medium whitespace-nowrap self-center ml-3" },
            { content: "Massive Online Marketing", className: "text-gray-600 font-medium ml-3" }
        ],
        heading: "Bij Massive Werken wij aan",
    },
    content: [
        {
            title: 'Bereiken van doel gerichte klanten',
            body: "dit is body text",
            icon: <UserGroupIcon />,
            colors: "text-primary-500 bg-primary-100 "
        },
        {
            title: "Bouwen aan Vertrouwen en Geloofwaardigheid",
            icon: <ShieldCheckIcon />,
            colors: "text-green-500 bg-green-100"
        },
        {
            title: "Vergroten van uw Online Zichtbaarheid",
            icon: <MegaphoneIcon />,
            colors: "text-indigo-500 bg-indigo-100"
        },
        {
            title: "Kosteneffectieve Marketing",
            icon: <PresentationChartLineIcon />,
            colors: "text-red-500 bg-red-100"
        },
        {
            title: "Voor Blijven op de Concurrentie",
            icon: <ArrowTrendingUpIcon />,
            colors: "text-yellow-500 bg-yellow-100"
        }
    ]
}


const newOverOns = {
    subHeading: [
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
    heading: "Creatieve webwinkel met Datagedreven Optimalizatie",
    text: "Zakelijke visies omzetten in opmerkelijke successen. We doen dit door nauw samen te werken met ondernemers, hen te voorzien van creatieve en datagedreven oplossingen, en altijd te streven naar transparantie in alles wat we doen.",
    buttons:[
        {
            type: "button",
            content: "Contact",
            url: "/#",
            className: "w-full md:w-fit bg-secondary-50 text-secondary-600 px-6 py-3 rounded-lg justify-center flex border-solid border-white border-1.5 shadow-md   text-base leading-6 font-semibold text-secondary-50"
        },
        {
            type: "button",
            content: "Kijk hoe we je verder kunnen helpen",
            url: "/#",
            className: "w-full md:w-fit bg-primary-500 px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50"
        },
    ]

}






const AllInOne = ({ data }) => {
    return (
        <section className=' py-15'>
            <div className={`${styles.gutterPadding} ${styles.boxWidth} ${styles.mdHorizontalCenter}`}>
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
                className="-z-10 scale-[2] lg:order-2 md:scale-[2] xl:transform xl:translate-x-[27%] xl:translate-y-[-45%] xl:absolute xl:right-0 xl:scale-[1.2]"
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
                    <TagsList tagsData={data} />
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
            link: ["/#"]
        },
        cta2: {
            text: ["Start uw Groeireis"],
            link: ["/#"]
        },
        cta3: {
            text: ["Of neem contact op -->"],
            link: ["/#"]
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
        { name: "Unieke aanpak", href: "/#" },
        { name: "Gedreven door Data", href: "/#" },
        { name: "Samen naar Succes", href: "/#" },
        { name: "Transparantie", href: "/#" }
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
                img: <SVG_Website />,
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
                img: <SVG_Webshop />
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
                img: <SVG_SEO />,
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
                img: <SVG_SEA />,
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
                img: <SVG_Strategie />,
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
            img: "/images/image_56.png",
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
            img: "/images/image_56.png",
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
            img: "/images/image_56.png",
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
            img: "/images/image_56.png",
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