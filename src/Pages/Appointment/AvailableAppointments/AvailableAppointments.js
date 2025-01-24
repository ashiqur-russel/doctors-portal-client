import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointments = ({ selectedDate }) => {
  //const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-six-theta.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  /*   useEffect(() => {
    fetch("https://doctors-portal-server-six-theta.vercel.app/appointmentOptions")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []); */

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="mt-10">
      <p className="text-center text-primary font-bold">
        Available appointments on {format(selectedDate, "PP")}
      </p>
      <h1 className="fas fa-h1">hello</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
