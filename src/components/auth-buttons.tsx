"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuthButtons() {
  return (
    <div className="flex gap-4">
      <SignedOut>
        <Link href="/sign-in">
          <Button
            variant="ghost"
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white hover:text-white transition-all hover:scale-105"
          >
            ログイン
          </Button>
        </Link>
        <Link href="/sign-up" className="block">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            新規登録
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
        />
      </SignedIn>
    </div>
  );
}
