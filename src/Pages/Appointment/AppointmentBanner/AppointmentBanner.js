import React, { useState } from "react";
import Chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import BGImage from "../../../assets/images/bg.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className="my-6"
      style={{ backgroundImage: `url("${BGImage}")`, objectFit: "cover" }}
    >
      <div className="hero">
        <div className="hero-content w-full flex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className=" rounded-lg shadow-2xl lg:w-1/2"
            alt="dentist chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>You have slected date {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
