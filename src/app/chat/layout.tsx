import AppSidebar from '@/components/app-sidebar';
import Header from '@/components/headers';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>
) {
    return (
        <SidebarProvider>
            <>
                <AppSidebar />
                <div className='flex flex-1 flex-col'>
                    <Header />
                    {children}
                </div>
            </>
        </SidebarProvider>
    )
}
