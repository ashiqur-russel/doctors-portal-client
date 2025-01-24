import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-six-theta.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleAdmin = (id) => {
    fetch(
      `https://doctors-portal-server-six-theta.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken-portal")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successful!");
          refetch();
        }
      });
  };
  return (
    <div>
      <div>
        <h3 className="mb-4">All User</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th> Name</th>
                <th> Email</th>
                <th> Admin</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      src={user?.photoUrl}
                      alt=""
                      className="rounded-full"
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => handleAdmin(user?._id)}
                        className="badge badge-outline badge-secondary hover:bg-gray-300"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <span className="badge badge-outline bg-red-300 text-white hover:cursor">
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

export default AllUsers;
