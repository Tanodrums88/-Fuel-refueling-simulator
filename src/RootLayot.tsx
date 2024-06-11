import React from "react";
import { Outlet } from "react-router";
import HeaderHandler from "./components/header/HeaderHandler";

function RootLayot() {
  return (
    <>
      <HeaderHandler />
      <Outlet />
    </>
  );
}

export default RootLayot;
