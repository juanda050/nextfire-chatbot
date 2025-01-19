import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'

const Header = () => {
    return (
        <header className='bg-background border-b p-4 flex items-center justify-between'>
            <SidebarTrigger className='block md:hidden mr-4' />
            <Link href="/chat">
                <h1 className='text-xl font-bold'>Ask Chat</h1>
            </Link>
            <ModeToggle />
        </header>
    )
}

export default Header
