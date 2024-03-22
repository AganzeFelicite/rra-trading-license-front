import React, { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nId: "",
    role: {},
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // onSignup(userData);
  };

  return (
    <div className="flex justify-center  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white shadow-md rounded px-3 pt-2 m-1 pb-8"
      >
        <h2 className="text-2xl text-center font-bold mb-4">
          Create New Users
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
              className="block w-full p-2 border border-green-500 rounded"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className="block w-full p-2 border border-green-500 rounded"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="block w-full p-2 border border-green-500 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number:
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleChange}
              className="block w-full p-2 border border-green-500 rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              National ID:
            </label>
            <input
              type="text"
              name="nId"
              value={userData.nId}
              onChange={handleChange}
              className="block w-full p-2 border border-green-500 rounded"
              placeholder="Enter your national ID"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Role:
            </label>
            <select
              name="role"
              value={userData.role}
              onChange={handleChange}
              className="block w-full p-2 border border-green-500 rounded"
              required
            >
              <option value="">Select a role</option>
              <option value="admin">Admin Role</option>
              <option value="Monthly">Normal Users</option>
            </select>
          </div>
          <div className="mb-6 col-span-2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="block w-full p-2 border border-green-500 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
