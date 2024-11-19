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
        "break-keep h-full",
        "overflow-y-scroll",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
