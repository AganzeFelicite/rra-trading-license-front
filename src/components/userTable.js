import React from "react";
import useFetch from "../Hooks/useFetch";

const UserTable = () => {
  const url = "http://127.0.0.1:8080/api/v1/auth/all-users";
  const { data: users, isPending, error } = useFetch(url);
  const handleBack = () => {
    window.history.back();
  };
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <div className="bg-lime-300 p-2">
        <h4>User Table</h4>
      </div>
      <div className="table-container">
        <table className="table-fixed w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="w-1/12 px-4 py-2" data-column="User ID">
                User ID
              </th>
              <th className="w-1/12 px-4 py-2" data-column="First Name">
                First Name
              </th>
              <th className="w-1/12 px-4 py-2" data-column="Last Name">
                Last Name
              </th>
              <th className="w-1/12 px-4 py-2" data-column="National ID">
                National ID
              </th>
              <th className="w-1/12 px-4 py-2" data-column="Role">
                Role
              </th>
              <th className="w-1/8 px-4 py-2" data-column="Email">
                Email
              </th>
              <th className="w-1/12 px-4 py-2" data-column="Phone Number">
                Phone Number
              </th>
              <th className="w-1/12 px-4 py-2" data-column="First Login">
                First Login
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.userId}
                className={user.userId % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="border px-4 py-2" data-column="User ID">
                  {user.userId}
                </td>
                <td className="border px-4 py-2" data-column="First Name">
                  {user.firstName}
                </td>
                <td className="border px-4 py-2" data-column="Last Name">
                  {user.lastName}
                </td>
                <td className="border px-4 py-2" data-column="National ID">
                  {user.nId}
                </td>
                <td className="border px-4 py-2" data-column="Role">
                  {user.role}
                </td>
                <td className="border px-4 py-2" data-column="Email">
                  {user.email}
                </td>
                <td className="border px-4 py-2" data-column="Phone Number">
                  {user.phoneNumber}
                </td>
                <td className="border px-4 py-2" data-column="First Login">
                  {user.firstLogin ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default UserTable;
