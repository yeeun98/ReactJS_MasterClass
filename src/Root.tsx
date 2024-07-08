import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      <Header />

      <hr />

      <Outlet />

      <hr />

      <footer>
        footer
      </footer>
    </div>
  );
}

export default Root;