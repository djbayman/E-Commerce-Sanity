import { Link } from "react-router-dom";
import video from "../assets/07eb73582ca5516bda4045e5a0ea8f69_pIfE2B1J.mp4";

const Discount = () => {
  return (
    <div>
      <div
        className=" bg-regal-blue mx-auto h-96 md:h-[17rem] my-16 rounded-2xl flex flex-col-reverse md:flex-row md:items-center justify-between"
        style={{ width: "91%" }}
      >
        <div className="md:ms-10 text-center">
          <h1 className="text-2xl font-bold ">Get Discount up to 70%</h1>
          <p className="text-slate-900 font-semibold  text-lg">
            of All the Hoodies
          </p>
          <button className=" font-semibold px-3 py-2 rounded-md  my-6 bg-[#088178] text-white hover:bg-white hover:text-[#088178] transition-colors">
            <Link to="/product/black-hoodie">buy it Now</Link>
          </button>
        </div>
        <div className="relative md:w-[31rem] md:h-full">
          <video
            className="absolute right-0 w-full rounded-t-2xl md:rounded-e-2xl md:rounded-s-none"
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Discount;
