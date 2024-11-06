import { useState } from "react";
import { Joke } from "../types/Joke";
import styles from "./JokeItem.module.css";
import classnames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

export type Props = {
  joke: Joke;
  onBookmarked: (id: Joke["id"]) => void;
  showBookmarked: boolean;
};

export const JokeItem: React.FC<Props> = ({
  joke,
  onBookmarked,
  showBookmarked,
}) => {
  const [displayPunchline, setDisplayPunchline] = useState(false);

  const handleShowClick = () => {
    setDisplayPunchline(true);
  };

  const handleBookmarkClick = () => {
    onBookmarked(joke.id);
  };

  return (
    <li key={joke.id} className={styles.jokeItem}>
      <div className={styles.jokeType}>
        {joke.type}
        <FontAwesomeIcon
          icon={farBookmark}
          className={classnames(styles.bookmark, {
            [styles.toggled]: showBookmarked,
          })}
          onClick={handleBookmarkClick}
        />
        <FontAwesomeIcon
          icon={fasBookmark}
          className={classnames(styles.bookmark, {
            [styles.toggled]: !showBookmarked,
          })}
          onClick={handleBookmarkClick}
        />
      </div>
      <div className={styles.jokeSetup}>{joke.setup}</div>
      <div className={styles.jokePunchline}>
        <span
          className={classnames({
            [styles.hidden]: !displayPunchline,
            [styles.active]: displayPunchline,
          })}
        >
          {joke.punchline}
        </span>
        <button
          className={classnames(styles.btnShow, {
            [styles.hidden]: displayPunchline,
            [styles.active]: !displayPunchline,
          })}
          onClick={handleShowClick}
        >
          Show
        </button>
      </div>
    </li>
  );
};
