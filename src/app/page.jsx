import { ThemeSelector } from "@/app/docs/_components/ThemeSelector"
import Navbar from "@/components/Aids.jsx"
import styles from "@/styles/styles.js"

import {
    Allinone1,
    Allinone2,
    Allinone3,
    LogoSmall
} from "../components/icons"

import React from "react"

import '@/styles/tailwind.css'

export default function page() {
    return (
        <div>
            <Navbar />
            Hello Home page
            <AllInOne data={allinoneData}  />

            <p className="text-green-800 dark:text-blue-600">hoi</p>
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
                    {/* <img src={data.col1.img} alt={data.col1.alt} className='' /> */}
                    <Allinone1 className="w-[593px] h-[326px]" />
                    <div className='flex flex-col gap-2 md:gap-6'>
                        <h4 className={`${styles.subHeading}`}>{data.col1.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col1.heading}</h5>
                        <p className={`${styles.text}`}>{data.col1.text}</p>
                    </div>
                </div>

                <div className='grid grid-flow-row gap-16 py-15 md:grid-flow-col md:auto-cols-fr md:gap-12  md:py-20 lg:gap-32 xl:py-32  xl:gap-64'>
                    {/* <img src={data.col2.img} alt={data.col2.alt} className='md:order-2' /> */}
                    <div className='flex flex-col gap-2 md:gap-6 md:max-w-[550px]'>
                        <h4 className={`${styles.subHeading}`}>{data.col2.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col2.heading}</h5>
                        <p className={`${styles.text}`}>{data.col2.text}</p>
                    </div>
                </div>

                <div className='grid grid-flow-row gap-16 py-15 md:grid-flow-col md:auto-cols-fr md:gap-12  md:py-20 lg:gap-32 xl:py-32  xl:gap-64'>
                    {/* <img src={data.col3.img} alt={data.col3.alt} className='' /> */}
                    <div className='flex flex-col gap-2 md:gap-6 md:max-w-[550px]'>
                        <h4 className={`${styles.subHeading}`}>{data.col3.subHeading}</h4>
                        <h5 className={`${styles.heading3}`}>{data.col3.heading}</h5>
                        <p className={`${styles.text}`}>{data.col3.text}</p>
                    </div>
                </div>


            </div>



            {/* <Allinone1 /> */}
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
        img: Allinone1 ,
        alt: "hoi",
        subHeading: ["Marketing"],
        heading: ["Betere marketing besluiten"],
        text: ["Met onze data gedreven aanpak verhogen wij uw ROI doormiddel data gedreven marketingstrategieën en web pagina optmalizaties te implementeren."]
    },
    col2: {
        img: Allinone2 ,
        alt: "test",
        subHeading: ["Branding"],
        heading: ["Versterk uw Merkidentiteit"],
        text: ["Creëer een blijvende indruk doormiddel van doelgroep anlyses en onze persona-database voor een huisstijl gericht op de behoefte van uw specifieke doelgroep."]
    },
    col3: {
        img: Allinone3,
        alt: "test2",
        subHeading: ["Content"],
        heading: ["Verhoog uw positie in Google"],
        text: ["Vergroot uw online aanwezigheid,  bied waardevolle content die uw doelgroep aantrekt en betrokken houdt dankzij onze statistisch gedreven aanpak."]
    },
}