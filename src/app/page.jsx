import { ThemeSelector } from "@/app/docs/_components/ThemeSelector"
import Navbar from "@/components/Aids.jsx"

import '@/styles/tailwind.css'

export default function page() {
    return (
        <div>
            <Navbar />
            Hello Home page
            <p className="text-green-800 dark:text-blue-600">hoi</p>
        </div>
    )
}                   