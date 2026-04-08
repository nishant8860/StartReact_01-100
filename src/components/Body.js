import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfResturent, setListOfResturent] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6327&lng=77.2197&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

    const restaurants = json?.data?.cards?.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfResturent(restaurants || []);
    setFilteredList(restaurants || []);
  };

  return ListOfResturent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
             setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
            //filter the update card and change the UI
          const filteredRestorent =  ListOfResturent.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
          setFilteredList(filteredRestorent)

            
          }}>Search</button>
        </div>
       
        
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic on click
            // const  filterList = ListOfResturent.filter((res) =>res.info.avgRating > 4);
            const filteredList = ListOfResturent.filter(
              (res) => Number(res?.info?.avgRating || 0) > 4,
            );

            setFilteredList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

      </div>
      <div className="res-container">
        {filteredList.length === 0 ? ( <h2>No Restaurants Found 😢</h2>):(
        filteredList.map((resturent) => (
          <RestaurantCard key={resturent?.info?.id} resData={resturent} />
        )))}
      </div>
    </div>
  );
};

export default Body;
