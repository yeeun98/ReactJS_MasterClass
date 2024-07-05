import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  userName: string;
}

function Followers() {
  const { userName } = useOutletContext<IFollowersContext>();

  return (
    <h1>Followers : {userName}</h1>
  );
}

export default Followers;