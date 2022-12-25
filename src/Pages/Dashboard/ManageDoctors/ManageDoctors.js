import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const response = await fetch(
        "https://doctors-portal-ashiqur-russel.vercel.app/doctors",
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem(
              "accessToken-portal"
            )}`,
          },
        }
      );

      const data = await response.json();
      return data;
    },
  });
  const handleDeleteDoctor = (doctor) => {
    console.log("object clicked", doctor);

    fetch(
      `https://doctors-portal-ashiqur-russel.vercel.app/doctors/${doctor._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken-portal")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully!`);
        }
      });
  };

  const closeModal = () => {
    setDeletingDoctor(null);
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
              {Array.isArray(doctors) &&
                doctors?.map((doctor, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={doctor?.image}
                        alt=""
                        className="rounded-full"
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>

                    <td>
                      <label
                        htmlFor="confirmation_modal"
                        onClick={() => setDeletingDoctor(doctor)}
                        className="badge badge-outline bg-red-300 text-white"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {deletingDoctor && (
          <ConfirmationModal
            title={`Are you sure you want to delete?`}
            message={`If you delete ${deletingDoctor.name}.it can not be recovered!`}
            closeModal={closeModal}
            successAction={handleDeleteDoctor}
            modalData={deletingDoctor}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default ManageDoctors;
