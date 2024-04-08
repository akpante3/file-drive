"use client"
import { Button } from "@/components/ui/button";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignInButton, useSession } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile)
  const session = useSession();
  return (
    <main>
      {/* <SignedIn>
        <SignOutButton>
          <Button variant={'secondary'}>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
        <Button variant={'secondary'}>Sign In</Button>
        </SignInButton>

        <Button onClick={() => createFile({
          text: 'hello wolrd'
        })}>Click me</Button>
      </SignedOut> */}
    </main>
  );
}
