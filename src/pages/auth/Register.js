import React, { useState } from "react";
import ConstantStrings from "../../constants/ConstantStrings";
import { signinWithGoogle } from "../../servers/auth/auth";
import "./auth.style.css";

const Register = () => {
  const [formValue, setFormValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (name, value) => {
    setFormValue({ ...formValue, [name]: value });
    setError({
      fullName: "",
      email: "",
      phone: "",
      password: "",
    });
  };
  const handleSubmit = (e) => {
    e?.preventDefault();
    const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]$/;
    var check = false;
    const checkArr = Object.keys(formValue);
    const keyErrorArr = Object.keys(error);
    var objError = { ...error };
    for (let index = 0; index < checkArr.length; index++) {
      if (
        keyErrorArr.includes(checkArr[index]) &&
        formValue[checkArr[index]] === ""
      ) {
        check = true;
        objError = {
          ...objError,
          [checkArr[index]]: ConstantStrings.DO_NOT_LEAVE_BLANK,
        };
      }
    }
    if (check) {
      setError(objError);
    } else if (regexEmail.test(formValue.email) === false) {
      setError({ ...error, email: "Sai dinh dang email" });
    } else if (regexPhone.test(formValue.phone) === false) {
      setError({ ...error, phone: "SDT khong hop le" });
    } else {
      console.log("ok");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" hidden />
        <div className="flex flex-col gap-8 p-8">
          <h2 className="uppercase text-4xl font-bold text-left w-fit inline-block">
            Tạo tài khoản
          </h2>
          <div className="flex flex-col gap-10">
            <div className="relative w-full">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formValue.fullName}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                aria-describedby="fullName_text"
                className="block font-bold transition ease-in-out rounded-t-lg pb-0 pt-5 w-full text-xl text-gray-900  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <p className="text-md text-red-500 text-left">
                {error?.fullName}
              </p>
              <label
                htmlFor="fullName"
                className="absolute font-bold text-xl text-gray-500 dark:text-gray-400 transition ease-in-out duration-500 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Họ và tên
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                id="phone"
                name="phone"
                value={formValue.phone}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                aria-describedby="phone_text"
                className="block font-bold transition ease-in-out rounded-t-lg pb-0 pt-5 w-full text-xl text-gray-900  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <p className="text-md text-red-500 text-left">{error?.phone}</p>
              <label
                htmlFor="phone"
                className="absolute font-bold text-xl text-gray-500 dark:text-gray-400 transition ease-in-out duration-500 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                SDT
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="text"
                id="email"
                name="email"
                value={formValue.email}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                aria-describedby="email_text"
                className="block font-bold transition ease-in-out rounded-t-lg pb-0 pt-5 w-full text-xl text-gray-900  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <p className="text-md text-red-500 text-left">{error?.email}</p>
              <label
                htmlFor="email"
                className="absolute font-bold text-xl text-gray-500 dark:text-gray-400 transition ease-in-out duration-500 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Email
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="password"
                id="password"
                name="password"
                value={formValue.password}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                aria-describedby="password_text"
                className="block font-bold transition ease-in-out rounded-t-lg pb-0 pt-5 w-full text-xl text-gray-900  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
              />
              <p className="text-md text-red-500 text-left">
                {error?.password}
              </p>
              <label
                htmlFor="password"
                className="absolute font-bold text-xl text-gray-500 dark:text-gray-400 transition ease-in-out duration-500 transform -translate-y-8 scale-75 top-4 z-10 origin-[0] left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Mật khẩu
              </label>
            </div>
            <div className="w-full">
              <button
                type="submit"
                onClick={handleSubmit}
                className="relative w-full shadow-none inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 text-purple-500 hover:text-white dark:text-white  focus:outline-none"
              >
                <span className="relative w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full text-2xl uppercase  group-hover:bg-opacity-0 font-bold">
                  Đăng kí
                </span>
              </button>
              <button
              onClick={signinWithGoogle}
                type="button"
                className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
