import { ArchiveBoxXMarkIcon, ArrowDownLeftIcon, LinkIcon  } from '@heroicons/react/24/outline';
import { WordpressGray, ShopifyGray } from '@/assets/icons';

export const navigation = [

  {
    title: 'Online Marketing',
    icon:  <ArchiveBoxXMarkIcon className='w-4 h-4' />,
    links: [
      {
        title: 'SEO',
        href: '/docs/how-to-contribute',
        icon: <ArchiveBoxXMarkIcon className='w-4 h-4' />,
        subCatagories: [
          {
            title: "Introductie tot seo", 
            href: '/docs/writing-plugins',
            icon: <ArrowDownLeftIcon className='w-4 h-4' />,
            subSubCatagories: [
              {title: 'test', href: '/docs/temporal-paradoxes'},
              {title: "On-page seo ", href: '/docs/temporal-paradoxes'},
            ]
          },
          {
            title: "Zoekwoorden onnderzoek",
            href: '/docs/neuralink-integration',
            icon: <LinkIcon className='w-4 h-4' />,
          },
          {
            title: "On-page seo ", 
            href: '/docs/temporal-paradoxes',
            icon: <WordpressGray className='w-4 h-4' />,
          },
          {
            title: "Technische seo", 
            href: '/docs/compile-time-caching',
            icon: <ShopifyGray className='w-4 h-4' />,
          },
        ]
      },
      { title: 'Online Advertenties', href: '/docs/architecture-guide' , icon: <ArchiveBoxXMarkIcon className='w-4 h-4' />, },
      { title: 'CMS', href: '/docs/design-principles', icon: <ArchiveBoxXMarkIcon className='w-4 h-4' />, },
      { title: 'Online Strategie', href: '/docs/design-principles', icon: <ArchiveBoxXMarkIcon className='w-4 h-4' />, },
    ],
  },
  
  
]
