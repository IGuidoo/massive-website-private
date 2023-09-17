import Link from "next/link";
import RenderText from "@/lib/RenderText";
import styles from "@/styles/styles";

const Hero = ({ data = [] }) => {
    return (
        <div className=" lg:w-[93%] lg:mx-auto pt-12 mb-23 md:mt-0 md:pt-0">
            <div className={`${styles.gutter} ${styles.mdHorizontalCenter} md:pt-24`}>
                <div className="text-center ">
                    <h3 className="text-sm leading-5 font-semibold text-secondary-800 md:text-xl md:leading-7 ">
                        <RenderText content={data[0].subHeading} />
                    </h3>
                    <h1 className="flex flex-col text-5xl font-bold text-secondary-800 md:text-8xl">
                        {data[0].heading.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </h1>
                    <p className={` pt-4 text-sm leading-5 font-medium text-secondary-700 md:pt-7 md:text-base md:leading-6 md:max-w-[540px] ${styles.horizontalCenter} `}>
                        <RenderText content={data[0].text} />
                    </p>
                </div>
                <div className=" mt-40 flex flex-col gap-3 md:mt-12 ">
                    <div className={`flex flex-col gap-3 md:flex-row ${styles.mdHorizontalCenter}`}>
                        <div className={`${styles.primaryCTA}`}>
                            <Link href={data[0].cta1.link}>
                                {data[0].cta1.text}
                            </Link>
                        </div>
                        <div className={`${styles.secondaryCTA}`}>
                            <Link href={data[0].cta2.link}>
                                {data[0].cta2.text}
                            </Link>
                        </div>
                    </div>
                    <div className="text-sm leading-4 font-medium text-secondary-700 flex justify-center">
                        <Link href={data[0].cta3.link}>
                            {data[0].cta3.text}
                        </Link>
                    </div>
                </div>
                <div className={`flex gap-8 justify-center mt-20 pb-8 md:justify-start md:pb-12 md:mt-40 px-6`}>
                    {data[0].social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={``}
                        >
                            <span className="sr-only">{item.name}</span>
                            {item.icon}
                            {/* <img src={item.icon} alt="" className="w-[24px] h-[24px]"/> */}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
