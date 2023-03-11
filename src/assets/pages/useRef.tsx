import { useRef, useState, useEffect } from "react";

export default function UseRef() {
  const [name, setName] = useState<string>("");
  const renderCount = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevName = useRef<string>("");
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  );
}
