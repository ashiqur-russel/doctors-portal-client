import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem(
            "docotrs-portal-token"
          )}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto p-4 m-4">
        <h3 className="text-3xl mb-3">My Appointments</h3>

        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{booking?.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
