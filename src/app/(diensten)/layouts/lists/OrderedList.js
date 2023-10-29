export const OrderedList = ({ 
    items,
    resourceName,
    itemSpacing, 
    listComponent: ListComponent,
}) => {
    return (
        <ol>
            {items.map((item, index) => (
                <ListComponent 
                    key={index} 
                    itemSpacing= {index === 0 ? `` : `${itemSpacing}`} 
                    {...{ [resourceName]: item }} 
                />
            ))}
        </ol>
    )
}