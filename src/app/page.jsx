import dynamic from "next/dynamic"
import styles from "@/styles/styles.js";
import Link from "next/link";
import Image from "next/image";
import RenderText from "@/lib/RenderText";

import "@/styles/styles.css"
import '@/styles/tailwind.css'

import {
    // Card Grod imports
    Home_onlineAdvertenties,
    Home_onlineMarketing,
    Home_zoekmachineoptimalizatie,
    Home_zakelijkeWebsite,
    Home_webwinkelOplossingen,
} from "@/images/diensten"
import { ComputerDesktopIcon, ShoppingCartIcon, ChartBarIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline"
import {
    UserGroupIcon, ShieldCheckIcon, MegaphoneIcon, PresentationChartLineIcon, ArrowTrendingUpIcon,
    ComputerDesktopIcon as CompoterDesktopIconSolid,
    BuildingStorefrontIcon as BuildingStorefrontIconSolid,
    SwatchIcon as SwatchIconSolid,
    MagnifyingGlassIcon as MagnifyingGlassIconSolid,
    CursorArrowRaysIcon as CursorArrowRaysIconSolid,
    PresentationChartLineIcon as PresentationChartLineIconSolid,
} from '@heroicons/react/20/solid'
import {
    // Onze tools Grid
    FacebookColor,
    GoogleAdsColor,
    GoogleAnalyticsColor,
    GoogleMyBusinessColor,
    GoogleSearchConsoleColor,
    InstagramColor,
    LinkedinColor,
    SemRushColor,
    ShopifyColor,
} from "@/assets/icons"

// Elements
import SubHeadingWithHeadingAndText from "@/components/heading-text/SubHeadingWithHeadingAndText";
import TagsList from "@/components/TagsList";
import TextWithIcons from "@/components/sections/TextWithIcons";
// const AccordionSinge = dynamic(() => import("@/components/Accordion"));





import Hero from "../components/Hero";
const TextGridIcons = dynamic(() => import("@/components/one-time/TextGridIcons"), {
    ssr: false,
    loading: () => <p>Loading...</p>
});
const ShowContentBasedOnActiveElement = dynamic(() => import("@/components/ShowContentBasedOnActiveElement"), {
    ssr: false,
    loading: () => <p>Loading...</p>
});
const PageSpeedStats = dynamic(() => import("@/components/sections/PageSpeedStats"), {
    ssr: false,
    loading: () => <p>Loading...</p>
});
import Footer from "@/components/sections/Footer";
import Accordions from "@/components/sections/Accordions";
import SimpleIconHeadingText from "@/components/cards/SimpleIconHeadingText";
import SimpleNavbar from "@/components/navbar/SimpleNavbar";
import { HomeBannerBackground } from "@/assets/backgrounds";
import EmailSignupBar from "@/features/contact/EmailSignupBar";
import GeneralMultiStepContactForm from "@/features/contact/GeneralMultiStepContactForm";
import CallToasty from "@/features/notifications/CallToasty";

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
        <div className="relative  overflow-hidden">

            <header className={` ${styles.boxWidth} ${styles.gutterPadding} mx-auto`}>
                <SimpleNavbar />
            </header>

            <section className={` ${styles.section}`}>
                <Hero data={HeroData} />
            </section>

            <section>
                <GeneralMultiStepContactForm />
            </section>

            <section className={`${styles.boxWidth} mx-auto ${styles.sectionPadding} relative overflow-hidden `}>
                <CallToasty />
            </section>

            <main>

                <section className={`${styles.section}`}>
                    <SubHeadingWithHeadingAndText data={dienstenGridData.title} headingStyle="5xl" containerStyles="gap-4 md:gap-4 max-w-[680px]" />
                    <ul className=" mt-[79px] lg:mt-[47px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
                        {secondFoldData.map((item, index) => (
                            <SimpleIconHeadingText key={index} data={item} />
                        ))}
                    </ul>
                </section>


                <section className={`${styles.section}`}>
                    <SubHeadingWithHeadingAndText data={OnzeDienstenData.title} headingStyle="4xl" containerStyles="gap-3 max-w-[854px] items-center md:text-center md:mx-auto pb-12" />
                    <ShowContentBasedOnActiveElement data={dienstenData} indexCardType="IconHeadingTextIndex" />
                </section>


                <section className={` ${styles.boxWidth} my-15 mb:my-36 mx-auto home-banner h-fit rounded-[50px] overflow-hidden`}>
                    <div className="max-w-[570px] my-20 ml-28">
                        <h3 className={` ${styles.heading4xl} text-white pb-10`}>Ontdek hoe wij ondernemers helpen met het vinden van nieuwe leads.</h3>
                        <EmailSignupBar />
                    </div>
                </section>


                <section className={`${styles.section}`}>
                    <TextWithIcons data={TextIconData} />
                </section>
                

                <section className={`${styles.section} lg:grid lg:grid-cols-12 `}>
                    <TextGridIcons data={newOverOns} />
                </section>


                <section className={` mx-auto ${styles.sectionPadding}  relative-container`}>
                    <SubHeadingWithHeadingAndText data={faqData.title} headingPadding="px-12 py-2" containerStyles="md:mx-auto md:text-center items-center pb-16 gap-6" />
                    <Accordions data={faqData.accordion} containerStyles="gap-2 max-w-[950px]" />
                </section>

                <section className={`${styles.boxWidth} mx-auto ${styles.sectionPadding} relative overflow-hidden `}>
                    <SubHeadingWithHeadingAndText data={pageSpeedData.title} headingStyle="5xl" containerStyles="gap-4 md:gap-4 w-full max-w-[800px] absolute z-10 top-[20%]  md:top-[26%] absolute-center md:text-center md:items-center px-6" />
                    <PageSpeedStats />
                </section>





            </main>
            <Footer />
        </div>
    )
}

