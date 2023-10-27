import React from 'react'
import AccordionSinge from '@/components/Accordion'
import styles from '@/styles/styles'

import { MassiveLogoGray } from "@/assets/massiveBranding"

const Accordions = ({ data = [], containerStyles }) => {
    return (
        <div className={`flex flex-col mx-auto ${containerStyles} `}>
            {data.map((item, index) => (
                <>
                    <AccordionSinge key={index} title={item.title} body={item.body} containerStyles={`md:rounded-2xl ${styles.borderInsetWhite3} shadow-sm`} />
                    {index !== data.length - 1 && (
                        <MassiveLogoGray className="hidden md:block self-center" />
                    )}
                </>
            ))}
        </div>
    )
}

export default Accordions