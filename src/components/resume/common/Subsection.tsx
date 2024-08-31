import React from "react";

const Subsection = ({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h3 className="text-[1.2em] font-semibold">
        {header}
      </h3>

      <div className="pl-[2em] pt-[1em] space-y-[1.5em]">
        {children}
      </div>
    </div>
  );
};

export default Subsection;
