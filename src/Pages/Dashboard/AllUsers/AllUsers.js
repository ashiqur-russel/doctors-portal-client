import React from "react";

const AllUsers = () => {
  return (
    <div>
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
              <tr>
                <th>1</th>
                <td>hjdsjj</td>
                <td>lknsdd</td>
                <td>hnsdck</td>
                <td>jddslw</td>
                <td>
                  <span className="badge badge-outline bg-red-300 text-white">
                    Cancel
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
