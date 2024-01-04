import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
const ItemList = ({ items, dummy }) => {
  const [data,setdata]=useState([])
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  let total = 0;
  for (let i = 0; i < items.length; i++){
     total += items[i].card.info.price
  }
  return (
    <div>
      
        {items.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
            </div>
          </div>
        ))}
        <div className="mt-6">
          <p className="text-lg font-semibold">
            Total:{ total/100} Rs
          </p>
          
      </div>
           
    
        
        </div>
     
    
  );
};

export default ItemList;















































// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items, dummy }) => {
//   const dispatch = useDispatch();
//   console.log(items)

//   const handleAddItem = (item) => {
//     // Dispatch an action
//     dispatch(addItem(item));
//   };
//   return (
//     <div>
//       {items.map((item) => (
//         <div
//           data-testid="foodItems"
//           key={item.card.info.id}
//           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//         >
//           <div className="w-9/12">
//             <div className="py-2">
//               <span>{item.card.info.name}</span>
//               <span>
//                 - ₹
//                 {item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.defaultPrice / 100}
//               </span>
//             </div>
//             <p className="text-xs">{item.card.info.description}</p>
//           </div>
//           <div className="w-3/12 p-4">
//             <div className="absolute">
//               <button
//                 className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
//                 onClick={() => handleAddItem(item)}
//               >
//                 Add +
//               </button>
//             </div>
//             <img src={CDN_URL + item.card.info.imageId} className="w-full" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;
