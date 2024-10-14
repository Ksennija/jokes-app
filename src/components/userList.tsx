import { User } from "../types/userType";

export type Props = {
  users: User[];
};
export const UserList = ({ users }: Props) => {
  return (
    <ul>
      {users.map((u) => {
        return (
          <li key={u.id} className="user-item">
            Username: <span>{u.username}</span>
            <br />
            Ammount of pets: <span>{u.ammountOfPets}</span>
            <br />
            {/* <button onClick={handleUserDelete}>Delete</button> */}
          </li>
        );
      })}
    </ul>
  );
};
