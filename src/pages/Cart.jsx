// import React from "react";
import CartItem from "../components/CartItem";

export default function Cart() {
  return (
    <div className="container py-24">
      <CartItem />

      {/* <div className="flex flex-col items-center justify-center">
        <img src={img} alt="" className="w-1/2 object-contain" />
        <h1 className="text-2xl font-bold">Tu carrito está vacío</h1>
      </div> */}
    </div>
  );
}
