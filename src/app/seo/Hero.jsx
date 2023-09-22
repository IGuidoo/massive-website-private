import styles from '@/styles/styles'
import React from 'react'
import Link from 'next/link'

import { ChartBarIcon } from '@heroicons/react/20/solid'
import HeroImgSEO from "@/images/HeroImgSEO.svg"
import TagsList from '@/components/TagsList'

const Hero = () => {
    return (
        <section className={` ${styles.gutter} ${styles.mdHorizontalCenter} py-16 md:py-32`}>

            <div className='grid grid-flow-row  gap-12 xl:grid-flow-col xl:grid-cols-2'>
                <div>
                    <div className='flex gap-4 mb-8'>
                        {HeroData.title.icon}
                        <div className=''>
                            <p className='text-lg leading-7 font-semibold text-gray-800'>{HeroData.title.title}</p>
                            <p className='text-sm leading-5 text-secondary-500 mt-[-4px]'>{HeroData.title.subTitle}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-16'>

                        <div className='flex flex-col gap-8'>
                            <h1 className={` ${styles.heading2} heading-gradient-gray`}>{HeroData.content.title}</h1>
                            <p className={` ${styles.text} `}>{HeroData.content.body}</p>
                            <TagsList tagsData={HeroData.content} />
                        </div>

                        <div className='flex flex-col gap-2 items-center md:flex-row'>
                            <Link
                                href={HeroData.cta[0].href}
                                className={` ${styles.buttonT2} ${styles.buttonP4} ${styles.buttonS3} ${styles.buttonWidthMD}  inline-block `}
                            >
                                {HeroData.cta[0].title}
                            </Link>
                            <p className={` ${styles.text} hidden md:block`}>{HeroData.cta[1].textBetween}</p>
                            <Link
                                href={HeroData.cta[2].href}
                                className={` ${styles.buttonT2} ${styles.buttonP4} ${styles.buttonS4} ${styles.buttonWidthMD}inline-block `}
                            >
                                {HeroData.cta[2].title}
                            </Link>
                        </div>
                        
                    </div>
                </div>

                <div className="w-full">
                    { HeroData.heroImg }
                </div>

            </div>

        </section>
    )
}

export default Hero



const HeroData = {
    heroImg: <HeroImgSEO className="w-full  xl:w-[110%]" />,
    title: {
        title: "SEO",
        subTitle: "Stijg uit boven je concurentie",
        icon: <ChartBarIcon className='w-[44px] h-[44px] text-primary-500 p-3 bg-primary-100 rounded' />
    },
    content: {
        title: "Uitgebreide SEO-oplossingen voor een Dominante Online Aanwezigheid",
        body: "Ontdek onze diverse SEO-diensten die zijn ontworpen om uw online zichtbaarheid te vergroten. Om websiteverkeer te stimuleren en uw bedrijf naar de top van de zoekresultaten te brengen.",
        tags: [
            { name: "Maandelijkse SEO", href: "/#" },
            { name: "Traditionale SEO", href: "/#" },
            { name: "Lokale SEO", href: "/#" },
            { name: "eCommerce SEO", href: "/#" },
            { name: "Enterprise SEO", href: "/#" },
        ]
    },
    cta: [
        { title: "Ontdek meer Diensten", href: "/#" },
        { textBetween: "of" },
        { title: "Neem Contact met ons op", href: "/#" },
    ]
}