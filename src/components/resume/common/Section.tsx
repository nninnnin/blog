import React from "react";

const Section = ({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h2 className="subheading text-blue-500">
        {header}
      </h2>

      <div className="section space-y-[1em]">
        {children}
      </div>
    </div>
  );
};

export default Section;
