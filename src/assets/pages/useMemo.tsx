import { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <button onClick={addCount}>Count 1: {count}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
    </div>
  );
}
