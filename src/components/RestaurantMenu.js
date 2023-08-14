import React, { useEffect } from "react";

export default RestaurantMenu = () => {
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async()=>{
        const data = await fetch(
            ""
        )
    }
  return (
    <div className="menu">
      <h1>Restaurants Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};
