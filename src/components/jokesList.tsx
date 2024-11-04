import { Joke } from "../types/Joke";
import { JokeItem } from "./JokeItem";

import styles from "./JokesList.module.css";

export type Props = {
  jokes: Joke[];
};
export const JokesList = ({ jokes }: Props) => {
  return (
    <ul className={styles.jokesList}>
      {jokes.map((j) => {
        return <JokeItem key={j.id} joke={j}></JokeItem>;
      })}
    </ul>
  );
};
