import React from "react";
import useProducts from "../hooks/useProducts";
import LoadingComponent from "../components/LoadingComponent";
import { useNavigate } from "react-router-dom";

function Products() {
  const { data, loading } = useProducts();

  console.log(data);

  const router = useNavigate()

  const handleClick = (productId) => {
    router(`/products/${productId}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingComponent loading={loading} />
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {data &&
            data.map((item, index) => {
              const { id, title, describtion, images } = item;

              return (
                <div
                  className="border-gray-400 border-[1px] rounded-[10px] p-2 hover:bg-gray-200 cursor-pointer shadow-sm"
                  key={index}
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  <img
                    className="w-full object-fill h-[300px]"
                    src={images[0]}
                    alt=""
                  />
                  <h1>{title}</h1>
                  <p>{describtion}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Products;
