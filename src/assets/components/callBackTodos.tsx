type Props = {
  todos: string[];
  addTodo: Function;
};

export default function CallBackTodos(props: Props) {
  return (
    <div>
      <button onClick={() => props.addTodo()}>Add Todo</button>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
