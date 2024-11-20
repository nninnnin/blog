import React from "react";

const ListView = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ul className="w-full h-full space-y-[6px]">
      {children}
    </ul>
  );
};

export default ListView;
