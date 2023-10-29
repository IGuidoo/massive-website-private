export const GridLayout = ({ children, containerStyles }) => {

    return (
        <div className={`${containerStyles}`}>
            {children}
        </div>
    )

}