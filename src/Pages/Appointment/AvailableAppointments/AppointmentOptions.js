import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl mt-6">
      <div className="card-body text-center">
        <h2 className="text-3xl text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "No slot available today!"}</p>
        <p>
          {slots.length} {slots.length > 1 ? ` spaces ` : ` space `}avaibale
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
