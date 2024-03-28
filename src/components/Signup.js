import React, { useState } from "react";

function sendEmail(to, password, userName) {
  const emailData = {
    to: to,
    subject: "Your New Password FROM RRA",
    body: `
      Dear ${userName},

      We're excited to inform you that your new password has been successfully generated! Here are the details:

      New Password: ${password}

      You can now use this password to login to your account. For security purposes, we recommend modifying your password after your first login.

      If you have any questions or need assistance, feel free to reach out to our support team.

      Happy browsing!

      Best regards,
      The Management Team
    `,
  };

  fetch("http://localhost:8080/api/v1/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

const Signup = () => {
  const signupLink = "http://127.0.0.1:8080/api/v1/auth/register";
  const [isloading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nid: "",
    role: "",
    password: "",
    firstLogin: true,
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(signupLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("user created");
          setIsLoading(false);
          sendEmail(
            userData.email,
            userData.password,
            `${userData.firstName} ${userData.lastName}`
          );
          setShowPopup(true); // Show the pop-up
          setTimeout(() => setShowPopup(false), 3000); // Hide the pop-up after 3 seconds
        }
      })
      .catch((err) => {
        console.log("some error while saving the Data");
      });
  };

  return (
    <div className="flex justify-center  bg-gray-100">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white p-4 rounded-md">
            Email sent successfully!
          </div>
        </div>
      )}
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
              name="nid"
              value={userData.nid}
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
              <option>select role</option>

              <option value="ADMIN">ADMIN</option>
              <option value="USER">Tax payer</option>
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
          {!isloading ? (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Creating User ...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;
