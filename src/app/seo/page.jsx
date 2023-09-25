import AcordionWithIcons from "@/components/AcordionWithIcons"
import Hero from "./Hero"
import Diensten from "@/components/Diensten"



// imports data 

// Hero
import { ChartBarIcon } from '@heroicons/react/20/solid'

import Massive_Header_SVG_SEO_page from "@/images/hero/Massive_Header_SVG_SEO_page.svg"


// Accordion
import { UserGroupIcon, ShieldCheckIcon, MegaphoneIcon, PresentationChartLineIcon, ArrowTrendingUpIcon} from '@heroicons/react/20/solid'


export const metadata = {
  title: {
    default: 'SEO Massive Online Marketing',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function page() {
  return (
    <>
      <div className="w-full relative max-w-[1920px] mx-auto">
        <Hero data={HeroData} />
        {/* <HeroBackgroundSEO className="hidden md:block md:absolute bottom-0 -z-10" /> */}
      </div>

      <AcordionWithIcons data={AccordionData} />

      <Diensten />
    </>
  )

}


const HeroData = {
  heroImg: <Massive_Header_SVG_SEO_page className="w-full overflow-visible " />,
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



const AccordionData = {
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