import React from 'react'
import SplitLayout from './layouts/SplitLayout'
import BrandedContentBlockWithLogo from '@/components/heading-text/BrandedContentBlockWithLogo'

import Image from 'next/image'

import { UserGroupIcon, GlobeEuropeAfricaIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/outline"
import { IconLeftHeadingTextListItem } from './components/lists/IconLeftHeadingTextListItem'
import { IconLeftHeadingTextCard } from './components/cards/IconLeftHeadingTextCard'
import { RegualarList } from './lists/RegularList'
import { UnOrderedList } from './lists/UnOrderedList'
import TitleSplitLayout from './layouts/TitleSplitLayout'
import { PrimaryButton } from './compositionButton'
import { SubHeadingHeadingText } from './components/titels/SubHeadingHeadingText'
import { IconHeadingTextCard } from './components/cards/IconHeadingTextCard'

import FirstIcon from "./FirstIcon.svg"
import SecondIcon from "./SecondIcon.svg"
import ThirdIcon from "./ThirdIcon.svg"
import { GridLayout } from './layouts/GridLayout'

import {
    ComputerDesktopIcon as CompoterDesktopIconSolid,
    BuildingStorefrontIcon as BuildingStorefrontIconSolid,
    SwatchIcon as SwatchIconSolid,
    MagnifyingGlassIcon as MagnifyingGlassIconSolid,
    CursorArrowRaysIcon as CursorArrowRaysIconSolid,
    PresentationChartLineIcon as PresentationChartLineIconSolid,
} from '@heroicons/react/20/solid'
import { TitelGridLayout } from './layouts/TitelGridLayout'

import { SubHeadingHeadingLeftText } from './components/titels/SubHeadingHeadingLeftText'
import { GridUnOrderedList } from './lists/GridUnOrderedList'
import { IconHeadingTextCardListItem } from './components/lists/IconHeadingTextCardListItem'

const page = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-gray-900 text-center mt-8">1 Split Layout</h2>
            <SplitLayout
                containerStyles="max-w-[1536px] mx-auto py-40 flex flex-row items-center"
                leftContainerStyles="flex-1"
                rightContainerStyles="flex-1"
            >

                <BrandedContentBlockWithLogo data={content} />
                <Image src="/images/image_56.png" className='m-auto' alt="Picture of the author" width={500} height={500} />

            </SplitLayout>

            <h2 className="text-4xl font-bold text-gray-900 text-center mt-8">2 Split Layout</h2>
            <SplitLayout
                containerStyles="max-w-[1536px] mx-auto py-40   flex flex-row items-center"
                leftContainerStyles="flex-1"
                rightContainerStyles="flex-1"
            >
                <RegualarList
                    items={simpleItems}
                    resourceName="item"
                    itemSpacing="pt-30"
                    itemComponent={IconLeftHeadingTextCard}
                />
                <Image src="/images/Rectangle-8463.png" className='mt-auto' alt="picture" width={755} height={480} />

            </SplitLayout>

            <h2 className="text-4xl font-bold text-gray-900 text-center mt-8">3 Split Layout</h2>
            <SplitLayout
                containerStyles="max-w-[1536px] mx-auto py-40  grid grid-col grid-cols-2 "
                leftContainerStyles="col-span-1"
                rightContainerStyles="pl-[153px]"
            >
                <Image src="/images/Rectangle-8463-1.png" className='self-end' alt="picture" width={755} height={439} />
                <>
                    <h2 className="text-4xl font-bold text-gray-900 text-center mt-8"> Uw marketing partner voor </h2>

                    <UnOrderedList
                        items={simpleItems}
                        resourceName="item"
                        itemSpacing="pt-12"
                        listComponent={IconLeftHeadingTextListItem}
                    />

                </>

            </SplitLayout>


            <h2 className="text-4xl font-bold text-gray-900 text-center mt-8">4 Title Split Layout</h2>
            <TitleSplitLayout
                containerStyles="max-w-[1536px] mx-auto py-40"
                splitContainerStyles="flex flex-row items-center"
                leftContainerStyles="flex-1"
                rightContainerStyles="flex-1"
            >
                <SubHeadingHeadingText title={title} containerStyles="text-center max-w-[800px] mx-auto  pb-24" />
                <div className='max-w-[560px]'>
                    <RegualarList
                        items={simpleItems}
                        resourceName="item"
                        itemSpacing="pt-30"
                        itemComponent={IconLeftHeadingTextCard}
                    />
                </div>
                <Image src="/images/Rectangle-8463.png" className='mt-auto' alt="picture" width={755} height={480} />
            </TitleSplitLayout>


            <h2 className="text-4xl font-bold text-gray-900 text-center mt-8">5 Grid Layout</h2>
            <GridLayout
                containerStyles="max-w-[1536px] mx-auto py-40"
            >
                <GridUnOrderedList
                    items={threeColItems}
                    resourceName="item"
                    gridContainerStyles="grid grid-cols-3 gap-auto"
                    itemComponent={IconHeadingTextCardListItem}
                    containerStyles="items-center text-center max-w-[424px] mx-auto gap-12"
                />
            </GridLayout>


            <h2 className="text-4xl font-bold text-gray-900 text-center mt-8">6 Title Grid Layout</h2>
            <TitelGridLayout
                containerStyles="max-w-[1536px] mx-auto  py-40"
            >
                {/* <SubHeadingHeadingText title={title} containerStyles="text-center max-w-[800px] mx-auto  pb-15" /> */}

                <SubHeadingHeadingLeftText
                    titel={titelTwo}
                    containerStyles="grid grid-cols-2 pb-24"
                />

                <GridUnOrderedList
                    items={secondFoldData}
                    resourceName="item"
                    gridContainerStyles="grid grid-cols-3 gap-6"
                    itemComponent={IconHeadingTextCardListItem}
                    containerStyles="gap-12 px-6 py-12 bg-white rounded-4xl shadow-md"
                    iconContainerStyles="w-20 h-20 p-6 rounded-md"
                />

            </TitelGridLayout>


            <h2 className="text-4xl font-bold text-gray-900 text-center mt-8">7 Grid Layout</h2>
            <GridLayout
                containerStyles="max-w-[1536px] mx-auto py-40  grid grid-cols-3 gap-6"
            >
                {secondFoldData.map((item) => (
                    <IconHeadingTextCard
                        key={item}
                        item={item}
                        containerStyles="gap-12 px-6 py-12 bg-white rounded-4xl shadow-md"
                        iconContainerStyles="w-20 h-20 p-6 rounded-md "
                    />
                ))}
            </GridLayout>



        </>
    )
}

