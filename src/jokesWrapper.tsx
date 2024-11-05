import { useEffect, useState, useRef } from "react";
import { fetchJokes } from "./api";
import { Joke } from "./types/Joke";
import { JokesList } from "./components/JokesList";

import styles from "./JokesWrapper.module.css";

export const JokesWrapper = () => {
  const jokesAmmount = 4;
  const [randomJokes, setRandomJokes] = useState<Joke[]>([]);

  // This constant helps to avoid double reload of the page in the development mode
  const renderAfterCalled = useRef(false);

  const [needsRefresh, setNeedsRefresh] = useState(false);

  useEffect(() => {
    async function fetchRandomeJokes() {
      const fetchedJokes = await fetchJokes();
      setRandomJokes(getRandomJokes(fetchedJokes, jokesAmmount));
    }

    if (!renderAfterCalled.current) {
      fetchRandomeJokes();
      renderAfterCalled.current = true;
      setNeedsRefresh(false);
    }
  }, [needsRefresh]);

  const handleReloadClick = () => {
    renderAfterCalled.current = false;
    setNeedsRefresh(true);
  };

  return (
    <>
      <div className={styles.btnGroup}>
        <button className={styles.left + " " + styles.selected}>
          New jokes
        </button>
        <button className={styles.right}>Library</button>
      </div>
      <JokesList jokes={randomJokes} />
      <button className={styles.btnReload} onClick={handleReloadClick}>
        <img
          className={styles.icon}
          alt="Reload"
          src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"
        />
      </button>
    </>
  );
};

const getRandomJokes = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
