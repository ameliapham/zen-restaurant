import { useState, useEffect } from "react";

export function useDelay(delay: number) {
  const [isDelayed, setIsDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return { isDelayed };
}
