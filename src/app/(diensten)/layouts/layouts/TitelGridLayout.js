import { GridLayout } from "./GridLayout"

export const TitelGridLayout = ({
    children,
    containerStyles,
}) => {
    const [title, grid] = children


    return (
        <div className={`${containerStyles}`}>
            <> {title} </>


            {grid}
        </div>
    )
}