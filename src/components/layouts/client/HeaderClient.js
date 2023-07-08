/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const HeaderClient = () => {
  const categories = [
    {
      id: 1,
      name: "Buger",
      href: "/",
    },
    {
      id: 2,
      name: "Bánh mì",
      href: "/products",
    },
  ];
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>
        <h1>ATPOST</h1>
      </div>
      <nav className="">
        <ul className="flex item-center justify-center">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={category.href}
                className="block py-2 pr-4 pl-3 text-gray-700  hover:text-yellow-500 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Link
          to="/cart"
          data-dropdown-toggle="dropdownDelay"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  );
};

export default HeaderClient;
