import React from "react";
import BGImage from "../../../assets/images/bg.png";
import Chair from "../../../assets/images/chair.png";
const Banner = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url("${BGImage}")`, objectFit: "cover" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} className="rounded-lg shadow-2xl w-1/2" alt="" />
        <div>
          <h1 className="text-3xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-gradient-to-r from-primary to-secondary btn-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
