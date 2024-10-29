import { Joke } from "../types/jokeType";

export type Props = {
  jokes: Joke[];
};
export const JokesList = ({ jokes }: Props) => {
  const jokesAmmount = 4;

  return (
    <ul>
      {getRandomJokes(jokes, jokesAmmount).map((joke) => {
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

const getRandomJokes = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

// console.log(getRandomJokes([1, 2, 3], 2));
// console.log(getRandomJokes([1, 2, 3], 4));
