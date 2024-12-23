import { useMemo } from "react";

const useRound = (value, name) => {
  return useMemo(() => {
    return name === "BTC" ? value.toFixed(7) : value.toFixed(2);
  }, [value, name]);
};

export default useRound;
