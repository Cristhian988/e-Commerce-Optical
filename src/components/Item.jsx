// import React from 'react'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

// eslint-disable-next-line react/prop-types
export default function Item({ id, name, price, description, image }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-4 justify-center flex-wrap border rounded-lg py-8 mx-4">
      <Link
        to={`/product/${id}`}
        className="w-full flex flex-col gap-4 md:w-[90%]"
      >
        <div className="relative w-full h-[12rem] bg-white rounded-md">
          <img
            src={image}
            alt="sunglasses"
            className="absolute object-contain rounded-md z-10"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">{name}</span>
          <span>S/. {price}</span>
        </div>
        <div className="text-sm text-gray-500">{description}</div>
      </Link>
      <button
        className="mx-4 w-full rounded-2xl text-sm ring-1 text-white py-2 px-4 bg-primary"
        onClick={() => addToCart(id)}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
