import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";

export const RestaurantMenu = () => {

  // useParams is hook which gives parameters passed from the request url
  // params variable holds object , object will have key:value and key will be the name given 
  // in route 
  const params = useParams();
  console.log(params.id)

  const resInfo = useRestaurant(params.id);
  console.log(resInfo)

  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo.cards[0].card.card.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRatingString}</h3>
      <div className="menu-items">
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} - Rs{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
