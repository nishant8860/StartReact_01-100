import RestaurantCard from "./RestaurantCard";
import {useState} from 'react'
import resObj from "../utlis/mockData";
const Body = () => {

  const [ListOfResturent, setListOfResturent]  = useState(resObj)

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"   onClick={()=>{
          //filter logic on click
         const  filterList = ListOfResturent.filter((res) =>res.rating > 4);
          setListOfResturent(filterList)
          
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {ListOfResturent.map((resturent) => (
          <RestaurantCard key={resturent.id} resData={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;