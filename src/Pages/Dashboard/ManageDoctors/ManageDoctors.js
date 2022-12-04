import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/doctors", {
        method: "GET",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken-portal")}`,
        },
      });

      const data = await response.json();
      return data;
    },
  });
  const handleDeleteDoctor = (id) => {
    console.log("object clicked", id);
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <h3 className="mb-4">My Appointment</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th> Name</th>
                <th> Email</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      src={doctor?.photoUrl}
                      alt=""
                      className="rounded-full"
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>

                  <td>
                    <span
                      onClick={() => handleDeleteDoctor(doctor?._id)}
                      className="badge badge-outline bg-red-300 text-white"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
