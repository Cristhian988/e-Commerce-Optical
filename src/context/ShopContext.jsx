import { createContext, useState } from "react";
import { all_products } from "../assets/all_products";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// eslint-disable-next-line react/prop-types
const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
