import Img from "../components/images/newPICS.png"
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { IoFastFood } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { BsShop } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineStatusOnline } from "react-icons/hi";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="">
        <img className="w-[100px] h-[100px]" src={Img} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4  text-4xl">{onlineStatus ? <HiOutlineStatusOnline className=" text-green-800"/> : <HiOutlineStatusOnline className="text-red-800"/> }</li>
          <li className="px-4">
            <Link to="/">
              <IoHomeOutline className="text-4xl text-pink-700"/>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">
              <SiAboutdotme className="text-4xl text-pink-700"/>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">
              <IoIosContacts className="text-4xl text-pink-700"/>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">
              <BsShop className="text-4xl text-pink-700"/>
            </Link>
          </li>
          <li className="px-4 font-bold text-xl flex ">
            <Link to="/Finalway"  >
              <IoFastFood className="text-4xl text-pink-700" />
            </Link>
            {cartItems.length === 0 ? "" : (<span className="text-purple-700">{cartItems.length}</span>)}
            
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
