<section className={`${styles.section}`}>
<div className="banner-container">
    <div className="w-full max-w-[590px] lg:m-8 lg:p-5 rounded-2xl flex flex-col justify-between desktop-banner__text-container">
        <h2 className={`${styles.heading4xl}`}>
            <RenderText content={medischeBannerData.heading} />
        </h2>
        <TagsList tagsData={medischeBannerData} tagBG="bg-white" cssClass=" mt-2 lg:mt-0" />
        <Link href={medischeBannerData.button.link} className={`${styles.secondaryCTA} hidden lg:block `}>
            {medischeBannerData.button.content}
        </Link>
    </div>
    <div className="mobile-banner-container ml-auto " >
        <Image
            className="ml-auto overflow-hidden pt-[27px] rounded-br-2xl w-[80%] lg:w-full "
            src={"/images/medische-gezondheidszorg-website-mockup.png"}
            width={737}
            height={391}
            alt="Mockup van een medische website met een mannelijke arts"
        />
    </div>
</div>
</section>


/* Banner Home */
@media (min-width: 1240px) {
    .banner-container {
      display: flex;
      flex-direction: row;
      border-radius: 2rem;
      margin-left: auto;
  
      border-width: 1px;
      border-style: solid;
      border-color: white;
      box-shadow:
        0px 1px 2px 0px rgba(0, 0, 0, 0.06),
        0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  
      background: linear-gradient(180deg, #c8c9f6 0%, #7763f1 100%);
    }
    .desktop-banner__text-container {
      background: linear-gradient(
        180deg,
        #fff 0%,
        rgba(255, 255, 255, 0.85) 100%
      );
    }
  }
  @media (max-width: 1240px) {
    .mobile-banner-container {
      margin-top: 22px;
  
      border-radius: 0.5rem;
      border-width: 1px;
      border-style: solid;
      border-color: white;
      box-shadow:
        0px 1px 2px 0px rgba(0, 0, 0, 0.06),
        0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  
      background: linear-gradient(180deg, #c8c9f6 0%, #7763f1 100%);
    }
  }
  /* END Home Banner */
  