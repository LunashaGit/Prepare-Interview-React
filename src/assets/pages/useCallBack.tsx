import { useState, useCallback } from "react";
import CallBackTodos from "../components/callBackTodos";
export default function CallBack() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = useCallback(() => {
    const newTodos = [...todos, "New Todo"];
    setTodos(newTodos);
  }, [todos]);

  return (
    <div>
      <CallBackTodos todos={todos} addTodo={addTodo} />
    </div>
  );
}
