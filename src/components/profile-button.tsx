import { User } from 'next-auth'
import React from 'react'
import { SidebarMenuButton } from './ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { signOut } from '@/auth'

export default function ProfileButton({ user }: { user: User }) {
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <SidebarMenuButton type='submit'>
                <Avatar className='size-8'>
                    <AvatarImage src={user.image || "bot.png"} />
                    <AvatarFallback>
                        {user.name?.split(" ").map((name) => name[0]).join("")}
                    </AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left  text-sm leading-tight'>
                    <span className='truncate font-semibold'>{user.name}</span>
                    <span className='truncate text-xs'>{user.email}</span>
                </div>
            </SidebarMenuButton>
        </form>
    )
}
