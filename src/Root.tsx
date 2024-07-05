import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  const [value, setValue] = useState([]);
  // console.log(value[0]['name']);

  return (
    <div>
      <Header />
      <Outlet />
      <footer>
        footer
      </footer>
    </div>
  );
}

export default Root;