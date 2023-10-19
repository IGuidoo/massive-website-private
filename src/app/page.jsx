import React from "react"
import { Suspense } from "react"
import '@/styles/tailwind.css'
import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/styles.js"

import Footer from "@/components/sections/Footer"
import Hero from "../components/Hero"
import SubHeadingHeadingText from "@/components/heading-text/subHeadingHeadingText"

import {
    // Social Icons
    FacebookGray,
    InstagramGray,
    LinkedinGray,
    TwitterGray,

    // Onze tools Grid
    FacebookColor,
    InstagramColor,
    LinkedinColor,
    GoogleAdsColor,
    GoogleAnalyticsColor,
    GoogleSearchConsoleColor,
    GoogleMybusinessColor,
    SemRushColor,
    ShopifyColor,
} from "../components/icons"
import {
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
import TextGridIcons from "@/components/one-time/TextGridIcons"
import RenderText from "@/lib/RenderText"
import AnnimationRef from "@/components/annimations/Animation"
import Accordion from "@/components/SimpleAccordion"

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

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36`}>
                    <SubHeadingHeadingText data={dienstenGridData.title} cssClass="gap-4 md:gap-4 max-w-[680px]" />
                    <div className="mt-[79px] lg:mt-[47px]">
                        <CardGrid data={dienstenGridData.cards} />
                    </div>
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36`}>
                    <SubheadingHeadingTextSm data={OnzeDienstenData.title} cssClass="gap-3 max-w-[854px] items-center md:text-center md:mx-auto" />

                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36`}>
                    <div className="banner-container">
                        <div className="w-full max-w-[590px] lg:m-8 lg:p-5 rounded-2xl flex flex-col justify-between desktop-banner__text-container">
                            <h2 className={`${styles.heading4xl}`}>
                                <RenderText content={medischeBannerData.heading} />
                            </h2>
                            <TagsList tagsData={medischeBannerData} tagBG="bg-white" cssClass=" mt-2 lg:mt-0" />
                            <Link href={medischeBannerData.button.link} className={`${styles.secondaryCTA} hidden lg:block `}>
                                {medischeBannerData.button.content}
                            </Link>
                        </div>
                        <div className="mobile-banner-container ml-auto " >
                            <Image
                                className="ml-auto overflow-hidden pt-[27px] rounded-br-2xl w-[80%] lg:w-full "
                                src={"/images/medische-gezondheidszorg-website-mockup.png"}
                                width={737}
                                height={391}
                                alt="Mockup van een medische website met een mannelijke arts"
                            />

                        </div>

                    </div>
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36`}>
                    <TextWithIcons data={TextIconData} />
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36 lg:grid lg:grid-cols-12 `}>
                    <TextGridIcons data={newOverOns} />
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36`}>
                    <AnnimationRef />
                </section>

                <section className={`${styles.gutterPadding} ${styles.boxWidth} mx-auto py-15 mb:py-36 `}>
                    <Accordion data={faqData} cssClass="max-w-[952px] mx-auto flex flex-col gap-10 " cssIndivClass={`rounded-2xl ${styles.borderInsetWhite3} shadow-sm`} />
                </section>


            </main>
            <Suspense>
                <Footer />
            </Suspense>
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
        text: "Bij Massive Online Marketing zetten wij zakelijke visies om in opmerkelijke successen. Door nauw samen te werken met ondernemers voorzien wij hen van Internet marketing oplossingen."
    },
}

const medischeBannerData = {
    heading: [
        { type: "span", content: "Ontdek hoe wij", className: "text-primary-500" },
        " ondernemers helpen",
        { type: "span", content: " aan nieuwe leads.", className: "text-primary-500" }
    ],
    tags: [
        { name: "Goede Vindbaarheid", href: "/#" },
        { name: "Op Maat Gemaakt", href: "/#" },
        { name: "Razend Snel", href: "/#" },
        { name: "Inzage op Statestieken", href: "/#" },
        { name: "Online Adverteren", href: "/#" },
    ],
    button: {
        content: "Neem contact op >",
        link: "/#"
    }
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
    content: {
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
                content: "Onbeperkt Potentieel Ontgrendeld",
                className: "text-gray-600 font-medium"
            }
        ],
        heading: [
            "Versterkt door de ",
            { type: "span", content: "Beste", className: "text-primary-500" },
            " tools uit de Industrie",
        ],
        text: "Bij Massive maken we gebruik van Top-Tier Platforms. Zodat jij als ondernemer je bezig kunt houden met de dingen die er echt toe doen!",
        buttons: [
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

    },
    img: [
        { icon: <GoogleAnalyticsColor />, text: "Analytics 4" },
        { icon: <GoogleSearchConsoleColor />, text: "Search Console" },
        { icon: <GoogleMybusinessColor />, text: "My Business" },
        { icon: <FacebookColor />, text: "Facebook" },
        { icon: <InstagramColor />, text: "Instagram" },
        { icon: <LinkedinColor />, text: "Linkedin" },
        { icon: <SemRushColor />, text: "SemRush" },
        { icon: <ShopifyColor />, text: "Shopify" },
        { icon: <GoogleAdsColor />, text: "Google Ads" },
        { icon: <GoogleAnalyticsColor />, text: "Analytics 4" },
        { icon: <GoogleSearchConsoleColor />, text: "Search Console" },
        { icon: <GoogleMybusinessColor />, text: "My Business" },
        { icon: <FacebookColor />, text: "Facebook" },
        { icon: <InstagramColor />, text: "Instagram" },
        { icon: <LinkedinColor />, text: "Linkedin" },
        { icon: <SemRushColor />, text: "SemRush" },
        { icon: <ShopifyColor />, text: "Shopify" },
        { icon: <GoogleAdsColor />, text: "Google Ads" },
    ]

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

const faqData = [
    {
        title: 'Bereik gerichte klanten',
        body: "Stel je voor dat je een fysieke winkel hebt in een drukke straat versus een afgelegen steegje. SEO zorgt ervoor dat uw website op de 'drukke straat' van het internet staat. Voor onze tech-savvy millennials en content creators betekent dit een groter publiek en meer kansen om op te vallen.",
    },
    {
        title: "Bouw vertrouwen en geloofwaardigheid",
        body: "SEO trekt niet zomaar willekeurig verkeer aan; het trekt bezoekers aan die actief op zoek zijn naar uw diensten. Voor startup oprichters zoals Jeroen en kleine ondernemers zoals Lisa betekent dit een hogere kans op conversies en klantbetrokkenheid.",
    },
    {
        title: "Vergroot uw online zichtbaarheid",
        body: "In tegenstelling tot betaalde advertenties, waarbij u betaalt voor elke klik, is SEO een langetermijninvestering met duurzame resultaten. Voor non-profit organizers zoals Anna, die vaak met beperkte budgetten werken, biedt SEO een betaalbare oplossing om hun boodschap te verspreiden.",
    },
    {
        title: "Kosteneffectieve marketing",
        body: "Een hoge ranking in zoekmachines geeft uw merk autoriteit. Voor e-commerce managers zoals Stefan en marketing executives zoals Thomas betekent dit een versterking van het merkimago en vertrouwen bij potentiële klanten.",
    },
    {
        title: "Blijf voor op de concurrentie",
        body: "De digitale wereld is constant in beweging. Door up-to-date te blijven met SEO, blijft u een stap voor op uw concurrenten. Dit is vooral belangrijk voor tech-savvy millennials en startup oprichters die in een competitieve markt opereren. De digitale wereld is constant in beweging. Door up-to-date te blijven met SEO, blijft u een stap voor op uw concurrenten. Dit is vooral belangrijk voor tech-savvy millennials en startup oprichters die in een competitieve markt opereren.",
    }
]