import { useEffect, useState, useRef } from "react";
import { fetchJokes } from "./api";
import { Joke } from "./types/Joke";
import { JokesList } from "./components/JokesList";
import classnames from "classnames";
import styles from "./JokesWrapper.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

export const JokesWrapper = () => {
  const jokesAmmount = 4;
  const [randomJokes, setRandomJokes] = useState<Joke[]>([]);

  // This constant helps to avoid double reload of the page in the development mode
  const renderAfterCalled = useRef(false);

  const [needsRefresh, setNeedsRefresh] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);

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
        <button
          className={classnames(styles.left, {
            [styles.selected]: !showLibrary,
          })}
        >
          New jokes
        </button>
        <button
          className={classnames(styles.right, {
            [styles.selected]: showLibrary,
          })}
        >
          Library
        </button>
      </div>
      <JokesList jokes={randomJokes} />
      <button className={styles.btnReload} onClick={handleReloadClick}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
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
