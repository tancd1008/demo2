/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderClient from "./HeaderClient";

const ClientLayout = () => {
  return (
    <div>
      <header>
       <HeaderClient/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  );
};

export default ClientLayout;
