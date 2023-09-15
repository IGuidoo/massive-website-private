import RenderText from "@/lib/RenderText";

import styles from "@/styles/styles.js";


const LatestDevelopments = ({ data = []}) => {
  return (
    <>
      {/* <div className="absolute w-[95%] bg-gray-100 h-[100%] border-r-1.5 border-l-1.5 border-solid border-white  "></div> */}
      <div className={`${styles.gutter} ${styles.mdHorizontalCenter} z-10 pt-40`}>
        <h2 className={`${styles.heading2} ${styles.horizontalCenter} max-w-3xl text-center mb-7`} >
          <RenderText content={data[0].heading} />
        </h2>
        <p className={`${styles.paragraafSmall} ${styles.horizontalCenter} max-w-3xl text-center mb-10`} >
          <RenderText content={data[0].text} />
        </p>
        <div className={`grid grid-cols-7 gap-2 sm:gap-6 md:gap-10 lg:gap-14 px-6 py-4 bg-gray-200 rounded-2xl w-fit outline-1 outline-white shadow-inner ${styles.horizontalCenter}`} >
          {data.map((data) =>
            data.icons.map((icon) => (
                <figure> 
                    { icon.icon }
                </figure>
            ))
          )}
        </div>
      </div>
      </>
  );
};

export default LatestDevelopments;
