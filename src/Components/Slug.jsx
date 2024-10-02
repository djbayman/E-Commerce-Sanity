import { useState } from "react";
import { urlFor } from "../lib/client";
import { useStateContext } from "../Context/StateContext";

const Slug = ({ product }) => {
  // const [qnt, setQnt] = useState(1);
  const { incQnt, decQnt, qnt, onAdd } = useStateContext();

  return (
    <div className="flex items-start gap-10 my-20 ">
      {product && (
        <div className="">
          <img
            src={urlFor(product.image[0].asset._ref)}
            className="w-96 h-96 rounded-lg"
            alt=""
          />
        </div>
      )}
      <div className="w-1/2 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold text-[#088178]">
          {product.name}
        </h1>
        <div className="flex items-center gap-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-yellow-500"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
        <span className="font-semibold text-lg text-[#088178]">Details:</span>
        <p className="text-gray-600 ">{product.details}</p>
        <span className="text-2xl font-bold text-[#088178]">
          ${product.price}
        </span>
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-[#088178]">Quantity: </h3>
          <p className="flex items-center ">
            <span
              className="border-2 border-slate-400 px-2 py-1 text-red-600 text-xl font-bold cursor-pointer transition-colors hover:bg-red-600 hover:text-white"
              onClick={decQnt}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span
              className="border-y-2 border-slate-400 px-4 font-semibold"
              style={{ paddingTop: "2px", paddingBottom: "2px" }}
            >
              {qnt}
            </span>
            <span
              className="border-2 border-slate-400 px-2 py-1 text-red-600 text-xl font-bold cursor-pointer transition-colors hover:bg-red-600 hover:text-white"
              onClick={incQnt}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
        </div>
        <div className="flex items-center gap-5 mt-6">
          <button
            className="w-52 py-3 font-semibold text-[#088178] border-2 border-[#088178] transition-transform hover:scale-110 rounded-md"
            onClick={() => onAdd(product, qnt)}
          >
            Add to cart
          </button>
          <button className="w-52 py-3 font-semibold text-white bg-[#088178] border-2 border-[#088178] transition-transform hover:scale-110 rounded-md">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slug;
