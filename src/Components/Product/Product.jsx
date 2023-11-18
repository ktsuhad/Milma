// Product.js
import React from "react";
import ProductList from "./ProductList";
import productsData from "../../data.json";

const Product = () => {
  return (
    <div>
      <div className="h-[100px]  md:h-[200px] text-[32px] font-semibold text-white bg-royalblue flex justify-center items-center">
        <h1>Products</h1>
      </div>
      <ProductList
        bgColor="saddlebrown"
        Textcolor="goldenrod"
        category="Chocolate"
        items={productsData.chocolate}
      />
      <ProductList
        bgColor="goldenrod"
        Textcolor="saddlebrown"
        category="Vanilla"
        items={productsData.vanilla}
      />
      <ProductList
        bgColor="yellowgreen"
        Textcolor="darkslategray"
        category="Pista"
        items={productsData.pista}
      />
    </div>
  );
};

export default Product;
