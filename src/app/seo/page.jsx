import AcordionWithIcons from "@/components/AcordionWithIcons"
import Hero from "./Hero"
import HeroBackgroundSEO from "@/images/HeroBackgroundSEO.svg"
import Diensten from "@/components/Diensten"

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
      <div className="w-full relative">
        <Hero />
        <HeroBackgroundSEO className="hidden md:block md:absolute bottom-0 -z-10" />
      </div>

      <AcordionWithIcons />

      <Diensten />
    </>
  )

}