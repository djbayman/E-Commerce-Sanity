import { useEffect } from "react";
import MayLike from "../Components/MayLike";
import Slug from "../Components/Slug";
import { useParams } from "react-router-dom";
import SlugLoader from "../Components/SlugLoader";
import useSanity from "../hooks/useSanity";

const ProductDetails = () => {
  const { slug } = useParams();

  const { productData, loading, slugData, fetchSlugData, fetchProductsData } =
    useSanity();

  useEffect(() => {
    fetchSlugData(slug);
    fetchProductsData();
  }, [slug, fetchProductsData]);

  if (loading) return <SlugLoader />;

  return (
    <div className="w-11/12 mx-auto">
      <Slug product={slugData.length && slugData[0]} />
      <MayLike allProducts={productData && productData} />
    </div>
  );
};

export default ProductDetails;
