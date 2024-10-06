import clsx from "clsx";
import React from "react";

const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "p-[2em] py-[1.2em] break-keep leading-[2em] h-full",
        "!bg-slate-50",
        "overflow-y-scroll",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
