import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [singleData, setSingleData] = useState(null);
  const [loadingSingleData, setLoadingSingleData] = useState(false);

  const params = useParams();

  function getProductsData() {
    setLoading(true);
    axios.get("https://dummyjson.com/products").then((resp) => {
      setData(resp?.data?.products);
      setLoading(false);
    });
  }

  function getSingleProductData() {
    setLoadingSingleData(true);
    axios
      .get(`https://dummyjson.com/products/${params.productId}`)
      .then((res) => {
        setSingleData(res.data);
        setLoadingSingleData(false);
      });
  }

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    params && params?.productId && getSingleProductData();
  }, [params]);

  return { data, loading, singleData, loadingSingleData };
}
