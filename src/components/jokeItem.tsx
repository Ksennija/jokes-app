//import { useState } from "react";
import { useState } from "react";
import { Joke } from "../types/jokeType";
import "./jokeItem.css";

export type Props = {
  joke: Joke;
};
export const JokeItem = ({ joke }: Props) => {
  const [displayPunchline, setDisplayPunchline] = useState<boolean>(false);

  const handleShowClick = () => {
    setDisplayPunchline(true);
  };
  return (
    <li key={joke.id} className="joke-item">
      <div className="joke-type">{joke.type}</div>
      <div className="joke-setup">{joke.setup}</div>
      <div
        className="joke-punchline"
        style={{ display: displayPunchline ? "block" : "none" }}
      >
        {joke.punchline}
      </div>
      <button
        className="button-show"
        style={{ display: !displayPunchline ? "block" : "none" }}
        onClick={handleShowClick}
      >
        Show
      </button>
    </li>
  );
};
