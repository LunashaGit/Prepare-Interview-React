import { useState, useCallback } from "react";

type Data = {
  word: string;
  score: number;
};

const url = "https://api.datamuse.com/words?rel_syn=";

export const GetSynonyms = () => {
  const [data, setData] = useState<Data[]>([]);
  const [word, setWord] = useState<string>("");

  const datamuseCall = async (word: string) => {
    const response = await fetch(url + word);
    const data = await response.json();
    console.log(data);
    return data;
  };

  const addWord = useCallback(
    (item: Data) => {
      setWord(item.word), datamuseCall(item.word).then((data) => setData(data));
    },
    [data]
  );

  return { data, word, setWord, addWord, datamuseCall, setData };
};
