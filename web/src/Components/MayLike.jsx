import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

const MayLike = ({ simillareProducts }) => {
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl text-[#088178] font-bold">
        You may also Like
      </h2>
      <div
        className={`slide-container relative overflow-hidden whitespace-nowrap  mx-auto`}
        style={{ width: `${simillareProducts.length}1rem` }}
      >
        <div
          className="inline-block w-full mx-2"
          style={{
            animation: "30s slide infinite linear",
          }}
        >
          <div className="flex items-center gap-2 mt-10 ">
            {simillareProducts &&
              simillareProducts.map((product, ind) => (
                <div
                  key={ind}
                  className={`box h-64 bg-regal-blue rounded-lg hover:scale-105 transition-transform cursor-pointer w-[10rem]
                      `}
                >
                  <Link to={`/product/${product.slug.current}`}>
                    <img
                      src={urlFor(product.image[0].asset._ref)}
                      className="h-3/4 w-full rounded-t-lg"
                      alt=""
                    />

                    <p className=" font-semibold my-1 ps-3">{product.name}</p>
                    <span className="font-semibold ps-3 my-1 text-[#088178]">
                      ${product.price}
                    </span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        <div
          className="inline-block w-full mx-2"
          style={{
            animation: "30s slide infinite linear",
          }}
        >
          <div className="flex items-center gap-2 mt-10 ">
            {simillareProducts &&
              simillareProducts.map((product, ind) => (
                <div
                  key={ind}
                  className={`box h-64 bg-regal-blue rounded-lg hover:scale-105 transition-transform cursor-pointer w-[10rem]
                      `}
                >
                  <Link to={`/product/${product.slug.current}`}>
                    <img
                      src={urlFor(product.image[0].asset._ref)}
                      className="h-3/4 w-full rounded-t-lg"
                      alt=""
                    />

                    <p className=" font-semibold my-1 ps-3">{product.name}</p>
                    <span className="font-semibold ps-3 my-1 text-[#088178]">
                      ${product.price}
                    </span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MayLike;
