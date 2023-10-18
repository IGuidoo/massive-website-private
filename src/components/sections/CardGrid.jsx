import React from 'react'
import styles from '@/styles/styles';

const CardGrid = ({ data = [] }) => {
  return (
    <div className="flex flex-col gap-6  lg:grid lg:grid-cols-12 lg:gap-4">
      {data.map((item, index) => (
        <div 
          key={index} 
          className={`py-4 lg:p-6 lg:border-solid lg:border-white lg:border-3 bg-secondary-50 rounded-3xl
          ${index < 2 ? 'col-span-6' : 'col-span-4'}`}
        >
          <div className='border-solid border-white border-3 lg:border-none rounded-xl'>
            {item.img}
          </div>          
          <h4 className='text-lg leading-7 font-semibold lg:text-2xl lg:leading-8 text-secondary-800 pt-4 lg:pt-6 '>{item.heading}</h4>
          <p className='text-base leading-6 font-medium lg:text-lg lg:leading-7 text-secondary-600 pt-1 lg:pt-2'>{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default CardGrid;
