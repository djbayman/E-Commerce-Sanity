import React from "react";
import { Link } from "react-router-dom";

const OnCancel = () => {
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
            className="mx-auto size-8 text-red-600"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <h2 className="text-3xl font-semibold text-[#088178] my-4">
          Sorry Something Went Wrong
        </h2>
        <Link to="/">
          <button className="bg-red-600 text-white w-1/2 py-3 rounded-lg mt-4 font-semibold">
            Go Back to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnCancel;
