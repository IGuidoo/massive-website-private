import React from 'react'

import Link from 'next/link'
import { PurpleCheckmark } from '@/components/icons'


const TagsList = ({ tagsData = [] }) => {
    return (
        <div className='flex flex-wrap gap-2'>
            {tagsData.tags.map((tag, index) => (
                <div key={index} className='flex pl-1 pr-4 py-1 gap-1.5 bg-secondary-100 rounded-full'>
                    <PurpleCheckmark />
                    <Link
                        href={tag.href}
                    >
                        <h4 className='text-xs leading-4 font-medium self-center text-secondary-500'>{tag.name}</h4> {/* Use tag.text instead of tag.content */}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default TagsList