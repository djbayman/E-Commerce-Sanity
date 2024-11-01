import { useEffect } from "react";
import MayLike from "../Components/MayLike";
import Slug from "../Components/Slug";
import { useParams } from "react-router-dom";
import SlugLoader from "../Components/SlugLoader";
import useSanity from "../hooks/useSanity";

const ProductDetails = () => {
  const { slug } = useParams();

  const {
    simillareProducts,
    loading,
    slugData,
    fetchSlugData,
    fetchSimillarProducts,
  } = useSanity();

  let cat = slugData[0]?.category;

  // fetching Product By its slug
  useEffect(() => {
    fetchSlugData(slug).then(() => {
      fetchSimillarProducts(cat);
    });
  }, [slug, cat]);

  if (loading) return <SlugLoader />;

  return (
    <div className="w-11/12 mx-auto">
      <Slug product={slugData.length && slugData[0]} />
      <MayLike simillareProducts={simillareProducts && simillareProducts} />
    </div>
  );
};

export default ProductDetails;
