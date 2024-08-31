import React from "react";

const Topic = ({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className="mb-[0.5em] font-semibold">
        {header}
      </h3>
      {children}
    </div>
  );
};

export default Topic;
