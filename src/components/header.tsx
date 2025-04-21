import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Header() {
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

          {/* ナビゲーション */}
          <nav>
            <ul className="flex items-center gap-4">
              <SignedOut>
                <li>
                  <Link href="/sign-in">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      始めましょう
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      よくある質問
                    </Button>
                  </Link>
                </li>
              </SignedOut>

              <SignedIn>
                <li>
                  <Link href="/todo">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      タスク一覧
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/quests">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      クエスト
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/profile/me">
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      プロフィール
                    </Button>
                  </Link>
                </li>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </SignedIn>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
