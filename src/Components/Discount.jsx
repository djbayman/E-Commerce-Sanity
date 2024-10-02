import video from "../assets/07eb73582ca5516bda4045e5a0ea8f69_pIfE2B1J.mp4";

const Discount = () => {
  return (
    <div>
      <div
        className=" bg-regal-blue mx-auto h-72 my-16 rounded-2xl flex items-center justify-between"
        style={{ width: "98%" }}
      >
        <div className="ms-10">
          <h1 className="text-4xl font-bold ">Get Discount up to 70%</h1>
          <p className="text-slate-900 font-semibold  text-lg">
            of All the Hoodies
          </p>
          <button className=" font-semibold px-3 py-2 rounded-md  my-6 bg-[#088178] text-white hover:bg-white hover:text-[#088178] transition-colors">
            buy it Now
          </button>
        </div>
        <div className="relative w-1/2">
          <video
            className="absolute right-0 rounded-e-2xl "
            autoPlay
            muted
            loop
            style={{ top: "-145px" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Discount;
