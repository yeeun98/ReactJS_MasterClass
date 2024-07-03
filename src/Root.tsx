import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";

function Root() {
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