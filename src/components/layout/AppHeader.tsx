import clsx from "clsx";
import React from "react";

const AppHeader = () => {
  return (
    <>
      <div className="fixed top-10 left-10 p-3 px-4 bg-white rounded-lg">
        <a href="/about">
          <span className="">이동규</span>
        </a>
      </div>

      <div
        className={clsx(
          "fixed top-[10%] right-[20%]",
          "p-4 px-6",
          "bg-slate-50",
          "rounded-xl"
        )}
      >
        <ul className="flex flex-col space-y-[1em]">
          <a href="/posts">
            <li>포스트</li>
          </a>
          <a href="/works">
            <li>작업</li>
          </a>
          <a href="/career">
            <li>이력</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default AppHeader;
