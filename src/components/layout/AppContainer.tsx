"use client";

import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const AppContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  console.log(pathname);

  const isAboutPage = pathname.includes("about");
  const isPostsPage = pathname.includes("posts");
  const isWorksPage = pathname.includes("works");
  const isCareerPage =
    pathname.includes("career");

  return (
    <div
      className={clsx(
        "h-[450px] w-[440px] bg-red-500 text-white",
        "mx-auto",
        "text-[20px]",
        "rounded-[20px]",
        "p-10",
        // "overflow-hidden",
        "fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
        isAboutPage &&
          "!bg-amber-300 !text-black",
        isPostsPage && "!bg-green-50 !text-black",
        isWorksPage && "!bg-sky-50 !text-black",
        isCareerPage &&
          "!bg-fuchsia-100 !text-black"
      )}
    >
      <Breadcrumb />

      {children}
    </div>
  );
};

const Breadcrumb = () => {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "absolute top-0 left-0",
        "bg-pink-100",
        "translate-y-[calc(-100%-20px)]",
        "p-4 px-7",
        "rounded-[20px]"
      )}
    >
      {pathname}
    </div>
  );
};

export default AppContainer;
