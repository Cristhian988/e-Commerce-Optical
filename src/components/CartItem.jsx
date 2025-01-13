import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { RiCloseFill } from "react-icons/ri";

export default function CartItem() {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="container py-12 flex flex-col md:flex-row gap-8">
      <div className="w-3/4 mx-auto">
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 pt-6 font-bold text-center text-lg">
          <p>Producto</p>
          <p>Titulo</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_products.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-8 pt-10 text-center items-center pb-8">
                  <img src={e.image} alt="" className="w-full object-contain" />
                  <p>{e.name}</p>
                  <p>S/. {e.price}</p>
                  <p>{cartItems[e.id]}</p>
                  <p>S/. {e.price * cartItems[e.id]}</p>
                  <button
                    onClick={() => removeFromCart(e.id)}
                    className="mx-auto"
                  >
                    <RiCloseFill size={24} />
                  </button>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="w-full md:w-1/3 mx-auto">
        <div className="flex flex-col gap-6 bg-gray-800 text-white p-4 rounded-md">
          <h1>Cart Total</h1>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              <h5>Subtotal: </h5>
              <h5>S/. {getTotalCartAmount().toFixed(2)}</h5>
            </div>
            <hr />
            <div>
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between gap-4">
              <h3 className="font-semibold text-lg">Total:</h3>
              <h3 className="font-semibold text-lg">
                S/. {getTotalCartAmount().toFixed(2)}
              </h3>
            </div>
          </div>

          <button className="bg-primary text-white rounded-md p-2">
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
}
