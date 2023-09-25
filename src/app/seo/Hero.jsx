import styles from '@/styles/styles'
import React from 'react'
import Link from 'next/link'

import TagsList from '@/components/TagsList'

const Hero = ({ data = [] }) => {
    return (
        <section className={` ${styles.gutter} ${styles.mdHorizontalCenter} py-16 md:py-32  `}>

            <div className='grid grid-flow-row lg:grid-flow-col lg:grid-cols-2'>
                <div className='self-center'>
                    <div className='flex gap-4 mb-8'>
                        {data.title.icon}
                        <div className=''>
                            <p className='text-lg leading-7 font-semibold text-secondary-800'>{data.title.title}</p>
                            <p className='text-sm leading-5 text-secondary-500 mt-[-4px]'>{data.title.subTitle}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-16'>

                        <div className='flex flex-col gap-8'>
                            <h1 className={` ${styles.heading2} heading-gradient-gray pb-1`}>{data.content.title}</h1>
                            <p className={` ${styles.text} `}>{data.content.body}</p>
                            <TagsList tagsData={data.content} />
                        </div>

                        <div className='flex flex-col gap-2 items-center md:flex-row'>
                            <Link
                                href={data.cta[0].href}
                                className={` ${styles.buttonT2} ${styles.buttonP4} ${styles.buttonS3} ${styles.buttonWidthMD}  inline-block `}
                            >
                                {data.cta[0].title}
                            </Link>
                            <p className={` ${styles.text} hidden md:block`}>{data.cta[1].textBetween}</p>
                            <Link
                                href={data.cta[2].href}
                                className={` ${styles.buttonT2} ${styles.buttonP4} ${styles.buttonS4} ${styles.buttonWidthMD}inline-block `}
                            >
                                {data.cta[2].title}
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="hidden lg:flex w-full self-center ">
                    <div className=' lg:absolute lg:top-0 lg:left-[10%] 2xl:left-0 w-[100%] -z-10'>
                    {/* <div className=' w-full -z-20  '> */}
                        {/* <Gradient className="absolute xl:-top-[94px] right-0 big-blend "/> */}
                        {data.heroImg}
                        {/* <BGhero className="hidden lg:block absolute  md:top-[180px]  xl:-top-[94px] right-0 -z-30 max-w-[1920px] w-full 2xl:scale-90" /> */}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Hero


