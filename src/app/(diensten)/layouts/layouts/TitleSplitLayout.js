import React from 'react'
import SplitLayout from './SplitLayout';

const TitleSplitLayout = ({ 
        children, 
        containerStyles, 
        splitContainerStyles, 
        leftContainerStyles, 
        rightContainerStyles 
    }) => {

    const [title, left, right] = children

    return (
        <div className={`${containerStyles}`}>
            
            <> {title} </>

            <SplitLayout
                containerStyles={splitContainerStyles}
                leftContainerStyles={leftContainerStyles}
                rightContainerStyles={rightContainerStyles}
            >
                {left}
                {right}
            </SplitLayout>

        </div>
    )
}

export default TitleSplitLayout;