import React from 'react'
import styles from '@/styles/styles'
import Image from 'next/image'

const LIRT = ({ data = [] }) => {
    return (
        <div className={`${styles.gutter} mx-auto grid grid-flow-row md:grid-flow-col md:grid-cols-12 z-50`}>
            <div className='md:col-span-5'>
                <Image 
                src={data.img}
                height={620}
                width={620}
                alt='yea boi'
                />
            </div>
            <div className='flex flex-col gap-2 md:gap-6 md:my-auto md:col-span-6 md:col-start-7'>
                <h4 className={`${styles.subHeading}`}>{data.subTitle}</h4>
                <h5 className={`${styles.heading3}`}>{data.title}</h5>
                <p className={`${styles.text}`}>{data.body}</p>
            </div>
        </div>
    )
}

export default LIRT