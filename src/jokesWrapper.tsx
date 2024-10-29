import { useEffect, useState } from "react";
import { fetchUsers } from "./api";
import { Joke } from "./types/jokeType";
import { JokesList } from "./components/jokesList";

export const JokesWrapper = () => {
  const [allJokes, setAllUsers] = useState<Joke[]>([]);

  useEffect(() => {
    async function fetchMyUsers() {
      const fetchedUsers = await fetchUsers();
      setAllUsers(fetchedUsers);
    }

    fetchMyUsers();
  }, []);

  return <JokesList jokes={allJokes} />;
};
