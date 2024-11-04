import { useEffect, useState, useRef } from "react";
import { fetchJokes } from "./api";
import { Joke } from "./types/jokeType";
import { JokesList } from "./components/jokesList";

export const JokesWrapper = () => {
  const jokesAmmount = 4;
  const [allJokes, setAllJokes] = useState<Joke[]>([]);

  const renderAfterCalled = useRef(false);

  useEffect(() => {
    async function fetchRandomeJokes() {
      const fetchedJokes = await fetchJokes();
      setAllJokes(getRandomJokes(fetchedJokes, jokesAmmount));
    }
    if (!renderAfterCalled.current) {
      fetchRandomeJokes();
      renderAfterCalled.current = true;
    }
  }, []);

  return <JokesList jokes={allJokes} />;
};

const getRandomJokes = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
