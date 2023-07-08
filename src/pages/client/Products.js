import React from "react";
import ItemProduct from "../../components/card/ItemProduct";

const Products = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Mời bạn chọn món
        </h2>

        <div className="mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ItemProduct />
        </div>
      </div>
    </div>
  );
};

export default Products;
