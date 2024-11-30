"use client";

import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { PATHNAME_MAPPER } from "@/constants";

const AppContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

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
        "p-10 py-9",
        // "overflow-hidden",
        "fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",
        isAboutPage &&
          "!bg-amber-300 !text-black",
        isPostsPage &&
          "!bg-green-300 !text-black",
        isWorksPage && "!bg-sky-300 !text-black",
        isCareerPage &&
          "!bg-fuchsia-300 !text-black",
        "box-border !border-r-[4px] !border-b-[8px]"
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
        "py-[12px] px-[20px]",
        "rounded-[30px]",
        "box-border",
        "font-semibold",
        "prevent-select"
      )}
    >
      {PATHNAME_MAPPER[pathname]}
    </div>
  );
};

export default AppContainer;
