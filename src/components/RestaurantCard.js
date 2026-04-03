import {CDN_URL} from "../utlis/constants"
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, rating, deliveryTime } = resData;

  return (
    <div className="res-card" style={{ background: "#D3D3D3" }}>
      <img
        className="res-logo"
        alt="my-images"
       src={CDN_URL}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>⭐{rating}</h4>
    </div>
  );
};

export default RestaurantCard;