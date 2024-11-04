import { useState } from "react";
import { Joke } from "../types/Joke";
import styles from "./JokeItem.module.css";

export type Props = {
  joke: Joke;
};
export const JokeItem = ({ joke }: Props) => {
  const [displayPunchline, setDisplayPunchline] = useState<boolean>(false);

  const handleShowClick = () => {
    setDisplayPunchline(true);
  };

  return (
    <li key={joke.id} className={styles.jokeItem}>
      <div className={styles.jokeType}>{joke.type}</div>
      <div className={styles.jokeSetup}>{joke.setup}</div>
      <div className={styles.jokePunchline}>
        <span className={!displayPunchline ? styles.hidden : styles.active}>
          {joke.punchline}
        </span>
        <button
          className={
            styles.btnShow +
            " " +
            (displayPunchline ? styles.hidden : styles.active)
          }
          onClick={handleShowClick}
        >
          Show
        </button>
      </div>
    </li>
  );
};
