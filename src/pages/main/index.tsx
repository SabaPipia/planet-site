import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import "./style.scss";

function Main() {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
