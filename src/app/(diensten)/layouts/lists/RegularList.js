export const RegualarList = ({ 
    items,
    resourceName,
    itemSpacing, 
    itemComponent: ItemComponent,
}) => {
    return (
        <>
            {items.map((item, index) => (
                <ItemComponent 
                    key={index} 
                    itemSpacing= {index === 0 ? `` : `${itemSpacing}`} 
                    {...{ [resourceName]: item }} 
                />
            ))}
        </>
    )
}