const HeroData = {
    subHeading: "Massive",
    heading: ["Online", "Marketing"],
    text: "Zet uw zakelijke visie om in tastbare sucessen met strategieën die ondernemerschap en resultaatgerichtheid combineren",
    buttons: [
        {
            type: "button",
            content: "Neem Contact op",
            function: "/#",
            className: "mt-10 w-full md:w-fit gradient-primary-css px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50"
        },
    ],
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
            { type: "span", content: "Online Succes", className: "text-gradient-primary" }
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
        { icon: <GoogleMyBusinessColor />, text: "My Business" },
        { icon: <FacebookColor />, text: "Facebook" },
        { icon: <InstagramColor />, text: "Instagram" },
        { icon: <LinkedinColor />, text: "Linkedin" },
        { icon: <SemRushColor />, text: "SemRush" },
        { icon: <ShopifyColor />, text: "Shopify" },
        { icon: <GoogleAdsColor />, text: "Google Ads" },
        { icon: <GoogleAnalyticsColor />, text: "Analytics 4" },
        { icon: <GoogleSearchConsoleColor />, text: "Search Console" },
        { icon: <GoogleMyBusinessColor />, text: "My Business" },
        { icon: <FacebookColor />, text: "Facebook" },
        { icon: <InstagramColor />, text: "Instagram" },
        { icon: <LinkedinColor />, text: "Linkedin" },
        { icon: <SemRushColor />, text: "SemRush" },
        { icon: <ShopifyColor />, text: "Shopify" },
        { icon: <GoogleAdsColor />, text: "Google Ads" },
    ]

}





