import { useEffect,useState } from "react";

// add custom hooks here

const useRestaurant =  (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  async function fetchRestaurantMenu() {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`
    );
    const json = await res.json();
    console.log(json.data);
    setResInfo(json.data);
  }
  return resInfo;
};

export default useRestaurant;
