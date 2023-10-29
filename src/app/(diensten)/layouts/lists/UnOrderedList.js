export const UnOrderedList = ({ 
    items,
    resourceName,
    itemSpacing, 
    listComponent: ListComponent,
}) => {
    return (
        <ul>
            {items.map((item, index) => (
                <ListComponent 
                    key={index} 
                    itemSpacing= {index === 0 ? `` : `${itemSpacing}`} 
                    {...{ [resourceName]: item }} 
                />
            ))}
        </ul>
    )
}