/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      
        <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
          <HeaderAdmin/>
          <main>
            <Outlet/>
          </main>
          
        </div>
    </div>
  );
};

export default AdminLayout;
