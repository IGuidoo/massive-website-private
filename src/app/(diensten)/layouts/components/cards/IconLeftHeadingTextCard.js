export const IconLeftHeadingTextCard = ({ item, itemSpacing }) =>{
    const { icon, title, text } = item; 

    return (
        <div className={`flex flex-cols gap-6 ${itemSpacing}`}>
            <div className="">
                { icon }
            </div>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    )

}