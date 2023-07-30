export const Card = (props) => {
  const { resData } = props;
  return (
    <div className="w-44 border-2 rounded-lg m-1 text-center h-80">
      <div className="course-img">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`}
          alt="course-img"
          className="p-1"
        ></img>
      </div>
      <div id="course-detail">
        <h2>{resData.name}</h2>
        <p>{resData.area}</p>
        <strong>{resData.avgRating} stars</strong>
      </div>
    </div>
  );
};
