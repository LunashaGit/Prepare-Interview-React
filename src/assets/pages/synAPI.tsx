import Li from "../components/synAPIComponent/li";
import { GetSynonyms } from "../hooks/synAPIHook";
export default function SynAPI() {
  const { data, setWord, addWord, setData, word, datamuseCall } = GetSynonyms();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          datamuseCall(word).then((data) => setData(data));
        }}
      >
        <input value={word} onChange={(e) => setWord(e.target.value)} />
        <button>Search</button>
      </form>

      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
      >
        {data.map((item, index) => (
          <Li
            word={item.word}
            onClick={() => {
              addWord(item);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
