import { v4 as uuid } from "uuid";
import { useMemo } from "react";

const useListWithKey = <T extends {}>(
  items: T[]
) => {
  return useMemo(
    () =>
      items.map((item) => ({
        key: uuid(),
        item,
      })),
    [items]
  );
};

export default useListWithKey;
