import React, { useState } from "react";

const AdminDashboard = ({ onMenuItemClick }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    onMenuItemClick(menuItem);
    toggleDropdown(); // Close the dropdown after clicking a menu item
  };

  return (
    <div className="dashboard">
      <main className="bg-white py-5 flex flex-col">
        <div className="p-4">
          <div className="bg-lime-300 p-2">
            <h4>Local government Tax</h4>
          </div>
          <div className="flex">
            <button
              onClick={toggleDropdown}
              className="bg-green-950 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded m-2"
              aria-haspopup="true"
            >
              Registration
              {isDropdownOpen && (
                <div>
                  <div
                    className="absolute z-10 mt-2 w-56  origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                      onClick={() => handleMenuItemClick("Trading License")}
                    >
                      Trading License
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                      onClick={() => handleMenuItemClick("Other Taxes")}
                    >
                      Other Taxes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                      onClick={() => handleMenuItemClick("New Users")}
                    >
                      New Users
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex="-1"
                      onClick={() => handleMenuItemClick("Delete")}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              )}
            </button>
            <button
              className="bg-green-950 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded m-2"
              onClick={() => handleMenuItemClick("declaration")}
            >
              Declaration
            </button>
            <button className="bg-green-950 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded m-2">
              Fees payment Ticket
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-lime-300 py-2">
            <h4>Custom Tax services</h4>
          </div>
          <div className="flex">
            <button className="bg-green-950 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded m-2">
              Registration
            </button>
            <button className="bg-green-950 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded m-2">
              Declaration
            </button>
            <button className="bg-green-950 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded m-2">
              Fees payment Ticket
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
