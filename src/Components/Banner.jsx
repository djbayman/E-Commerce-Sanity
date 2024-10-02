import bannerBtn from "../assets/button.png";
import video from "../assets/07eb73582ca5516bda4045e5a0ea8f69_iKVcP0FN.mp4";

const Banner = ({ bannerData }) => {
  return (
    <div>
      <div
        className=" bg-regal-blue mx-auto h-96 my-16 rounded-2xl flex items-center justify-between"
        style={{ width: "98%" }}
      >
        <div className="ms-10">
          <h3 className="text-xl font-semibold mb-4">{bannerData.midText}</h3>
          <h1 className="text-4xl font-bold ">{bannerData.largeText1}</h1>
          <h1 className="text-4xl text-[#088178] font-bold">
            {bannerData.largeText2}
          </h1>
          <p className="text-slate-400 font-semibold  mt-6">
            {bannerData.smallText}
          </p>
          <button
            className=" text-lg font-semibold hover:text-[#088178] transition-colors my-6 w-52 h-14"
            style={{ background: `no-repeat url(${bannerBtn})` }}
          >
            {bannerData.buttonText}
          </button>
        </div>
        <div className="relative w-1/2">
          <video
            className="absolute right-0 rounded-e-2xl "
            autoPlay
            muted
            loop
            style={{ top: "-192px" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Banner;
