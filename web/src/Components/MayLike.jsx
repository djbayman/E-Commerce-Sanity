import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

const MayLike = ({ allProducts }) => {
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl text-[#088178] font-bold">
        You may also Like
      </h2>
      <div className="slide-container relative overflow-hidden whitespace-nowrap">
        <div
          className="inline-block  "
          style={{
            animation: "30s slide infinite linear",
          }}
        >
          <div className="flex items-center  mt-10 ">
            {allProducts &&
              allProducts.slice(0, 5).map((product, ind) => (
                <div
                  key={ind}
                  className={`box w-1/5 h-64 bg-regal-blue rounded-lg hover:scale-105 transition-transform cursor-pointer mx-6
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
          className="inline-block"
          style={{
            animation: "30s slide infinite linear",
          }}
        >
          <div className="flex items-center  mt-10 ">
            {allProducts &&
              allProducts.slice(0, 5).map((product, ind) => (
                <div
                  key={ind}
                  className={`box w-1/5 h-64 bg-regal-blue rounded-lg hover:scale-105 transition-transform cursor-pointer mx-6
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
