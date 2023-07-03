import React from "react";
import "./auth.style.css";

const Register = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" hidden />
        <div className="flex flex-col gap-8 items-center">
          <h2 className="uppercase text-4xl font-bold">Tạo tài khoản</h2>
          <div className="relative">
            <input className="border-b focus:outline-none focus:border-b-2 focus:border-red-600 input" type="text" />
            <label for="fullName" className="absolute left-0 top-0 label transition ease-in-out duration-500">Họ và Tên</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