const faqData = {
    title: {
        subHeading: "FAQ",
        heading: ["Veelgestelde Vragen"],
    },
    accordion: [
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
}


const pageSpeedData = {
    title: {
        subHeading: "Digital Marketing Bureau",
        heading: [
            'Google PageSpeed  ',
            { type: 'span', content: 'Insights', className: 'text-primary-500' },
        ],
        text: "Té mooi om waard te zijn? Dat denken wij ook! Kijk hier zelf wat Google wel niet over ons te zeggen heeft!"
    },
}

const dienstenData = [
    {
        id: "zakelijke-website",
        indexCard: {
            icon: <ComputerDesktopIcon />,
            colors: "bg-primary-100 text-primary-500",
            heading: "Zakelijke Website",
            subHeading: "Creatieve, datagedreven websites.",
        },
        content: {
            selection: [
                {
                    heading: "Laat uw website op maat ontwerpen.",
                    typeOfBusiness: "Start-Up",
                    content: [
                        { icon: <ComputerDesktopIcon className="svg-white" />, heading: "Website laten maken", text: "Ons webdesign bureau ontwerpt websites op maat en houd rekening met uw lokale SEO, zodat uw bedrijf opvalt in deb buurt en omstreken." },
                        { icon: <ComputerDesktopIcon />, heading: "Goedkoop Website Laten Maken", text: "Ontvang goedkope website ontwerpen die aansluiten op uw bedrijfsbudget en behoeften." },
                        { icon: <ComputerDesktopIcon />, heading: "Zelfbeheer Mogelijkheden", text: "Onze gebruiksvriendelijke CMS systeem stelt u in staat om eenvoudige updates zelf te doen, zonder extra kosten." },
                    ]
                },
                {
                    heading: "Versterk uw merkidentiteit, begrijp uw bezoekers en behoud een soepel draaiende website met onze ondersteuning.",
                    typeOfBusiness: "MKB Onderneming",
                    content: [
                        { icon: <ComputerDesktopIcon />, heading: "Professionele Website Laten maken", text: "Web development die uw merkidentiteit versterkt en aansluit op de behoefte van uw specifieke doelgroep." },
                        { icon: <ComputerDesktopIcon />, heading: "Analytische Inzichten", text: "Krijg een dieper inzicht in uw bezoekers en hun gedrag met geavanceerde analyse-tools." },
                        { icon: <ComputerDesktopIcon />, heading: "Ondersteuning en Onderhoud", text: "Wij bieden uitgebreide ondersteuning en onderhoudsdiensten om ervoor te zorgen dat uw website altijd soepel draait." },
                    ]
                },
                {
                    heading: "Bereik internationale markten met meertalige opties, geavanceerde beveiliging en naadloze integratie van bedrijfsprocessen.",
                    typeOfBusiness: "Enterprise",
                    content: [
                        { icon: <ComputerDesktopIcon />, heading: "Multinationale Ondersteuning", text: "Wij bieden meertalige websites en valuta-opties voor uw internationale klantenbestand." },
                        { icon: <ComputerDesktopIcon />, heading: "Maximale Beveiliging en Snelheid", text: "Onze toonaangevende technologie uw bescherm bedrijfsgegevens, terwijl we tegelijkertijd rezendsnelle laadtijden garanderen." },
                        { icon: <ComputerDesktopIcon />, heading: "Geïntegreerde Bedrijfsprocessen", text: "Onze sites kunnen worden geïntegreerd met uw bestaande bedrijfssoftware, van CRM-systemen tot voorraadbeheer, voor een soepele bedrijfsvoering." },
                    ]
                },
            ],
            buttons: [
                {
                    type: "button",
                    content: "Bekijk verolg stappen",
                    url: "/#",
                    className: "w-full md:w-fit bg-secondary-50 text-secondary-600 px-6 py-3 rounded-lg justify-center flex border-solid border-white border-1.5 shadow-md   text-base leading-6 font-semibold text-secondary-50"
                },
                {
                    type: "button",
                    content: "Neem Contact op",
                    url: "/#",
                    className: "w-full md:w-fit bg-primary-500 px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50"
                },
            ]
        }

    },
    {
        id: "webwinkel",
        indexCard: {
            icon: <ShoppingCartIcon />,
            colors: "bg-green-100 text-green-500",
            heading: "eCommerce",
            subHeading: "Online web-winkeloplossingen",
        },
        content: {
            selection: [
                {
                    typeOfBusiness: "Start-Up",
                    heading: "Eenvoudig Beginnen, Groots Verkopen: Ontdek Ons Intuïtieve Platform",
                    content: [
                        { icon: "", heading: "Simpel & Intuïtief Platform", text: "Of je nou je webshop begint, onze oplossingen zijn gebruiksvriendelijk, zodat u moeiteloos uw producten kunt beheren en verkopen." },
                        { icon: "", heading: "Lokale SEO Integratie", text: "Ons platform is geoptimaliseerd voor lokale zoekopdrachten, zodat uw winkel zichtbaar is voor klanten in uw regio" },
                        { icon: "", heading: "Effectieve Marketing", text: "Implementeer marketingstrategieën zoals e-mailmarketing, zoekmachineoptimalisatie (SEO) en sociale media-integratie om de zichtbaarheid van de webwinkel te vergroten." },
                    ]
                },
                {
                    typeOfBusiness: "MKB Onderneming",
                    heading: "Groei Slim met Onze Geavanceerde Webshop Functies!",
                    content: [
                        { icon: "", heading: "Geavanceerde Webshop Functies", text: "Profiteer van geavanceerde tools voor voorraadbeheer, rapportage en marketing om uw online verkoop te stimuleren" },
                        { icon: "", heading: "Multi-Channel Verkoop", text: "Integreer met populaire marktplaatsen en sociale media intregatie voor een uitgebreid verkoopnetwerk." },
                        { icon: "", heading: "Training & Workshops", text: "Wij bieden trainingen en begeleiding om u en uw team te helpen overstappen om het meeste uit uw webshop te halen." },
                    ]
                },
                {
                    typeOfBusiness: "Enterprise",
                    heading: "E-commerce Op Maat: Krachtige Oplossingen voor Wereldwijde Dominantie!",
                    content: [
                        { icon: "", heading: "Volledig Geïntegreerde E-commerce Oplossing", text: "Van krachtige analytics tot geavanceerde beveiligingsfuncties, ons platform is ontworpen om te voldoen aan grote volumes en product oplossingen op maat." },
                        { icon: "", heading: "Internationale Verkoopmogelijkheden", text: "Koppel met CRM-systemen, ERP-oplossingen en andere bedrijfstools voor een gestroomlijnde bedrijfsvoering." },
                        { icon: "", heading: "Geavanceerde Integraties & API's", text: "Breid uit naar nieuwe markten met meertalige ondersteuning, valutaconversie en internationale verzendopties." },
                    ]
                },
            ],
            buttons: [
                {
                    type: "button",
                    content: "Bekijk verolg stappen",
                    url: "/#",
                    className: "w-full md:w-fit bg-secondary-50 text-secondary-600 px-6 py-3 rounded-lg justify-center flex border-solid border-white border-1.5 shadow-md   text-base leading-6 font-semibold text-secondary-50"
                },
                {
                    type: "button",
                    content: "Neem Contact op",
                    url: "/#",
                    className: "w-full md:w-fit bg-primary-500 px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50"
                },
            ]
        }

    },
    {
        id: "zoekmachineoptimalizatie",
        indexCard: {
            icon: <ChartBarIcon />,
            colors: "bg-blue-100 text-blue-500",
            heading: "SEO",
            subHeading: "Hoger gevonden worden in Google",
        },
        content: {
            heading: "",
            selection: [
                {
                    heading: "Lokale SEO Domineert: Maak Uw Startup Vindbaar in uw Regio",
                    typeOfBusiness: "Start-Up",
                    content: [
                        { icon: "", heading: "Lokale SEO & Google Mijn Bedrijf Optimalisatie", text: "Verhoog uw online zichtbaarheid in lokale zoekresultaten en op Google Maps, zodat lead generatie in uw buurt u gemakkelijk kunnen vinden." },
                        { icon: "", heading: "Betaalbare Pakketten", text: "Ontvang professionele zoek machine optimalisatie (SEO) hulp zonder uw budget te overschrijden." },
                        { icon: "", heading: "Directe Rapportage", text: "Blijf op de hoogte van uw rankings en verkeer met maandelijkse online marketing rapporten." },
                    ]
                },
                {
                    heading: "SEO & Contentstrategie op Maat: Boost Uw Online Zichtbaarheid!",
                    typeOfBusiness: "MKB Onderneming",
                    content: [
                        { icon: "", heading: "SEO & Contentstrategie", text: "Krijg een combinatie van technische SEO en contentoptimalisatie om uw online zichtbaarheid te vergroten." },
                        { icon: "", heading: "Concurrentieanalyse en zoekwoordonderzoek", text: "Ontdek in een SEO audit op welken zoekwoorden uw concurrenten ranken en hoe u hoger in google kunt komen." },
                        { icon: "", heading: "Meetbare Resultaten", text: "Zie duidelijke verbeteringen in uw ranking, verkeer en conversies doormiddel van onze online marketin." },
                    ]
                },
                {
                    heading: "Uitgebreide SEO-Strategie voor Grote Ondernemingen: Domineer Online!",
                    typeOfBusiness: "Enterprise",
                    content: [
                        { icon: "", heading: "Volledig Geïntegreerde SEO-strategie", text: "Ontvang een uitgebreide online marketing oplossingen die technische SEO, content, linkbuilding en meer omvat." },
                        { icon: "", heading: "Toegewijd Accountmanagement", text: "Werk samen met een toegewijde SEO specialist die uw bedrijfsdoelstellingen begrijpt en ernaar streeft deze te bereiken." },
                        { icon: "", heading: "Geavanceerde Analyse & Rapportage", text: "Duik diep in gegevens met geavanceerde analytics en ontvang gedetailleerde rapporten over uw SEO prestaties." },
                    ]
                },
            ],
            buttons: [
                {
                    type: "button",
                    content: "Bekijk verolg stappen",
                    url: "/#",
                    className: "w-full md:w-fit bg-secondary-50 text-secondary-600 px-6 py-3 rounded-lg justify-center flex border-solid border-white border-1.5 shadow-md   text-base leading-6 font-semibold text-secondary-50"
                },
                {
                    type: "button",
                    content: "Neem Contact op",
                    url: "/#",
                    className: "w-full md:w-fit bg-primary-500 px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50"
                },
            ]
        }

    },
    {
        id: "onlinemarketing",
        indexCard: {
            icon: <CursorArrowRaysIcon />,
            colors: "bg-cyan-100 text-cyan-500",
            heading: "Online Advertenties",
            subHeading: "Kost effectieve advertenties",
        },
        content: {
            selection: [
                {
                    heading: "Eenvoudige Advertenties voor Startups: Snel en Effectief!",
                    typeOfBusiness: "Start-Up",
                    content: [
                        { icon: "", heading: "Eenvoudige Advertentie-Setup", text: "Onze zoekmachinemarketing is ontworpen voor gebruikersvriendelijkheid, waardoor u eenvoudig en snel uw advertenties kunt opzetten." },
                        { icon: "", heading: "Budgetvriendelijke Opties", text: "Speciaal ontworpen voor kleine bedrijven, onze advertentiepakketten zorgen ervoor dat u de beste waarde krijgt voor uw investering." },
                        { icon: "", heading: "Gepersonaliseerde Doelgroep Targeting", text: "Bereik uw ideale klanten in Amsterdam en daarbuiten met onze geavanceerde doelgroep targeting tools." },
                    ]
                },
                {
                    heading: "Geavanceerde Advertentie Opties voor MKB: Optimaliseer Uw Campagnes",
                    typeOfBusiness: "MKB Onderneming",
                    content: [
                        { icon: "", heading: "Geavanceerde Advertentie Functies", text: "Profiteer van uitgebreide analytics, A/B-testen, en meer om uw advertentiecampagnes te optimaliseren." },
                        { icon: "", heading: "Strategische Consultatie", text: "Werk samen met onze experts om een effectieve en efficiënte advertentiestrategie te ontwikkelen." },
                        { icon: "", heading: "Diepgaande Segmentatie & Personalisatie", text: "Richt u op niche-segmenten binnen uw markt op basis van reisgewoonten, locatie en boekingsgeschiedenis en andere touch points." },
                    ]
                },
                {
                    heading: "Maatwerk voor Grote Ondernemingen: Krachtige, Multinationale Advertenties!",
                    typeOfBusiness: "Enterprise",
                    content: [
                        { icon: "", heading: "Op Maat Gemaakte Advertentie Ontwerpen", text: "Ons team kan op maat gemaakte advertentieontwerpen creëren die passen bij uw merk en boodschap." },
                        { icon: "", heading: "Volledig Beheerde Advertentie Campagnes", text: "Laat onze marketing experts uw campagnes van begin tot eind beheren, zodat u zich kunt concentreren op uw bedrijf." },
                        { icon: "", heading: "Multinationale Campagne Ondersteuning", text: "Bereik klanten in de hele wereld met meertalige advertenties en geavanceerde geografische targeting." },
                    ]
                },
            ],
            buttons: [
                {
                    type: "button",
                    content: "Bekijk verolg stappen",
                    url: "/#",
                    className: "w-full md:w-fit bg-secondary-50 text-secondary-600 px-6 py-3 rounded-lg justify-center flex border-solid border-white border-1.5 shadow-md   text-base leading-6 font-semibold text-secondary-50"
                },
                {
                    type: "button",
                    content: "Neem Contact op",
                    url: "/#",
                    className: "w-full md:w-fit bg-primary-500 px-6 py-3 rounded-lg justify-center flex    text-base leading-6 font-semibold text-secondary-50"
                },
            ]
        }

    }
]

const testData = {
    icon: <CompoterDesktopIconSolid />,
    iconStyles: "bg-green-100 text-green-500",
    heading: "Zakelijke Website laten Maken",
    text: "Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw bedrijf!"
}

const secondFoldData = [
    { icon: <CompoterDesktopIconSolid />, iconStyles: "bg-primary-100 text-primary-500", heading: "Zakelijke Website laten Maken", text: "Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw bedrijf!" },
    { icon: <BuildingStorefrontIconSolid />, iconStyles: "bg-green-100 text-green-400", heading: "Ecommerce & Webwinkel Oplossingen", text: "Geintreseerd in een webshop laten maken? Breng je bedrijfs visie tot leven met een online marketing bureau dat naar u luistert." },
    { icon: <SwatchIconSolid />, iconStyles: "bg-orange-100 text-orange-500", heading: "Branding", text: "Wordt hoger gevonden in google met onze SEO diensten, voor een breeder bereik en vertrouwen.diensten, voor een breeder bereik" },
    { icon: <MagnifyingGlassIconSolid />, iconStyles: "bg-blue-100 text-blue-600", heading: "Zoekmachineoptimalizatie", text: "Wordt hoger gevonden in google met onze SEO diensten, voor een breeder bereik en vertrouwen." },
    { icon: <CursorArrowRaysIconSolid />, iconStyles: "bg-blue-100 text-blue-500", heading: "Online Advertenties", text: "Ontdek nieuwe lead generatie met onze (SEA) digital marketing campagnes." },
    { icon: <PresentationChartLineIconSolid />, iconStyles: "bg-red-100 text-red-400", heading: "Online Marketing Strategie", text: "Krijg inzagen op bedrijfs statestieken en optimeer via data gedreven besluiten." },
]