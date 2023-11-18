import React from "react";
import ProductItems from "./ProductItems";

const ProductList = ({ bgColor, Textcolor, category, items }) => {
  return (
    <div className="flex flex-col items-center mt-20 p-2">
      <h1
        style={{ backgroundColor: bgColor, color: Textcolor }}
        className={`w-[260px] md:w-[437px] p-3  rounded-61xl text-center text-2xl font-semibold`}
      >
        {category}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 mt-14">
        {items.map((item, i) => (
          <ProductItems key={i} bgColor={bgColor} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
