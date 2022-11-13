import React from "react";

const Testimonial = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  console.log(review);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center">
          <div className="avatar mr-6">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" className="" />
            </div>
          </div>
          <div>
            <h5 className="text-lg">{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
