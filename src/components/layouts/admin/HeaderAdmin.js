import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <div>
         <aside className="py-6 px-10 w-60 border-r border-gray-300 min-h-full">
            {/* <img src="/img/logo.png" alt="" className="w-28" /> */}
            <h1 className=" text-amber-400 text-2xl font-bold ">ATPOST</h1>
            <ul v-for="group in sidebar" className="flex flex-col gap-y-6 pt-20">
              <li v-for="item in group">
                <Link
                  to="#"
                  className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                >
                  <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li v-for="item in group">
                <Link
                  to="#"
                  className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                >
                  <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                  <span>Sản phẩm</span>
                </Link>
              </li>
              <li v-for="item in group">
                <Link
                  to="#"
                  className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                >
                  <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                  <span>Hóa đơn</span>
                </Link>
              </li>
              <li v-for="item in group">
                <Link
                  to="#"
                  className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                >
                  <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                  <span>Tài khoản</span>
                </Link>
              </li>
            </ul>
          </aside>
    </div>
  )
}

export default HeaderAdmin