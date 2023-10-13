"use client";

import Link from "next/link";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ComputerDesktopIcon,
    ShoppingCartIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    ServerIcon,
    PresentationChartLineIcon,
    XMarkIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline'
import { MenuLogo, OutlineMail } from "../icons"

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
// import { ThemeSelector } from "@/app/docs/_components/ThemeSelector";
import '@/styles/tailwind.css'
import styles from "@/styles/styles.js";

const products = [
    { name: 'SEO', description: 'Stijg uit boven je concurenten', href: '/seo', icon: ChartBarIcon },
    { name: 'SEA', description: 'Effective SEA-Campanges', href: '/online-marketing', icon: CursorArrowRaysIcon },
    { name: 'Website', description: 'Creative, datagedreven websites', href: '/website-laten-maken', icon: ComputerDesktopIcon },
    { name: 'eCommerce', description: 'Online web-winkeloplossingen', href: '/webshop-laten-maken', icon: ShoppingCartIcon },
    { name: 'Strategie', description: 'Doelgerichte online strategieën', href: '/online-strategie', icon: PresentationChartLineIcon },
    // { name: 'CMS', description: 'Innovatief contentbeheer', href: '#', icon: ServerIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
const company = [
    { name: 'About us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
       <div>
        
       </div>
    )
}
