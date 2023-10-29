export const GridUnOrderedList = ({
    items,
    resourceName,
    gridContainerStyles,
    
    itemComponent: ItemComponent,
    iconContainerStyles,
    containerStyles,
}) => {

    return (
        <ul className={`${gridContainerStyles}`}>
            {items.map((item, index) => (
                <ItemComponent
                    key={index}
                    containerStyles={containerStyles}
                    iconContainerStyles={iconContainerStyles}
                    {...{ [resourceName]: item }}
                />
            ))}
        </ul>
    )
}