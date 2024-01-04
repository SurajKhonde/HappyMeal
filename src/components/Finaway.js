import React, { useState } from 'react';
import { useSelector} from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
import Cart from './Cart';
import BillingPage from './FinalBillingpage';

const Finalway = () => {


    const cartItemo = useSelector((store) => store.cart.items);
    const [checkout, setCheckout] = useState(false);
    const handleCheckout = () => {
        setCheckout(true);
  };
  return (
    <div>
      {checkout ? (
        <BillingPage data={cartItemo} />
      ) : (
        <Cart cartItems={cartItemo} onCheckout={handleCheckout} />
      )}
    </div>
  );
};

export default Finalway;