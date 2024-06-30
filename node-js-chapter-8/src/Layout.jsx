import React from "react";
import NavMenu from "./components/NavMenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
