import { CDN_URL } from "../utils/constants";

export default RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[480px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-[250px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res logo"
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
};
