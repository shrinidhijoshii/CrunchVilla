import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export const RestaurantMenu = () => {
  // useParams is hook which gives parameters passed from the request url
  // params variable holds object , object will have key:value and key will be the name given
  // in route
  const params = useParams();
  console.log(params.id);

  const resInfo = useRestaurant(params.id);
  console.log(resInfo);

  const dispatch = useDispatch();
  // always dispatch event follows this pattern - "dispatch(ation name(payload))"
  const handleAddItem = (item) => {
    console.log(item)
    dispatch(addItem(item));
  };

  if (resInfo == null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    cloudinaryImageId,
  } = resInfo.cards[0].card.card.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <div className="text-center text-xl font-semibold">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          className="h-80 ml-auto mr-auto"
        ></img>
        <h1>{name}</h1>
        <h3>{cuisines.join(" , ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>{avgRatingString}</h3>
        <hr></hr>
      </div>
      <div className="menu-items">
        <h1 className="text-center text-lg">Menu Items</h1>
        <ul className="flex flex-wrap">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="m-10 text-center shadow-md w-80 ml-auto mr-auto"
            >
              {" "}
              <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                className="h-40 ml-auto mr-auto"
              ></img>
              <p className="font-semibold">
                {item.card.info.name} - Rs{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
              </p>
              <p>{item.card.info.description}</p>
              <p>
                <button
                  className="bg-green-100 p-1 m-2"
                  onClick={() => handleAddItem(item.card.info)}
                >
                  Add Item
                </button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
