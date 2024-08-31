import React from "react";

const List = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ul className="list space-y-[0.5em]">
      {children}
    </ul>
  );
};

List.Item = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <li>{children}</li>;
};

export default List;
