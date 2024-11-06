import { Joke } from "../types/Joke";
import { JokeItem } from "./JokeItem";

import styles from "./JokesList.module.css";

export type Props = {
  jokes: Joke[];
  onBookmarked: (id: Joke["id"]) => void;
  showBookmarked: boolean;
};

export const JokesList: React.FC<Props> = ({
  jokes,
  onBookmarked,
  showBookmarked,
}) => {
  return (
    <ul className={styles.jokesList}>
      {jokes.map((joke) => {
        return (
          <JokeItem
            key={joke.id}
            joke={joke}
            onBookmarked={onBookmarked}
            showBookmarked={showBookmarked}
          />
        );
      })}
    </ul>
  );
};