export default page


const content = {
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

}

const simpleItems = [
    { icon: <UserGroupIcon className="w-12 h-12 p-3 bg-primary-500 text-white rounded-md shadow-sm" />, title: "Optimale Ervaring op Elk Schermformaat!", text: "Mobiel responsieve websites scoren beter in zoekmachines, trek meer organisch verkeer aan." },
    { icon: <GlobeEuropeAfricaIcon className="w-12 h-12 p-3 bg-primary-500 text-white rounded-md shadow-sm" />, title: "Boost Uw Zoekresultaten met Mobiel Design!", text: "Mobiel responsieve websites scoren beter in zoekmachines, trek meer organisch verkeer aan." },
    { icon: <ArrowTrendingDownIcon className="w-12 h-12 p-3 bg-primary-500 text-white rounded-md shadow-sm" />, title: "Houd Aandacht Vast, Verminder Bouncen!", text: "Mobiel responsieve sites houden bezoekers langer vast, verlagen het bouncepercentage." },
]

const title = {
    subHeading: "Digital Marketing Bureau",
    heading: "Uw marketing partner voor Online Success",
    text: "Wij bieden meertalige websites en valuta-opties voor uw internationale klantenbestand. Wij bieden meertalige websites en valuta-opties voor."
}

const threeColItems = [
    { icon: <SecondIcon className="mr-[35px]" />, heading: "Kennismaking en Plan", text: "We leren uw bedrijf kennen en schetsen een websiteconcept gebaseerd op uw doelen." },
    { icon: <SecondIcon className="mr-[35px]" />, heading: "Ontwerp en Ontwikkeling", text: "Na uw goedkeuring, ontwerpen en ontwikkelen we de website terwijl we u op de hoogte houden." },
    { icon: <ThirdIcon className="mr-[35px]" />, heading: "Lancering en Onderhoud", text: "Na de lancering, optimaliseren we de site voor zoekmachines en bieden aanvullende ondersteuning." }
]

const secondFoldData = [
    { icon: <CompoterDesktopIconSolid />, iconColors: "bg-primary-100 text-primary-500", heading: "Zakelijke Website laten Maken", text: "Transformeer uw zakelijke visie, laat nu een professionele, op maat gemaakte website bouwen die even indrukwekkend is als uw bedrijf!" },
    { icon: <BuildingStorefrontIconSolid />, iconColors: "bg-green-100 text-green-400", heading: "Ecommerce & Webwinkel Oplossingen", text: "Geintreseerd in een webshop laten maken? Breng je bedrijfs visie tot leven met een online marketing bureau dat naar u luistert." },
    { icon: <SwatchIconSolid />, iconColors: "bg-orange-100 text-orange-500", heading: "Branding", text: "Wordt hoger gevonden in google met onze SEO diensten, voor een breeder bereik en vertrouwen.diensten, voor een breeder bereik" },
    { icon: <MagnifyingGlassIconSolid />, iconColors: "bg-blue-100 text-blue-600", heading: "Zoekmachineoptimalizatie", text: "Wordt hoger gevonden in google met onze SEO diensten, voor een breeder bereik en vertrouwen." },
    { icon: <CursorArrowRaysIconSolid />, iconColors: "bg-blue-100 text-blue-500", heading: "Online Advertenties", text: "Ontdek nieuwe lead generatie met onze (SEA) digital marketing campagnes." },
    { icon: <PresentationChartLineIconSolid />, iconColors: "bg-red-100 text-red-400", heading: "Online Marketing Strategie", text: "Krijg inzagen op bedrijfs statestieken en optimeer via data gedreven besluiten." },
]

const titelTwo = {
    subHeading: "Website webwinkel laten maken?",
    heading: "Professioneel Website Laten Maken: Uw Online Succes Begint Hier",
    text: "Bent u opzoek naar Webdesign of Web development, een zakelijke website of een ecommerce webshop? Wij zorgen voor website beheer die niet alleen visueel aantrekkelijk"
}