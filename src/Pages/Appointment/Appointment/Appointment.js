import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { format } from "date-fns";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const footer = selectedDate ? (
    <p>You selected {format(selectedDate, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
