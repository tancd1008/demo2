import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex flex-row items-center mx-auto w-4/5'>
      <div>
        <img src='https://static.kfcvietnam.com.vn/images/web/signin/lg/register.jpg?v=LK8EV4' alt='' />
      </div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout