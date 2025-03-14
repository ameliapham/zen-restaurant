import { useEffect, useState } from "react";

export function useAsync<T>(getData: () => Promise<T>): T | undefined {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const data = await getData();

      setData(data);
    })();
  }, []);

  return data;
}
