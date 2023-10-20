import React from 'react';

const CircularSegment = ({ percentage }) => {
    const deg = (360 / 100) * percentage;

    return (
        <>
            <div className='h-[500px] relative'>
                <div className='div'>
                    <div className='div outer'>
                        <div className='div inner'>
                            <p className='sdg text-3xl'>98</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CircularSegment;


