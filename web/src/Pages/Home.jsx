import Products from "../Components/Products";
import Discount from "../Components/Discount";
import Banner from "../Components/Banner";
import Loader from "../Components/Loader";
import useSanity from "../hooks/useSanity";
import { useEffect } from "react";

const Home = () => {
  const {
    bannerData,
    productData,
    loading,
    fetchBannarData,
    fetchProductsData,
  } = useSanity();

  // fetching Banner && Products Data
  useEffect(() => {
    fetchBannarData();
    fetchProductsData();
  }, [fetchBannarData, fetchProductsData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Banner bannerData={bannerData.length && bannerData[0]} />
          <Products productData={productData.length && productData} />
          <Discount />
        </>
      )}
    </>
  );
};

export default Home;
