import React from "react";

import List from "@/components/resume/common/List";
import Topic from "@/components/resume/common/Topic";
import useListWithKey from "@/hooks/useListWithKey";

const Project = ({
  header,
  items,
}: {
  header: string;
  items: string[];
}) => {
  const itemsWithKey = useListWithKey(items);

  return (
    <Topic header={header}>
      <List>
        {itemsWithKey.map(({ key, item }) => {
          return <li key={key}>{item}</li>;
        })}
      </List>
    </Topic>
  );
};

export default Project;
