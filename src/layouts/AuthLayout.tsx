import React from "react";
import bigLogo from "../assets/bigLogo.png";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-between items-center my-auto px-4 md:px-10 lg:px-20 gap-10">
      <Outlet />
      <img draggable={false} src={bigLogo} className="hidden md:block w-1/2" />
    </div>
  );
};

export default AuthLayout;
