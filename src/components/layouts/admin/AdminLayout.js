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
          {/* <main className="flex-1 pb-8">
            <div className="flex items-center justify-between py-7 px-10">
              <div>
                <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
                  Products
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  Let's grow to your business! Create your product and upload
                  here
                </p>
              </div>
              <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                <span className="text-sm font-semibold tracking-wide">
                  Create Item
                </span>
              </button>
            </div>

            <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
              <li v-for="item in status">
                <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group">
                  <span className="font-medium"> </span>
                  <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                </button>
              </li>
            </ul>

            <table className="w-full border-b border-gray-200">
              <thead>
                <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                  <td className="pl-10">
                    <div className="flex items-center gap-x-4">
                      <input
                        type="checkbox"
                        className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                        indeterminate="indeterminate"
                      />
                      <span>Product Name</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">Pricing</td>
                  <td className="py-4 px-4 text-center">Downloaded</td>
                  <td className="py-4 px-4 text-center">Rating</td>
                  <td className="py-4 px-4 text-center">Platforms</td>
                  <td className="py-4 pr-10 pl-4 text-center"></td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in products"
                  className="hover:bg-gray-100 transition-colors group"
                >
                  <td className="flex gap-x-4 items-center py-4 pl-10">
                    <input
                      type="checkbox"
                      className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    />
                    <img
                      alt=""
                      className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                    />
                    <div>
                      <a
                        href="#"
                        className="text-lg font-semibold text-gray-700"
                      ></a>
                      <div className="font-medium text-gray-400"></div>
                    </div>
                  </td>
                  <td className="font-medium text-center"></td>
                  <td className="font-medium text-center"></td>
                  <td className="text-center">
                    <span className="font-medium"></span>
                    <span className="text-gray-400">/5</span>
                  </td>
                  <td>
                    <div className="flex gap-x-2 justify-center items-center">
                      <a
                        href="#"
                        v-for="icon in product.platformIcons"
                        className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                      ></a>
                    </div>
                  </td>
                  <td>
                    <span className="inline-block w-20 group-hover:hidden"></span>
                    <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                      <button className="p-2 hover:rounded-md hover:bg-gray-200"></button>
                      <button className="p-2 hover:rounded-md hover:bg-gray-200"></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex gap-x-2 justify-center pt-8">
              <button className="flex justify-center items-center w-8 h-8"></button>
              <button
                v-for="i in 6"
                className="flex items-center justify-center w-8 h-8 font-medium rounded-full"
              ></button>
              <button className="flex justify-center items-center w-8 h-8"></button>
            </div>
          </main> */}
        </div>
    </div>
  );
};

export default AdminLayout;
