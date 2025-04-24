"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs";
import {
  Menu,
  X,
  Home,
  CheckSquare,
  Sword,
  User,
  LogOut,
  HelpCircle,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // ナビゲーションリンクのアクティブ状態を確認する関数
  const isLinkActive = (path: string) => pathname === path;

  // ナビゲーション項目リスト
  const navItemsSignedIn = [
    {
      label: "タスク一覧",
      href: "/todo",
      icon: <CheckSquare className="h-5 w-5" />,
    },
    { label: "クエスト", href: "/quests", icon: <Sword className="h-5 w-5" /> },
    {
      label: "プロフィール",
      href: "/profile/me",
      icon: <User className="h-5 w-5" />,
    },
    {
      label: "よくある質問",
      href: "/faq",
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ];

  const navItemsSignedOut = [
    { label: "始めましょう", href: "/sign-in" },
    { label: "よくある質問", href: "/faq" },
  ];

  return (
    <header className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/weapons/sword.png"
              alt="Adventura"
              width={32}
              height={32}
            />
            <h1 className="text-2xl font-bold text-white">Adventura</h1>
          </Link>

          {/* デスクトップ用ナビゲーション */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              <SignedOut>
                {navItemsSignedOut.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={`text-white hover:bg-white/10 ${
                          isLinkActive(item.href) ? "bg-white/10" : ""
                        }`}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </SignedOut>

              <SignedIn>
                {navItemsSignedIn.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={`text-white hover:bg-white/10 ${
                          isLinkActive(item.href) ? "bg-white/10" : ""
                        }`}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </li>
                ))}
                <li>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonPopoverCard:
                          "left-1/2 transform -translate-x-1/2",
                      },
                    }}
                  />
                </li>
              </SignedIn>
            </ul>
          </nav>

          {/* モバイル用ハンバーガーメニュー */}
          <div className="md:hidden flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/40 backdrop-blur-xl border-l-0"
              >
                <SheetHeader className="text-left pb-4">
                  <SheetTitle className="text-white text-xl">
                    Adventura
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  <Link
                    href="/"
                    className="text-white hover:text-white/70 transition flex items-center gap-2 text-lg"
                  >
                    <Home className="h-5 w-5" />
                    ホーム
                  </Link>

                  <SignedIn>
                    {navItemsSignedIn.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-white hover:text-white/70 transition flex items-center gap-2 text-lg"
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                    <SignOutButton>
                      <button className="text-white hover:text-white/70 transition flex items-center gap-2 text-lg">
                        <LogOut className="h-5 w-5" />
                        ログアウト
                      </button>
                    </SignOutButton>
                  </SignedIn>

                  <SignedOut>
                    {navItemsSignedOut.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-white hover:text-white/70 transition flex items-center gap-2 text-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </SignedOut>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
