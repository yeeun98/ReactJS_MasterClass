import { Link, Outlet, useParams } from "react-router-dom";

export const userList = [
  {
    id: 1,
    name: 'yeeun'
  },
  {
    id: 2,
    name: 'haeun'
  },
];

function User() {
  const params = useParams();

  return (
    <div>
      <h1>User</h1>
      <Link to="followers">See Followers</Link>
      <Outlet />
    </div>
  );
}

export default User;