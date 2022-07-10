import { useParams } from "react-router-dom";
import { IUser } from "../utils/interfaces";

const UserDetails = ({ users }: { users: IUser[] }) => {
  const params = useParams();
  const { _id } = params;

  return (
    <div>
      {users
        .filter((user) => String(user._id) === _id)
        .map((user) => (
          <div key={user._id}>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
          </div>
        ))}
    </div>
  );
};
export default UserDetails;
