import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { DialogTitle, Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { GitBranchIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      {session && session.user ? (
        redirect("/chat")
      ) : (
        <Dialog open>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Sign-in to access your account
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              HelperBot is an advanced AI-powered chatbot designed to serve as an efficient and intuitive virtual assistant. Built with cutting-edge AI technology, HelperBot can assist users with a wide range of tasks, providing support and information at their fingertips.
            </DialogDescription>
            <form
              action={async () => {
                "use server"
                await signIn("github")
              }}
            >
              <Button type="submit" className="w-full" variant="outline">
                <GitBranchIcon className="size-4 mr-2" />Sign in with Github
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
