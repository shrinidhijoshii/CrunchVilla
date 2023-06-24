export const Card = (props) => {
  const { resData } = props;
  return (
    <div className="w-40 border-2 rounded-lg m-1 text-center">
      <div className="course-img">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.data.cloudinaryImageId}`}
          alt="course-img"
        ></img>
      </div>
      <div id="course-detail">
        <h2>{resData.data.name}</h2>
        <p>{resData.data.area}</p>
        <strong>{resData.data.avgRating} stars</strong>
      </div>
    </div>
  );
};
