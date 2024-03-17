import React from "react";

const AdminDashBoard = ({ onRegister }) => {
  const showTradingLicense = () => {
    onRegister(true);
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
              onClick={showTradingLicense} // Corrected onClick event
              className="bg-green-950 hover:bg-lime-300 text-white font-bold py-2 px-4 rounded m-2"
            >
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

export default AdminDashBoard;
