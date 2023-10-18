import RenderText from '@/lib/RenderText'
import styles from '@/styles/styles'
import React from 'react'

const SubheadingHeadingText = ({ data = [], cssClass }) => {
  
  return (
    <div className={`flex flex-col ${cssClass} ` }>
        <h2 className={`${styles.subHeadingRounded}`}>{data.subHeading}</h2>
        <h3 className={`${styles.heading4xl}`}><RenderText content={data.heading} /> </h3>
        <p className={`${styles.text}`}>{data.text}</p>
    </div>
  )
}

export default SubheadingHeadingText