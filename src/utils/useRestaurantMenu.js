import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

// custom hook to fetch the restaurant menu data
const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();

    },[])

    const fetchMenu = async () => {
      const data = await fetch(MENU_API_URL + resId);
      const json = await data.json();
      //console.log(json.data);
      setResInfo(json.data);
    };

    return resInfo;

}
export default useRestaurantMenu;