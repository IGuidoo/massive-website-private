import React from 'react'

import styles from '@/styles/styles'
import { LogoSmall } from './icons'


import { UserGroupIcon, ShieldCheckIcon, MegaphoneIcon, PresentationChartLineIcon, ArrowTrendingUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const AcordionWithIcons = () => {
    return (
        <section className={` ${styles.gutter} ${styles.mdHorizontalCenter} py-16 md:py-32`}>
            <div className='flex flex-col gap-4 items-center pb-12 lg:pb-24'>
                <div className="flex text-xs leading-4">
                    <LogoSmall />
                    {SEO.title.topText.map((textObj, textIndex) => (
                        <p key={textIndex} className={`${textObj.className}`}>
                            {textObj.content}
                        </p>
                    ))}
                </div>
                <h3 className={`${styles.heading2}`}>{SEO.title.heading}</h3>
            </div>
            <div className='grid grid-flow-row lg:grid-cols-2 '>
                {SEO.accordion.map((item) => (
                    <details className='p-4 lg:p-8 text-base leading-6 font-medium text-secondary-700 md:text-lg md:leading-7'>
                        <summary className='flex gap-6 items-center pb-4 '>
                            {item.icon}
                            <h3 className='text-xl leading-7 font-semibold text-secondary-800'>{item.title}</h3>
                            <ChevronDownIcon className="w-8 h-8 ml-auto chevron" />
                        </summary>
                            {item.body}
                    </details>
                ))}
            </div>
        </section>
    )
}

export default AcordionWithIcons


const SEO = {
    title: {
        topText: [
            {
                content: "SEO",
                className: "text-gray-800 font-semibold whitespace-nowrap self-center ml-3"
            },
            {
                content: " | ",
                className: "text-purple-300 font-medium whitespace-nowrap self-center ml-3"
            },
            {
                content: "Massive Online Marketing",
                className: "text-gray-600 font-medium ml-3"
            }
        ],
        heading: "Wat kunt u van onze SEO diensten verwachten",
    },
    accordion: [
        {
            title: 'Bereik gerichte klanten',
            body: "Stel je voor dat je een fysieke winkel hebt in een drukke straat versus een afgelegen steegje. SEO zorgt ervoor dat uw website op de 'drukke straat' van het internet staat. Voor onze tech-savvy millennials en content creators betekent dit een groter publiek en meer kansen om op te vallen.",
            icon: <UserGroupIcon className='w-[44px] h-[44px] text-primary-500 p-3 bg-primary-100 rounded border border-1 border-white shadow-sm' />,
        },
        {
            title: "Bouw vertrouwen en geloofwaardigheid",
            body: "SEO trekt niet zomaar willekeurig verkeer aan; het trekt bezoekers aan die actief op zoek zijn naar uw diensten. Voor startup oprichters zoals Jeroen en kleine ondernemers zoals Lisa betekent dit een hogere kans op conversies en klantbetrokkenheid.",
            icon: <ShieldCheckIcon className='w-[44px] h-[44px] text-green-500 p-3 bg-green-100 rounded border border-1 border-white shadow-sm' />,
        },
        {
            title: "Vergroot uw online zichtbaarheid",
            body: "In tegenstelling tot betaalde advertenties, waarbij u betaalt voor elke klik, is SEO een langetermijninvestering met duurzame resultaten. Voor non-profit organizers zoals Anna, die vaak met beperkte budgetten werken, biedt SEO een betaalbare oplossing om hun boodschap te verspreiden.",
            icon: <MegaphoneIcon className='w-[44px] h-[44px] text-indigo-500 p-3 bg-indigo-100 rounded border border-1 border-white shadow-sm' />,
        },
        {
            title: "Kosteneffectieve marketing",
            body: "Een hoge ranking in zoekmachines geeft uw merk autoriteit. Voor e-commerce managers zoals Stefan en marketing executives zoals Thomas betekent dit een versterking van het merkimago en vertrouwen bij potentiële klanten.",
            icon: <PresentationChartLineIcon className='w-[44px] h-[44px] text-red-500 p-3 bg-red-100 rounded border border-1 border-white shadow-sm' />,
        },
        {
            title: "Blijf voor op de concurrentie",
            body: "De digitale wereld is constant in beweging. Door up-to-date te blijven met SEO, blijft u een stap voor op uw concurrenten. Dit is vooral belangrijk voor tech-savvy millennials en startup oprichters die in een competitieve markt opereren.",
            icon: <ArrowTrendingUpIcon className='w-[44px] h-[44px] text-yellow-500 p-3 bg-yellow-100 rounded border border-1 border-white shadow-sm' />,
        }
    ]
}