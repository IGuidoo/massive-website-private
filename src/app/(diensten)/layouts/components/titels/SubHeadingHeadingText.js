export const SubHeadingHeadingText = ({ title, containerStyles }) => {
    const { subHeading, heading, text } = title;

    return (
        <div className={` flex flex-col gap-6 ${containerStyles} `}>
            <h3 className="text-lg font-semibold">{subHeading}</h3>
            <h2 className="text-3xl font-semibold">{heading}</h2>
            <p className="text-sm">{text}</p>
        </div>
    )
}