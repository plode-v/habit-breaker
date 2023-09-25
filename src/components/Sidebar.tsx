'use client'
import React from 'react'
import { sidebarMenu } from '@/lib/data'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { Button } from './ui/button'

const Sidebar = () => {

    const pathname = usePathname()

  return (
    <div className='flex-1 h-screen border flex flex-col items-center gap-[25px] pt-[300px]'>
        {sidebarMenu.map((route) => (
            <Link key={route.id} href={route.link} className={`flex justify-center hover:bg-black/90 border-black/95 rounded-full border w-1/2 aspect-square items-center transition ${pathname === route.link ? 'bg-black text-white' : 'text-black'}`}>
                <Button className='uppercase' variant={'ghost'}>
                    {route.name}
                </Button>
            </Link>
        ))}
    </div>
  )
}

export default Sidebar