import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-row items-center mx-auto w-4/5 h-screen">
      <div className="w-1/2 h-full">
        <img className="h-full"
          src="https://static.kfcvietnam.com.vn/images/web/signin/lg/register.jpg?v=LK8EV4"
          alt=""
        />
      </div>
      <div className="w-1/2 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
