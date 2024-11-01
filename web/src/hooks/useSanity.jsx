import { useCallback, useState } from "react";
import client from "../lib/client";

const useSanity = () => {
  const [bannerData, setBannerData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [slugData, setSlugData] = useState([]);
  const [simillareProducts, setSimillareProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBannarData = useCallback(async () => {
    try {
      setLoading(true);
      await client
        .fetch('*[_type == "banner"]')
        .then((res) => setBannerData(res))
        .catch((err) => console.log(err.message));
    } catch (err) {
      throw new Error("there is Error in Banner section");
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch products from snaity
  const fetchProductsData = useCallback(async () => {
    try {
      setLoading(true);
      await client
        .fetch('*[_type == "product"]')
        .then((res) => setProductData(res))
        .catch((err) => console.log(err.message));
    } catch (err) {
      throw new Error("there is Error in Products section");
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch Produc by it's Slug from snaity
  const fetchSlugData = useCallback(async (slug) => {
    try {
      setLoading(true);
      await client
        .fetch(`*[_type == "product" && slug.current == '${slug}']`)
        .then((res) => setSlugData(res))
        .catch((err) => console.log(err.message));
    } catch (err) {
      throw new Error("there is Error in Slug section");
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch simmillar Products from snaity
  const fetchSimillarProducts = useCallback(async (cat) => {
    try {
      setLoading(true);
      await client
        .fetch(`*[_type == "product" && category == '${cat}']`)
        .then((res) => {
          setSimillareProducts(res);
        })
        .catch((err) => console.log(err.message));
    } catch (err) {
      throw new Error("there is Error in Slug section");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    fetchBannarData,
    fetchProductsData,
    fetchSlugData: (slug) => fetchSlugData(slug),
    fetchSimillarProducts: (cat) => fetchSimillarProducts(cat),
    bannerData,
    productData,
    slugData,
    simillareProducts,
    loading,
  };
};

export default useSanity;
