import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarMenuButton } from "./ui/sidebar";

export default function NewChat() {
    return (
        <SidebarMenuButton className="" asChild>
            <Button variant="outline" className="w-full">
                <PlusIcon className="mr-2 size-4" /> New Chat
            </Button>
        </SidebarMenuButton>
    )
}
