import React from "react";

const List = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ul className="list">{children}</ul>;
};

List.Item = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <li>{children}</li>;
};

export default List;
