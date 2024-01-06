import React from "react";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = ({cartItems,onCheckout}) => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
      <div className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty. Start shopping now!</p>
        ) : (
          <div>
                <div className="flex items-center">
                <ItemList items={cartItems} />
                </div>
                <div className="flex items-center">
                  <button
                    className="text-gray-500 hover:text-red-500 focus:outline-none"
                    onClick={() => handleClearCart()}
                  >
                    Remove
                  </button>
            </div>
             <div className="mt-6">
              <button 
                onClick={onCheckout}
                  className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
                >
                  Checkout
                </button>
      </div>
              </div>
        )}
      </div>
  );
};
export default Cart;