import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

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
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => (
                <tr key={user.key}>
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
    </div>
  );
};

export default AllUsers;
