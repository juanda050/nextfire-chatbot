import React from 'react'
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from './ui/sidebar'
import NewChat from './new-chat'
import ProfileButton from './profile-button'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function AppSidebar() {
    const session = await auth();

    if (!session) {
        redirect("/");
    }

    if (!session.user) {
        redirect("");
    }

    const user = session.user;

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <NewChat />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>Chat list</SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <ProfileButton user={user} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
        </Sidebar>
    )
}
