import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import AppHeader from "@/components/layout/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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

        <RootLayout.AppContainer>
          {children}
        </RootLayout.AppContainer>
      </body>
    </html>
  );
}

RootLayout.AppContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-[90dvh] mt-[10dvh] w-[50vw] min-w-[700px] mx-auto text-[20px]">
      {children}
    </div>
  );
};
