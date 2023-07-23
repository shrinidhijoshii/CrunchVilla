const FoodItems = (props) => {
  const { resData } = props;
  return (
    <div className="w-44 border-2 rounded-lg m-2 text-center h-72">
      <div className="course-img">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.imageId}`}
          alt="course-img"
          className="p-1"
        ></img>
      </div>
      <div>
        <h2>{resData.name}</h2>
        <p>Rs {resData.price/100}</p>
        <strong>{resData.ratings.aggregatedRating.rating} stars</strong>
      </div>
    </div>
  );
};

export default FoodItems;
