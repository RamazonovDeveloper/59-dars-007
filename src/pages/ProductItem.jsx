import React from "react";
import LoadingComponent from "../components/LoadingComponent";
import useProducts from "../hooks/useProducts";

function ProductItem() {
  const { singleData, loadingSingleData } = useProducts();

  return (
    <div>
      {loadingSingleData ? (
        <LoadingComponent loading={loadingSingleData} />
      ) : (
        <div>
          <img src={singleData?.images[0]} alt="product image" />
          <p>{singleData?.title}</p>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
