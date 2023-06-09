import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  console.log("body rendered");

  // here Iam using useState() hook to dynamically render page based on data layer change
  const [listOfRestaurnats, setListOfRestaurnats] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [filteredListOfRestaurnats, setFilteredListOfRestaurnats] = useState(
    []
  );

  // useEffect is a react hook, the defined call-back fn defined in the useEffect will be
  // called once body element is rendered here , it will follow below methodology
  // when page loads -> body renders shimmer UI -> api-call will happen for data -> re-render page with data
  // it will increases the UX of the UI
  useEffect(function () {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    resList = json.data.cards[2].data.data.cards;
    setListOfRestaurnats(resList);
    setFilteredListOfRestaurnats(resList);
    resList;
  };

  // conditional rendering
  if (listOfRestaurnats.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-bar">
        <input
          className="serach-input"
          placeholder="Type here ..."
          value={searchedText}
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />
        <button
          className="search-submit"
          onClick={function () {
            const filteredRestaurants = listOfRestaurnats.filter((res) => {
              return res.data.name
                .toLowerCase()
                .includes(searchedText.toLowerCase());
            });

            setFilteredListOfRestaurnats(filteredRestaurants);
          }}
        >
          {" "}
          Search
        </button>
      </div>
      <div className="courses">
        {
          //instead of using this repetative code for card , we can use loop as below
          /* <Card course_details={courses[0]} />
        <Card course_details={courses[1]} />
        <Card course_details={courses[2]} />
        <Card course_details={courses[3]} />
        <Card course_details={courses[4]} />
        <Card course_details={courses[5]} />
        <Card course_details={courses[6]} /> */
        }

        {
          // here we can also use arrow fun like this
          //{/* courses.map((course, index) => <Card key={course.course_name} course_details= {course}/>) */}
          //if we are looping we need to give key to each card with some unique tag
          // here course name is  given as key , it can be anything which will be diff for all cards
          // using loop index as a key is not recomended , ie [not using key < index as key < unique keys]
          filteredListOfRestaurnats.map(function (restaurant, index) {
            return (
              <Link className="cards-link"
                key={restaurant.data.id}
                to={`/restaurants/${restaurant.data.id}`}
              >
                <Card resData={restaurant} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};
