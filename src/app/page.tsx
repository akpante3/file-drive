"use client"
import { Button } from "@/components/ui/button";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { SignInButton, useSession } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  return (
    <main>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal"></SignInButton>
      </SignedOut>

      <Button>hello</Button>
    </main>
  );
}
