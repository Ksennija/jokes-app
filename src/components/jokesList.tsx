import { Joke } from "../types/jokeType";

export type Props = {
  jokes: Joke[];
};
export const JokesList = ({ jokes }: Props) => {
  return (
    <ul>
      {jokes.map((joke) => {
        return (
          <li key={joke.id} className="joke-item">
            <span>{joke.type}</span>
            <br />
            <span>{joke.setup}</span>
            <br />
            <span>{joke.punchline}</span>
          </li>
        );
      })}
    </ul>
  );
};
