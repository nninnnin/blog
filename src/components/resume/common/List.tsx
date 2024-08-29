import React from "react";

const List = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ul className="list">{children}</ul>;
};

export default List;
