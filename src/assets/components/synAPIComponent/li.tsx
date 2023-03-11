export default function Li(props: { word: string; onClick: Function }) {
  return (
    <button onClick={() => props.onClick()}>
      <li>
        <span>{props.word}</span>
      </li>
    </button>
  );
}
