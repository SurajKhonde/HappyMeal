import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import CorsErrorBox from "./CorsError";
import { Dummydata } from "../utils/DummyData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const[button,setbutton]=useState("Our Top Restaurants")
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3504441&lng=78.4730669&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      function fetchcorrectData(i) { 
        setFilteredRestaurant(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestraunt(json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
      }
      const firstuser = (Array.isArray(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) == true)
      const seconduser = (Array.isArray(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) == true)
      if (firstuser) {
        fetchcorrectData(1)
      } else if (seconduser) {
        fetchcorrectData(2)

      } else { 
        fetchcorrectData(3)
      }
    
    }
    catch(error) { 
      console.log(error)
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
     <CorsErrorBox/>
    );
  

  const { loggedInUser, setUserName } = useContext(UserContext);
  if (!listOfRestaurants) {
  return <Shimmer />;
}

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-evenly">
        <div className="  flex  gap-2 m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition duration-300"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.cuisines.toString().toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Cuisines🍟🍔
            </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-pink-500 text-white py-3 px-6 rounded-full focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
              (button == "Our Top Restaurants" ? setbutton("View All Restaurant") : setbutton("Our Top Restaurants"))
              if (button == "View All Restaurant") { setFilteredRestaurant(listOfRestaurants) }
            }}
          >
              { button}
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label className="text-lg">UserName</label>
          <input
            className="w-full py-3 pl-4 pr-10 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 bg-transparent"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
