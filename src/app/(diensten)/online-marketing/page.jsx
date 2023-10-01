import AcordionWithIcons from "@/components/sections/AcordionWithIcons"
import Hero from "@/app/(diensten)/DienstenHero"
import Diensten from "@/app/(diensten)/Diensten"
import styles from "@/styles/styles"



// imports data 

// Hero
import { ChartBarIcon } from '@heroicons/react/20/solid'
import Massive_Header_SVG_SEA_page from "@/images/hero/SVG_SEA_page.svg"

//Links Rechts
import LTRI from "@/components/LTRI"
import LIRT from "@/components/LIRT"

// Accordion
import { UserGroupIcon, ShieldCheckIcon, MegaphoneIcon, PresentationChartLineIcon, ArrowTrendingUpIcon} from '@heroicons/react/20/solid'

//Diensten 
// import Boek from "@/images/Boek.svg"



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

            <section className={`flex flex-col gap-32 ${styles.paddingY}`}>
                <LIRT data={LinksRechtsData[0]} />
                <LTRI data={LinksRechtsData[1]} />
                <LIRT data={LinksRechtsData[2]} />
            </section>

            <AcordionWithIcons data={AccordionData} className="z-10" />

            <Diensten data={seoDiensten} className="z-10" />
        </>
    )

}



const HeroData = {
  heroImg: <Massive_Header_SVG_SEA_page className="w-full overflow-visible " />,
  title: {
      title: "SEO",
      subTitle: "Stijg uit boven je concurentie",
      icon: <ChartBarIcon />,
      colors: "text-primary-500 bg-primary-100"
  },
  content: {
      title: "Uitgebreide SEO-oplossingen voor een",
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

const LinksRechtsData = [
    {
        "title": "Efficiënte Leadgeneratie voor Elk Budget",
        "subTitle": "Doelgerichte Campagnes Binnen Uw Budget",
        "body": "Heeft u een beperkt marketingbudget maar wilt u toch opvallen tussen de online concurrentie? Onze SEA-specialisten helpen u bij het opzetten van doelgerichte campagnes die uw ideale klanten bereiken, zonder uw budget te overschrijden. Geniet van kosteneffectieve advertentieoplossingen die resultaten opleveren.",
        "img": "/images/image_56.png"
    },
    {
        "title": "Verhoog de Zichtbaarheid van Uw Bedrijf",
        "subTitle": "Versterk Uw Online Aanwezigheid",
        "body": "Begrijpen we dat het essentieel is om een betrouwbare en effectieve online marketingstrategie te hebben om de zichtbaarheid te vergroten. Ons team van experts biedt op maat gemaakte SEA-oplossingen die zijn ontworpen om uw online aanwezigheid te versterken en meer klanten naar uw bedrijf te trekken.",
        "img": "/images/image_56.png"
    },
    {
        "title": "Schaalbare SEA Oplossingen voor Elk Bedrijfsformaat",
        "subTitle": "Bereik Uw Marketingdoelen en Laat Uw Bedrijf Groeien",
        "body": "Of u nu een groot of klein bedrijf heeft, wij bieden geavanceerde SEA-strategieën die zijn afgestemd op uw specifieke behoeften, zodat u uw marketingdoelen kunt bereiken en uw bedrijf kunt laten groeien. Ontdek schaalbare online advertentieoplossingen die met u meegroeien.",
        "img": "/images/image_56.png"
    }

]


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
          icon: <UserGroupIcon />,
          colors: "text-primary-500 bg-primary-100 "
      },
      {
          title: "Bouw vertrouwen en geloofwaardigheid",
          body: "SEO trekt niet zomaar willekeurig verkeer aan; het trekt bezoekers aan die actief op zoek zijn naar uw diensten. Voor startup oprichters zoals Jeroen en kleine ondernemers zoals Lisa betekent dit een hogere kans op conversies en klantbetrokkenheid.",
          icon: <ShieldCheckIcon />,
          colors:"text-green-500 bg-green-100"
      },
      {
          title: "Vergroot uw online zichtbaarheid",
          body: "In tegenstelling tot betaalde advertenties, waarbij u betaalt voor elke klik, is SEO een langetermijninvestering met duurzame resultaten. Voor non-profit organizers zoals Anna, die vaak met beperkte budgetten werken, biedt SEO een betaalbare oplossing om hun boodschap te verspreiden.",
          icon: <MegaphoneIcon />,
          colors: "text-indigo-500 bg-indigo-100"
      },
      {
          title: "Kosteneffectieve marketing",
          body: "Een hoge ranking in zoekmachines geeft uw merk autoriteit. Voor e-commerce managers zoals Stefan en marketing executives zoals Thomas betekent dit een versterking van het merkimago en vertrouwen bij potentiële klanten.",
          icon: <PresentationChartLineIcon />,
          colors: "text-red-500 bg-red-100"
      },
      {
          title: "Blijf voor op de concurrentie",
          body: "De digitale wereld is constant in beweging. Door up-to-date te blijven met SEO, blijft u een stap voor op uw concurrenten. Dit is vooral belangrijk voor tech-savvy millennials en startup oprichters die in een competitieve markt opereren.",
          icon: <ArrowTrendingUpIcon />,
          colors: "text-yellow-500 bg-yellow-100"
      }
  ]
}


const seoDiensten = {
  leftSide: {
      title: "Inhoudsopgaven"
  },
  rightSide: {
      body: "Nog niet toe aan uitbesteden? Leer alles wat je nodig hebt met onze e-course!",
    //   icon: <Boek className="w-full h-auto" />,
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