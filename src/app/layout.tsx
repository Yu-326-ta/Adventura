import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adventura - RPGで楽しむタスク管理",
  description:
    "日常のタスクをRPGの冒険に変える、新しいカタチのタスク管理アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/todo"
      afterSignUpUrl="/todo"
    >
      <html lang="ja" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            inter.className,
            "min-h-screen bg-background flex flex-col"
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
