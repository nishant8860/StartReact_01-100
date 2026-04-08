import { CDN_URL } from "../utlis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData?.info?.cloudinaryImageId, "nishan");

  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
  } = resData?.info || {};

  return (
    <div className="res-card" style={{ background: "#D3D3D3" }}>
      <img
        className="res-logo"
        alt="restaurant"
        src={
    resData?.info?.cloudinaryImageId
      ? `https://media-assets.swiggy.com/swiggy/image/upload/${resData.info.cloudinaryImageId}`
      : "https://source.unsplash.com/400x300/?food"
  }
      />

      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>⭐ {avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
