import React from 'react'

import Link from 'next/link'
import { PurpleCheckmark } from '@/assets/icons'


const TagsList = ({ tagsData = [], tagBG, cssClass }) => {
    return (
        <ul className={`flex flex-wrap gap-2 ${cssClass}`}>
            {tagsData.tags.map((tag, index) => (
                <li key={index} className={`pl-1 pr-4 py-1 rounded-full ${tagBG ? tagBG : "bg-secondary-100" }`} >
                    <Link
                        href={tag.href}
                        className='flex gap-1.5 '
                    >
                    <PurpleCheckmark />
                        <h4 className='text-xs leading-4 font-medium self-center text-secondary-500'>{tag.name}</h4> {/* Use tag.text instead of tag.content */}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default TagsList