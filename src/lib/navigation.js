import { ArchiveBoxXMarkIcon, ArrowDownLeftIcon, LinkIcon  } from '@heroicons/react/24/outline';
import { WordpressGray, ShopifyGray } from '@/components/icons';

export const navigation = [

  {
    title: 'Online Marketing',
    icon:  <ArchiveBoxXMarkIcon />,
    links: [
      {
        title: 'SEO',
        href: '/docs/how-to-contribute',
        icon: <ArchiveBoxXMarkIcon />,
        subCatagories: [
          {
            title: "Introductie tot seo", 
            href: '/docs/writing-plugins',
            icon: <ArrowDownLeftIcon />,
            subSubCatagories: [
              {title: 'test', href: '/docs/temporal-paradoxes'},
              {title: "On-page seo ", href: '/docs/temporal-paradoxes'},
            ]
          },
          {
            title: "Zoekwoorden onnderzoek",
            href: '/docs/neuralink-integration',
            icon: <LinkIcon />,
          },
          {
            title: "On-page seo ", 
            href: '/docs/temporal-paradoxes',
            icon: <WordpressGray />,
          },
          {
            title: "Technische seo", 
            href: '/docs/compile-time-caching',
            icon: <ShopifyGray />,
          },
        ]
      },
      { title: 'Online Advertenties', href: '/docs/architecture-guide' , icon: <ArchiveBoxXMarkIcon />, },
      { title: 'CMS', href: '/docs/design-principles', icon: <ArchiveBoxXMarkIcon />, },
      { title: 'Online Strategie', href: '/docs/design-principles', icon: <ArchiveBoxXMarkIcon />, },
    ],
  },
  
  
]
