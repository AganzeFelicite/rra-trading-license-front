import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const Login = ({ onLogin }) => {
  const [error, setError] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [userId, setUserId] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openChangePasswordModal = (userId) => {
    setUserId(userId);
    setIsChangePasswordModalOpen(true);
  };
  const closeChangePasswordModal = () => setIsChangePasswordModalOpen(false);

  const preventModalClose = (e) => {
    e.stopPropagation();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user.firstLogin) {
          openChangePasswordModal(data.user.userId);
        } else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("role", data.user.role);
          onLogin(true, data.user.role);
          setError(null);
        }
      } else if (response.status === 404) {
        const data = await response.json();
        setError(data);
        openModal();
      }
    } catch (error) {
      console.log("Error during login:", error);
      setError("An error occurred during login. Please try again.");
      openModal();
    }
  };

  const handleChangePassword = async (newPassword) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/auth/${userId}/password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.user.role);
        onLogin(true, data.user.role);
        setError(null);
        closeChangePasswordModal();
      } else {
        setError("Failed to change password. Please try again.");
        openModal();
      }
    } catch (error) {
      console.log("Error changing password:", error);
      setError(
        "An error occurred while changing the password. Please try again."
      );
      openModal();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Role
          </label>
          <select
            name="role"
            value={credentials.role}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
            required
          >
            <option>select role</option>

            <option value="ADMIN">ADMIN</option>
            <option value="USER">Tax payer</option>
          </select>
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
            value={credentials.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
      <Modal
        isOpen={isChangePasswordModalOpen}
        onRequestClose={closeChangePasswordModal}
        onClick={preventModalClose}
        className="fixed inset-0 z-50 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <p>This is your first login. Please set a new password.</p>
          <input
            type="password"
            name="newPassword"
            onChange={(e) => setNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            placeholder="Enter new password"
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleChangePassword(newPassword)}
          >
            Submit
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onClick={preventModalClose}
        className="fixed inset-0 z-50 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Error</h2>
          <p>{error}</p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
