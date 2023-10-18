import RenderText from '@/lib/RenderText'
import styles from '@/styles/styles'
import React from 'react'

const subHeadingHeadingText = ({ data = [], gap, mdGap, maxWidth }) => {
  return (
    <div className={`flex flex-col gap-${gap} md:gap-${mdGap} ` } style={{maxWidth: maxWidth}}>
        <h2 className={`${styles.subHeadingRounded}`}>{data.subHeading}</h2>
        <h3 className={`${styles.heading5xl}`}><RenderText content={data.heading} /> </h3>
        <p className={`${styles.text}`}>{data.text}</p>
    </div>
  )
}

export default subHeadingHeadingText