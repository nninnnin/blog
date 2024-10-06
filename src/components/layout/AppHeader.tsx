import clsx from "clsx";
import React from "react";

const AppHeader = () => {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0",
        "h-[10dvh] w-full bg-slate-100",
        "flex items-center",
        "text-[20px]",
        "px-[2vw]",
        "pb-[5px]"
      )}
    >
      <a className="mr-[32vw]" href="/about">
        <span className="">Lee Dong Gyu</span>
      </a>

      <ul className="flex space-x-[30px]">
        <a href="/posts">
          <li>Posts</li>
        </a>
        <a href="/works">
          <li>Works</li>
        </a>
        <a href="/career">
          <li>Career</li>
        </a>
      </ul>
    </div>
  );
};

export default AppHeader;
