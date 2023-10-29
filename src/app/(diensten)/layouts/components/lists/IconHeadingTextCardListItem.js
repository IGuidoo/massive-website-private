export const IconHeadingTextCardListItem = ({ item, containerStyles, iconContainerStyles }) => {
    const { icon, heading, text, iconColors } = item;

    return (
        <li className={`flex flex-col ${containerStyles}`}>
            <div className={`${iconContainerStyles} ${iconColors}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold ">{heading}</h3>
                <p className="text-sm pt-2">{text}</p>
            </div>
        </li>
    )
}