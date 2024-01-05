import React, { useContext, useState } from 'react';


const BillingPage = ({ data}) => {
      

    let total = 0;
    for (let i = 0; i <data.length; i++){
    total += data[i].card.info.price
  }
    const totalCost = total/100;

  // Calculate GST (Assuming GST is 18%)
  const gstAmount = (totalCost * 18) / 100;

  // Calculate total amount (Total Cost + GST)
  const totalAmount = totalCost + gstAmount;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-pink-50 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6">Billing Details</h1>

      {/* Item List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Item List</h2>
              {data.map((item) => (
          <div key={item.card.info.id} className="flex justify-between mb-2">
            <span>{item.card.info.name}</span>
            <span>₹{(item.card.info.price.toFixed(2))/100}</span>
          </div>
        ))}
      </div>

      {/* Total Cost */}
      <div className="flex justify-between mb-4">
        <span>Total Cost:</span>
        <span>₹{totalCost.toFixed(2)}</span>
      </div>

      {/* GST Amount */}
      <div className="flex justify-between mb-4">
        <span>GST (18%):</span>
        <span>₹{gstAmount.toFixed(2)}</span>
      </div>

      {/* Total Amount */}
      <div className="flex justify-between mb-6">
        <h2 className="text-lg font-semibold">Total Amount:</h2>
        <span className="text-lg font-semibold">{totalAmount.toFixed(2)}</span>
      </div>

      <button
        className="w-full bg-gradient-to-r from-blue-300 to-pink-400 text-black py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
        onClick={() => console.log('Checkout clicked')}
      >
        Checkout
      </button> 
    </div>
  );
};

export default BillingPage;
