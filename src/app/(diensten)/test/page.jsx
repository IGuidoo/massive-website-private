"use client"

import NewNavbar from '@/components/NewNavbar'
import ResponsiveNavbar from '@/components/ResponsiveNavbar'
import React from 'react'
import Head from 'next/head'

import "@/styles/ResponsiveNavbar.css"
import "@/styles/icons.css"
// import "@/lib/responsiveNavbarJS.js"


const page = () => {
  return (
    <>
    <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
    </Head>
     {/* <NewNavbar /> */}
     <ResponsiveNavbar />
    </>
  )
}

export default page