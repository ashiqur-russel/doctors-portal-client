import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section className="mt-32" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 lg:w-1/2 rounded-lg  broder-0 hidden lg:block md:block"
            alt=""
          />
          <div className="">
            <h4 className="text-lg text-primary font-bold">Appointment</h4>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment today!
            </h1>
            <p className="py-6 text-white">
              We take great pride in providing you and your family with
              high-quality dental services. We tailor-fit our treatment plans to
              address your every need. There is nothing we want more than to see
              you gain confidence in your smile! Questions or looking to book an
              appointment?
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
