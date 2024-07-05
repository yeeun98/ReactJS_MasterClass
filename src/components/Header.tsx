import { Link, useNavigate } from "react-router-dom";
import { userList } from "../screens/users/User";

function Header() {
  const navigate = useNavigate();
  /**
   * Link를 이용해 router 이동도 가능하지만
   * useNavigate를 통해 path로 이동도 가능하다.
   */
  const onAboutClick = () => {
    navigate("/about");
  };

  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
        {
          userList.map((user) => (
            <li key={user.id}>
              <Link to={`user/${user.id}`}>{user.name}</Link>
            </li>
          ))
        }
      </ul>
    </header>
  )
}

export default Header;