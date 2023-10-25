import React from 'react'

import { MassiveLogoColor } from '@/assets/logos'
import { EnvelopeIcon }  from "@heroicons/react/24/outline"


const SimpleNavbar = () => {
  return (
    <nav className='py-6 flex flex-row justify-between'>
        <MassiveLogoColor className='w-14 h-8' />
        <button className='flex flex-row gap-2 items-center py-[10px] pr-6 pl-5 gradient-primary-css rounded-md text-secondary-50' ><EnvelopeIcon className='w-6 h-6 ' /> Contact  </button>
    </nav>
  )
}

export default SimpleNavbar