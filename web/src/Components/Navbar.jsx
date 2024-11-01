import { Link } from "react-router-dom";
import { useStateContext } from "../Context/StateContext";

const Navbar = () => {
  const { showCartSection } = useStateContext();
  const localTotalQnt = window.localStorage.getItem("total-qnt") || 0;

  return (
    <div className="bg-regal-blue ">
      <nav
        className="flex items-center justify-between mx-auto 	py-4"
        style={{ width: "91%" }}
      >
        <Link to="/">
          <h1 className="text-3xl font-bold text-[#088178]">Buy-Li</h1>
        </Link>
        <span className=" relative" role="button">
          <span
            className="absolute -top-1 -right-2 z-10 bg-red-600 text-white text-xs font-semibold w-5 h-5 rounded-full text-center cursor-pointer"
            style={{ lineHeight: "20px" }}
            onClick={showCartSection}
          >
            {localTotalQnt}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="  size-6 hover:size-7 transition-transform cursor-pointer "
            onClick={showCartSection}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
