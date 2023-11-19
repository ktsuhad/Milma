import React from "react";

const ProductItems = ({ bgColor, item }) => {
  return (
    <div
      style={{ borderWidth: "6px", borderStyle: "solid", borderColor: bgColor }}
      className="w-full md:w-[382px]  rounded-6xl p-3 shadow-2xl"
    >
      <img src={item.image} alt={item.name} />
      <div className="flex justify-between py-3">
        <div className="font-bold">
          <h3 className="text-base text-darkslategray">{item.name}</h3>
          <span className="text-sm text-darkgray">{item.weight}</span>
        </div>
        <span className="self-center text-[20px] font-rupee font-semibold">
          ₹{item.price}
        </span>
      </div>
    </div>
  );
};

export default ProductItems;
