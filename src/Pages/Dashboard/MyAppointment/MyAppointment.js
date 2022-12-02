import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken-portal")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="mb-4">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Treatment Name</th>
              <th>Appointment Date</th>

              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking?.patient}</td>
                <td>{booking?.treatment}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  <span className="badge badge-outline bg-red-300 text-white">
                    Cancel
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
