import React from "react";
import useFetch from "../Hooks/useFetch";

const UserTable = () => {
  const url = "http://127.0.0.1:8080/api/v1/auth/all-users";
  const { data: users, isPending, error } = useFetch(url);

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
      <table className="table-fixed w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-1/12 px-4 py-2">User ID</th>
            <th className="w-1/12 px-4 py-2">First Name</th>
            <th className="w-1/12 px-4 py-2">Last Name</th>
            <th className="w-1/12 px-4 py-2">National ID</th>
            <th className="w-1/12 px-4 py-2">Role</th>
            <th className="w-1/8 px-4 py-2">Email</th>
            <th className="w-1/12 px-4 py-2">Phone Number</th>
            <th className="w-1/12 px-4 py-2">First Login</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.userId}
              className={user.userId % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="border px-4 py-2">{user.userId}</td>
              <td className="border px-4 py-2">{user.firstName}</td>
              <td className="border px-4 py-2">{user.lastName}</td>
              <td className="border px-4 py-2">{user.nId}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phoneNumber}</td>
              <td className="border px-4 py-2">
                {user.firstLogin ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
