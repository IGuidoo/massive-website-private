export const SubHeadingHeadingLeftText = ({ titel, containerStyles }) => {
    const { subHeading, heading, text } = titel;

    return (
        <div className={` ${containerStyles}`} >
            <div className="flex flex-col gap-6 max-w-[665px]">
                <h2 className="text-lg font-semibold">{subHeading}</h2>
                <h3 className="text-3xl font-semibold">{heading}</h3>
            </div>

            <p className="text-sm self-end max-w-[620px]">{text}</p>
        </div>
    )
}