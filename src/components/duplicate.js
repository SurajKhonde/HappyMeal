import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
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
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-4">
              <div className="flex items-center">
                {/* Assuming ItemList is a component that renders the item details */}
                <ItemList item={item} />
              </div>
              <div className="flex items-center">
                <button
                  className="text-gray-500 hover:text-red-500 focus:outline-none"
                  onClick={() => handleClearCart()}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-lg font-semibold">
              Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
          <div className="mt-6">
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
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

































































































































































































