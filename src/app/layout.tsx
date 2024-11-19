import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import AppHeader from "@/components/layout/AppHeader";
import { usePathname } from "next/navigation";
import AppContainer from "@/components/layout/AppContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이동규 블로그",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "flex flex-col",
          "overscroll-none",
          "bg-slate-200"
        )}
      >
        <AppHeader />

        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
