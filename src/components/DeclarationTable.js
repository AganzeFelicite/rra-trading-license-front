import React from "react";
import useFetch from "../Hooks/useFetch";

const DeclarationDetails = () => {
  const url = "http://127.0.0.1:8080/api/v1/declarations";
  const { data, isPending, error } = useFetch(url);

  const handleBack = () => {
    window.history.back();
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Deleting declaration with id: ${id}`);
  };

  const handleUpdate = (id) => {
    // Implement update functionality here
    console.log(`Updating declaration with id: ${id}`);
  };

  return (
    <div className="p-4">
      <div className="bg-lime-300 p-2">
        <h4>Table of Declarations</h4>
      </div>
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {data && (
        <div className="table-container">
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="w-1/14 px-4 py-2" data-column="SL No">
                  SL No
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Document No">
                  Document No
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Declaration For">
                  Declaration For
                </th>
                <th className="w-1/6 px-4 py-2" data-column="Tax Period">
                  Tax Period
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Due Date">
                  Due Date
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Year">
                  Year
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Status">
                  Status
                </th>
                <th className="w-1/8 px-4" data-column="Acknowledgement">
                  Acknowledgement
                </th>
                <th className="w-1/8 px-4 py-2" data-column="Tax To Be Paid">
                  Tax To Be Paid
                </th>
                <th className="w-1/14 px-4 py-2" data-column="TIN">
                  TIN
                </th>
                <th className="w-1/14 px-4 py-2" data-column="National ID">
                  National ID
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Turnover">
                  Turnover
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Actions">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((declaration, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="border px-4 py-2" data-column="SL No">
                    {index + 1}
                  </td>
                  <td className="border px-4 py-2" data-column="Document No">
                    <a className="underline text-blue-500" href="#">
                      {declaration.documentNo}
                    </a>
                  </td>
                  <td
                    className="border px-4 py-2"
                    data-column="Declaration For"
                  >
                    {declaration.companyName}
                  </td>
                  <td className="border px-4 py-2" data-column="Tax Period">
                    {declaration.taxPeriod}
                  </td>
                  <td className="border px-4 py-2" data-column="Due Date">
                    {declaration.dueDate}
                  </td>
                  <td className="border px-4 py-2" data-column="Year">
                    {declaration.year}
                  </td>
                  <td className="border px-4 py-2" data-column="Status">
                    {declaration.status}
                  </td>
                  <td
                    className="border px-4 py-2"
                    data-column="Acknowledgement"
                  >
                    {declaration.acknowlegement}
                  </td>
                  <td className="border px-4 py-2" data-column="Tax To Be Paid">
                    {declaration.taxTobePaid}
                  </td>
                  <td className="border px-4 py-2" data-column="TIN">
                    {declaration.tinNo}
                  </td>
                  <td className="border px-4 py-2" data-column="National ID">
                    {declaration.nationalId}
                  </td>
                  <td className="border px-4 py-2" data-column="Turnover">
                    {declaration.turnOver}
                  </td>
                  <td className="border px-4 py-2" data-column="Actions">
                    <div>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
                        onClick={() => handleDelete(declaration.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
                        onClick={() => handleUpdate(declaration.id)}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <button
        onClick={handleBack}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded"
      >
        Go back
      </button>
    </div>
  );
};

export default DeclarationDetails;
