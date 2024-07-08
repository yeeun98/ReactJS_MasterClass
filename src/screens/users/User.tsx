// import { useEffect } from "react";
// import { Link, Outlet, useParams } from "react-router-dom";

// export const userList = [
//   {
//     id: 1,
//     name: 'yeeun'
//   },
//   {
//     id: 2,
//     name: 'haeun'
//   },
// ];

// function User() {
//   const { userId } = useParams<string>();

//   return (
//     <div>
//       <h1>User</h1>
//       <Link to="followers">See Followers</Link>
//       <Outlet context={{ userName: userList[ userId ? (Number(userId) - 1) : 0 ].name }}/>
//     </div>
//   );
// }

// export default User;

import { useEffect, useState } from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

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
  const { userId } = useParams<string>();
  const [ userName, setUserName ] = useState<string>("");
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.get('isCeleb'));
  // setTimeout(()=> setSearchParams({type: '1'}), 2000);

  useEffect(() => {
    const userName = userId ? userList.filter((v) => v.id === Number(userId))[0].name : '';
    setUserName(userName);
  }, [userId]);

  return (
    <div>
      <h1>User</h1>
      <Link to="followers">See Followers</Link>
      <Outlet context={{ userName }} />
    </div>
  );
}

export default User;