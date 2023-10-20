.simple-accordion{
  box-sizing: border-box;
  background: white;
  transition: max-height 0.5s ease-out;
  background-color: var(--secondary-50);

  max-height: 5rem; /* Set a max-height value just enough to show the summary content */
  overflow: hidden; /* Hide the rest of the content */
}

.simple-accordion summary {
  display: block; /* This hides the summary's ::marker pseudo-element */
}

.simple-accordion__input{
  display: none;
}
.simple-accordion__label {
  position: relative;
  display: flex;
  align-items: center;
  padding: 40px 32px;
  height: 1rem; /* This height value must be equal to max-height value of <details> element  */
}

.simple-accordion__label:hover{
  cursor: pointer;
}

.simple-accordion__input:checked + .simple-accordion
,.simple-accordion:has(input:checked) {
  max-height: 400px; /* Set a max-height value enough to show all the content */
}

.simple-accordion__heading {
  transition: color 0.3s ease;
}
.simple-accordion__input:checked + details .simple-accordion__heading {
  color: var(--primary-500);
}

.chevron {
  transition: transform 0.3s ease-in-out;
}
.simple-accordion__input:checked + details .chevron{
  transform: rotate(-90deg);
  transition: transform 0.3s ease-in-out;
}



import React from 'react'

import styles from '@/styles/styles'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Accordion = ({ data = [], cssClass, cssIndivClass }) => {


    return (
        <div className={`${cssClass}`} >
            {data.map((item, index) => (
                <div key={item.title}>
                    <input type="checkbox" name={`detail-${index}`} id={`detail-${index}`} className='simple-accordion__input' />
                    <details open  className={` simple-accordion text-base leading-6 font-medium text-secondary-700 md:text-lg md:leading-7 ${cssIndivClass}`}>
                        <summary className=''>
                            <label for={`detail-${index}`} className='flex gap-6 simple-accordion__label py-5'>
                                <h3 className='text-xl leading-7 font-semibold text-secondary-800 simple-accordion__heading'>{item.title}</h3>
                                <ChevronDownIcon className="w-8 h-8 ml-auto chevron" />
                            </label>
                        </summary>
                        <div className='px-8 mb-8 simple-accordion__body'>
                            {item.body}

                        </div>
                    </details>
                </div>

            ))}
        </div>
    )

}

export default Accordion