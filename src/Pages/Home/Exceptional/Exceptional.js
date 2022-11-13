import React from "react";
import img from "../../../assets/images/treatment.png";

const Exceptional = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="mx-10">
          <h1 className="text-5xl font-bold">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="py-6">
            We take great pride in providing you and your family with
            high-quality dental services. We tailor-fit our treatment plans to
            address your every need. There is nothing we want more than to see
            you gain confidence in your smile! Questions or looking to book an
            appointment?
          </p>
          <button className="btn bg-gradient-to-r from-primary to-secondary btn-primary text-white">
            Appointment
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
