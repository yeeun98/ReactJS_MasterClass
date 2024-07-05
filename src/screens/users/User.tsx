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
  const {userId} = useParams();

  return (
    <div>
      <h1>User</h1>
      <Link to="followers">See Followers</Link>
      <Outlet context={{ userName: userList[useParams.userId] }}/>
    </div>
  );
}

export default User;