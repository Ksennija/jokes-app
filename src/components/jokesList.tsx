//import { useState } from "react";
import { useState } from "react";
import { Joke } from "../types/jokeType";
import { JokeItem } from "./jokeItem";

import "./jokesList.css";

export type Props = {
  jokes: Joke[];
};
export const JokesList = ({ jokes }: Props) => {
  return (
    <ul className="jokes-list">
      {jokes.map((j) => {
        return <JokeItem key={j.id} joke={j}></JokeItem>;
      })}
    </ul>
  );
};
