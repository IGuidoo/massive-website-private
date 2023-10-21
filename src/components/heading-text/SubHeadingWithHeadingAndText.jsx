import RenderText from '@/lib/RenderText'
import styles from '@/styles/styles'
import React from 'react'

const SubHeadingWithHeadingAndText = ({ 
  data = {}, 
  containerStyles, 
  headingStyle = '4xl',  // default to 4xl
  headingPadding = ''    // default to no padding
}) => {
  
  const headingClassName = headingStyle === '5xl' 
    ? styles.heading5xl 
    : styles.heading4xl;

  return (
    <div className={`flex flex-col ${containerStyles}`}>
        <h2 className={`${styles.subHeadingRounded} ${headingPadding}`}>{data.subHeading || ''}</h2>
        <h3 className={headingClassName}><RenderText content={data.heading || ''} /></h3>
        <p className={`${styles.text}`}>{data.text || ''}</p>
    </div>
  )
}

export default SubHeadingWithHeadingAndText;
