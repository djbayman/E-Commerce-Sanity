import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../Context/StateContext";
import runFireworks from "../lib/utils";

const OnSuccess = () => {
  const { setCartItems, setTotalPrice, setTotalQnt } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQnt(0);
    runFireworks();
  }, []);

  return (
    <div
      className=" flex items-center justify-center"
      style={{ height: "calc(100vh - 24.5vh)" }}
    >
      <div className="w-2/5 bg-regal-blue py-8 px-10 my-10 rounded-2xl text-center">
        <p className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 mx-auto text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <h2 className="text-3xl font-semibold text-[#088178] my-4">
          Thank you for your order!
        </h2>
        <p className="font-semibold">Check your email inbox for the receipt.</p>
        <Link to="/">
          <button className="bg-red-600 text-white w-1/2 py-3 rounded-lg mt-4 font-semibold">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnSuccess;
