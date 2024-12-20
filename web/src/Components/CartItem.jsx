import { urlFor } from "../lib/client";
import { useStateContext } from "../Context/StateContext";

const CartItem = ({ cartInfo }) => {
  const { onRemove, incCartProduct, decCartProduct } = useStateContext();

  return (
    <div className="box flex items-start my-6">
      <img
        src={urlFor(cartInfo.image[0].asset._ref)}
        className=" h-28 rounded-lg me-4"
        alt=""
      />
      <div className="w-1/2 flex  justify-between flex-1">
        <div className="flex flex-col justify-between h-28 py-2 ">
          <h2 className="text- font-semibold text-[#088178]">
            {cartInfo.name}
          </h2>
          <p className="flex items-center ">
            <span
              className="border-2 border-slate-400 px-2 py-1 text-red-600 text-xl font-bold cursor-pointer transition-colors hover:bg-red-600 hover:text-white"
              onClick={() => decCartProduct(cartInfo)}
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
              {cartInfo.quantity}
            </span>
            <span
              className="border-2 border-slate-400 px-2 py-1 text-red-600 text-xl font-bold cursor-pointer transition-colors hover:bg-red-600 hover:text-white"
              onClick={() => incCartProduct(cartInfo)}
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
        <div
          className="h-28 flex flex-col justify-between py-2"
          style={{ width: "10%" }}
        >
          <span className="text- font-semibold text-[#088178]">
            ${cartInfo.price}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-red-600 cursor-pointer "
            onClick={() => onRemove(cartInfo)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
