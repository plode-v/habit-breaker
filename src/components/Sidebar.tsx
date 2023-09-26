'use client'
import React from 'react'
import { sidebarMenu } from '@/lib/data'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { Button } from './ui/button'

const Sidebar = () => {

    const pathname = usePathname()

  return (
    <div className='w-[200px] h-screen border hidden md:flex flex-col items-center gap-[30px] justify-center'>
        {sidebarMenu.map((route) => (
            <Link key={route.id} href={route.link} className={`flex justify-center hover:bg-black/90 hover:text-white border-black/95 rounded-lg border h-[80px] w-3/4 items-center transition ${pathname === route.link ? 'bg-black text-white' : 'text-black'}`}>
                <div className='uppercase'>
                    {route.name}
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Sidebar