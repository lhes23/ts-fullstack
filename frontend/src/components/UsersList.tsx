import { Link } from "react-router-dom";
import { IUser } from "../utils/interfaces";

type Props = {
  users: IUser[];
};
const UsersList = ({ users }: Props) => {
  return (
    <>
      {users?.map((user) => (
        <li key={user._id}>
          <Link to={`/detail/${user._id}`}>{user.name}</Link>
        </li>
      ))}
    </>
  );
};
export default UsersList;
