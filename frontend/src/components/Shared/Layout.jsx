import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";
import SideBar from "./SideBar";
function Layout() {


  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <div className="page-wrapper">
          <div className="side-bar">
            <SideBar />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;