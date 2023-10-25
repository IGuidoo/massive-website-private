import RenderText from "@/lib/RenderText";
import styles from "@/styles/styles";

const Hero = ({ data = [] }) => {
    return (
        <div className=" lg:w-[93%] lg:mx-auto pt-12 mb-23 md:mt-0 md:pt-0">
            <div className={`${styles.gutterPadding} ${styles.mdHorizontalCenter} md:pt-24`}>
                <div className="flex flex-col items-center text-center  ">
                    <h3 className="text-sm leading-5 font-semibold text-secondary-800 md:text-xl md:leading-7 ">
                        {data.subHeading} 
                    </h3>
                    <h1 className="flex flex-col text-5xl font-bold text-secondary-800 md:text-8xl">
                        {data.heading.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </h1>
                    <p className={` pt-4 text-sm leading-6 font-bold text-secondary-600 md:pt-7 md:text-base md:leading-7 md:max-w-[540px] ${styles.horizontalCenter} `}>
                        {data.text} 
                    </p>
                    <RenderText content={data.buttons} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
