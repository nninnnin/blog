"use client";

import clsx from "clsx";
import React from "react";
import { usePathname } from "next/navigation";

const Navigator = () => {
  return (
    <div
      className={clsx(
        "fixed bottom-[5%] right-[5%]",
        "p-4 px-6",
        "bg-slate-50",
        "rounded-xl",
        "box-border"
      )}
    >
      <ul className="flex flex-col space-y-[1em]">
        <Navigator.ListItem
          href="/posts"
          activeStyle="text-[deeppink]"
        >
          포스트
        </Navigator.ListItem>

        <Navigator.ListItem
          href="/works"
          activeStyle="text-[deeppink]"
        >
          작업
        </Navigator.ListItem>

        <Navigator.ListItem
          href="/career"
          activeStyle="text-[deeppink]"
        >
          이력
        </Navigator.ListItem>
      </ul>
    </div>
  );
};

Navigator.List = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ul className="flex flex-col space-y-[1em]">
      {children}
    </ul>
  );
};

Navigator.ListItem = ({
  children,
  href,
  activeStyle,
}: {
  children: React.ReactNode;
  href: string;
  activeStyle?: string;
}) => {
  const pathname = usePathname();

  const isNavigating = pathname.includes(href);

  return (
    <li
      className={clsx(
        "font-semibold",
        Boolean(activeStyle) &&
          isNavigating &&
          activeStyle,
        isNavigating
          ? "hover:opacity-100"
          : "hover:opacity-70",
        "prevent-select"
      )}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

Navigator.Namebox = () => {
  return (
    <div
      className={clsx(
        "fixed top-10 left-10 p-3 px-4 bg-white rounded-lg",
        "box-border"
      )}
    >
      <Navigator.ListItem
        href="/about"
        activeStyle="text-[lightslategrey]"
      >
        이동규
      </Navigator.ListItem>
    </div>
  );
};

export default Navigator;
