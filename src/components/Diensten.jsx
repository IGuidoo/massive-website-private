"use client"

import React, { useState, useRef } from "react";
import styles from '@/styles/styles'
import { ChartBarIcon } from '@heroicons/react/20/solid'
import parse from 'html-react-parser';
import Boek from "@/images/Boek.svg"

const Diensten = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const beginSectionRef = useRef(null);

    const contentStyles = {
        overflow: 'hidden',
        transition: 'max-height 1s ease',
        maxHeight: isExpanded ? '3000px' : '750px'
    };
    const gradientStyles = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100px',
        background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
    }

    const handleToggleContent = () => {
        if (isExpanded && beginSectionRef.current) {
            beginSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setIsExpanded(prevState => !prevState);
    };

    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section ref={beginSectionRef} className={` ${styles.gutter} ${styles.mdHorizontalCenter} py-16 md:py-32`}>
            <div className="md:flex md:gap-12 xl:gap-24">

                {/* Left side navigation Desktop only */}
                <div className='hidden md:flex md:max-w-[260px] md:w-full flex-col p-7 gap-6 bg-secondary-100 rounded-3xl box-content h-fit'>
                    <p className="text-base leading-6 font-medium text-secondary-600">{seoDiensten.leftSide.title}</p>
                    <div className="flex md:w-full md:flex-col gap-6 cursor-pointer" role="navigation">
                        {seoDiensten.dienten.map((dienst, index) => (
                            <div
                                className={`bg-secondary-50 whitespace-nowrap text-base px-4 py-2 lg:px-12 lg:py-4 lg:text-lg leading-7 font-medium text-center rounded-lg
                ${activeIndex === index ? "text-indigo-500 border border-1 border-[#9869E9] test" : "text-secondary-600 shadow-sm"}`}
                                key={index}
                                onClick={() => setActiveIndex(index)}
                            >
                                {dienst.subTitle}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className='flex-grow'>
                    {seoDiensten.dienten.map((diensten, index) => (
                        <div key={index}>
                            {/* Accordion Header for mobile*/}
                            <div className='cursor-pointer flex gap-4 my-4 md:hidden' onClick={() => handleToggle(index)}>
                                {diensten.icon}
                                <h3 className={`${styles.heading3} self-center`}>{diensten.subTitle}</h3>
                            </div>
                            <div className="md:hidden mb-4 h-[1px] w-full bg-secondary-500"></div>

                            {/* Accordion Content */}
                            <div className={`transition-all ease-in-out duration-300 ${activeIndex === index ? "block" : "hidden"}`}>
                                <div className='hidden md:flex gap-4 mb-8'>
                                    {diensten.icon}
                                    <div className=''>
                                        <p className='text-sm leading-5 font-semibold text-primary-600 '>{diensten.subTitle}</p>
                                        <h2 className='text-3xl leading-9 font-semibold text-secondary-800 mt-[-4px]'>{diensten.title}</h2>
                                    </div>
                                </div>
                                <h2 className='md:hidden text-3xl leading-9 font-semibold text-secondary-800 mt-[-4px]'>{diensten.title}</h2>

                                <div className={`relative`}>
                                    <div id="diensten" style={contentStyles}>
                                        {parse(diensten.body)}
                                    </div>
                                    {/* Gradient Overlay */}
                                    {!isExpanded && (
                                        <div style={gradientStyles} />
                                    )}
                                </div>
                                <button className="self-center mt-6" onClick={handleToggleContent}>
                                    {isExpanded ? 'Lees minder..' : 'Lees meer..'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right side */}
                <div className='hidden 2xl:block 2xl:max-w-[236px] w-full flex-none'>
                    {seoDiensten.rightSide.icon}
                    {parse(seoDiensten.rightSide.body)}
                </div>
            </div>
        </section>
    )
}

export default Diensten



const seoDiensten = {
    leftSide: {
        title: "Inhoudsopgaven"
    },
    rightSide: {
        body: "Nog niet toe aan uitbesteden? Leer alles wat je nodig hebt met onze e-course!",
        icon: <Boek className="w-full h-auto" />,
        link: { name: "Bekijk hier", href: "/#" }
    },
    dienten: [

        {
            subTitle: "SEO Audit",
            title: "Waarom Heeft u SEO audit diensten nodig?",
            icon: <ChartBarIcon className='w-[44px] h-[44px] text-primary-500 p-3 bg-primary-100 rounded' />,
            body: `
            <p class="diensten-text" class="diensten-text">Een grondige SEO audit vormt de hoeksteen van een succesvolle online aanwezigheid. Hier bij Massive zetten we ons in om uw website naar nieuwe hoogten te tillen door middel van een combinatie van menselijke expertise en geavanceerde technologie. Onze aanpak omvat een diepgaande verkenning van de technische, inhoudelijke en externe facetten die van invloed zijn op de prestaties van uw website in de complexe wereld van zoekmachines.</p>
            <h3 class="diensten-h3">Waar is onze SEO Audit goed voor?</h3>
            <p class="diensten-text">Een SEO-audit is een proces waarbij de gezondheid en effectiviteit van een website op het gebied van zoekmachineoptimalisatie (SEO) worden geëvalueerd. Het doel van een SEO-audit is om inzicht te krijgen in de prestaties van een website in zoekmachines zoals Google en om problemen te identificeren die de ranking en zichtbaarheid van de website in zoekresultaten kunnen beïnvloeden. Hier zijn enkele van de belangrijkste doelen en voordelen van een SEO-audit:</p>
            <ul class="diensten-list">
                <li>dentificeren van problemen op de websit</li>
                <li>Verbeteren van ranking</li>
                <li>Optimaliseren van content</li>
                <li>Concurentieanalyse</li>
                <li>Verbetering van gebruiksvriendelijkheid</li>
                <li>Toekomstige strategieën ontwikkelen</li>
                <li>En Meer</li>
            </ul>
            <p class="diensten-text diensten-sub-title">SEO Audit</p>
            <h2 class="diensten-h2">Enkelen punten die wij aanleveren bij onze Audit</h2>
            <h3 class="diensten-h3">Technische Analyse</h3>
            <p class="diensten-text">We graven diep in de technische infrastructuur van uw website om eventuele struikelblokken voor zoekmachine crawlers aan het licht te brengen. Trage laadtijden, een beperkte mobiele compatibiliteit en gebroken links kunnen allemaal bijdragen aan een lagere ranking. Onze experts identificeren deze knelpunten en verschaffen aanbevelingen om ze aan te pakken, wat de algehele gebruikerservaring en indexeerbaarheid van uw site verbeterd.</p>
            <h3 class="diensten-h3">Content Evaluatie</h3>
            <p class="diensten-text">De kwaliteit van de inhoud op uw website is van onschatbare waarde voor... zoekmachines en gebruikers. Ons team beoordeelt niet alleen de relevantie en kwaliteit van uw content, maar onderzoekt ook de structuur ervan. We analyseren hoe goed uw content is georganiseerd en gepresenteerd, met het oog op zowel leesbaarheid als zoekmachineoptimalisatie.</p>
            <h3 class="diensten-h3">Backlink Onderzoek</h3>
            <p class="diensten-text">Externe links, of backlinks, zijn als stemmen van andere websites die uw site aanbevelen. Maar niet alle stemmen zijn gelijkwaardig. Onze diepgaande analyse van uw backlinkprofiel onthult de kwaliteit en kwantiteit van deze verwijzingen. We beoordelen welke sites naar u linken en welke invloed dit heeft op uw autoriteit binnen uw branche. Dit helpt om een gezond en waardevol netwerk van backlinks op te bouwen.</p>
            <h3 class="diensten-h3">Toonaangevende Tools</h3>
            <p class="diensten-text">We maken gebruik van enkele van de meest vooraanstaande tools in de industrie, zoals Google Analytics, SEMrush en Ahrefs. Deze krachtige instrumenten bieden ons een holistisch beeld van uw website, inclusief statistieken over bezoekersgedrag, zoekwoord prestaties en concurrentieanalyse. Door deze gegevens te interpreteren, krijgen we diepgaand inzicht in de huidige status van uw website en kunnen we gebieden pinpointen waar verbeteringen nodig zijn.</p>
            <h3 class="diensten-h3">Gepersonaliseerd Actieplan</h3>
            <p class="diensten-text">Na een grondige analyse stellen we een gedetailleerd rapport op met specifieke aanbevelingen. Dit rapport dient als uw gepersonaliseerde actieplan om de SEO-prestaties van uw website te verbeteren. We bieden heldere, stapsgewijze instructies die u kunt volgen om de voorgestelde verbeteringen aan te brengen. Of het nu gaat om technische optimalisatie, het versterken van uw contentstrategie of het cultiveren van waardevolle backlinks, wij staan klaar om u door dit proces te leiden.</p>
            `
        },
        {
            subTitle: "Keyword research",
            title: "sdg",
            icon: <ChartBarIcon className='w-[44px] h-[44px] text-primary-500 p-3 bg-primary-100 rounded' />,
            body: "sdg"
        },
        {
            subTitle: "On-page seo",
            title: "sdg",
            icon: <ChartBarIcon className='w-[44px] h-[44px] text-primary-500 p-3 bg-primary-100 rounded' />,
            body: "sdg"
        },
    ]
}