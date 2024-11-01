import bannerBtn from "../assets/button.png";
import video from "../assets/07eb73582ca5516bda4045e5a0ea8f69_iKVcP0FN.mp4";

const Banner = ({ bannerData }) => {
  // go to Products section
  const handleShopNowClick = () => {
    window.scrollTo({
      top: "600",
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        className=" bg-regal-blue mx-auto h-[38rem]  md:h-[24rem] my-16 rounded-2xl flex flex-col-reverse md:flex-row md:items-center justify-between flex-wrap-reverse"
        style={{ width: "91%" }}
      >
        <div className="md:ms-10 py-5 text-center md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">{bannerData?.midText}</h3>
          <h1 className="text-4xl font-bold ">{bannerData?.largeText1}</h1>
          <h2 className="text-4xl text-[#088178] font-bold">
            {bannerData?.largeText2}
          </h2>
          <p className="text-slate-400 font-semibold  mt-6">
            {bannerData?.smallText}
          </p>
          <button
            className=" text-lg font-semibold hover:text-[#088178] transition-colors my-6 w-52 h-14"
            style={{ background: `no-repeat url(${bannerBtn})` }}
            onClick={handleShopNowClick}
          >
            {bannerData?.buttonText}
          </button>
        </div>
        <div className="relative md:w-[33rem] md:h-full">
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

export default Banner;
