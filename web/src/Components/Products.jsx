import { urlFor } from "../lib/client";
import { Link } from "react-router-dom";

const Products = ({ productData }) => {
  return (
    <section className="mx-auto my-20" style={{ width: "91%" }}>
      <h2 className="text-center text-4xl text-[#088178] font-bold">
        Best Seller Products
      </h2>
      <p className="text-center text-xl font-medium ">
        collection of the winter
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-10 ">
        {productData &&
          productData?.map((box, ind) => (
            <div
              key={ind}
              className={`box h-80 bg-regal-blue rounded-lg hover:scale-105 transition-transform cursor-pointer
                  `}
            >
              <Link to={`/product/${box.slug.current}`}>
                <img
                  src={urlFor(box.image[0].asset._ref)}
                  className="h-3/4 w-full rounded-t-lg"
                  alt={box.name}
                />
                <p className="text-lg font-semibold my-2 ps-3">{box?.name}</p>
                <span className="text-lg font-bold ps-3 text-[#088178]">
                  $ {box?.price}
                </span>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Products;
