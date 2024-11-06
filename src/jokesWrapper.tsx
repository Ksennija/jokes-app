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

  // This constant helps to avoid double reload of the page in the development mode
  const renderAfterCalled = useRef(false);

  const [randomJokes, setRandomJokes] = useState<Joke[]>([]);
  const [bookmarkedJokes, setBookmarkedJokes] = useState<Joke[]>([]);

  const [showBookmarked, setShowBookmarked] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchAllJokes() {
      const fetchedJokes = await fetchJokes();
      setRandomJokes(getRandomJokes(fetchedJokes, jokesAmmount));
    }

    if (!renderAfterCalled.current) {
      fetchAllJokes();
      renderAfterCalled.current = true;
    }
  }, [refresh]);

  const handleReloadClick = () => {
    renderAfterCalled.current = false;
    setRefresh(!refresh);
  };

  const handleNewJokesClick = () => {
    setShowBookmarked(false);
  };

  const handleLibraryClick = () => {
    setShowBookmarked(true);
  };

  const onJokeBookmarked = (jokeId: Joke["id"]) => {
    const bookmarkedJoke = randomJokes.find((it) => it.id === jokeId)!;
    setRandomJokes(randomJokes.filter((joke) => joke.id !== jokeId));
    setBookmarkedJokes([...bookmarkedJokes, bookmarkedJoke]);
    console.log(bookmarkedJokes);
  };

  return (
    <>
      <div className={styles.btnGroup}>
        <button
          disabled={!showBookmarked}
          className={classnames(styles.left, {
            [styles.selected]: !showBookmarked,
          })}
          onClick={handleNewJokesClick}
        >
          <div className={styles.text}>New jokes</div>
        </button>
        <button
          disabled={showBookmarked}
          className={classnames(styles.right, {
            [styles.selected]: showBookmarked,
          })}
          onClick={handleLibraryClick}
        >
          <div className={styles.text}>Library</div>
        </button>
      </div>
      <JokesList
        jokes={showBookmarked ? bookmarkedJokes : randomJokes}
        onBookmarked={onJokeBookmarked}
        showBookmarked={showBookmarked}
      />
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
