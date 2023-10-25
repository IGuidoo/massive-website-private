import React from 'react'

const SimpleIconHeadingText = ({ data = [], cssContainer }) => {
  
    return (
        <div className='py-12 px-6  transform transition-all duration-500 hover:-translate-y-4 hover:shadow-sm hover:bg-white rounded-4xl group' >
            <div className={`w-20 h-20 p-6 rounded-xl ${ data.iconStyles }`}>
                { data.icon }
            </div>
            <h3 className='pt-6 text-xl leading-7 font-semibold text-secondary-800 transition-all duration-300 group-hover:text-gradient-primary'>{ data.heading }</h3>
            <p className='pt-2 text-lg leading-7 font-medium gradient-secondary-600'>{ data.text }</p>
        </div>
    )
}

export default SimpleIconHeadingText