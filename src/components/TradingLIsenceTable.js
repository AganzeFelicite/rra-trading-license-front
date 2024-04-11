import React from "react";
import useFetch from "../Hooks/useFetch";
import "../index.css";

const TradingLisenceTaxTable = () => {
  const url =
    "http://127.0.0.1:8080/api/v1/trading-lisence/all-trading-lisence";
  const { data, isPending, error } = useFetch(url);
  const handleDelete = (id) => {
    // Implement delete functionality here
    // console.log(Deleting declaration with id: ${id});
  };

  const handleUpdate = (id) => {
    // Implement update functionality here
    // console.log(Updating declaration with id: ${id});
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="p-4">
      <div className="bg-lime-300 p-2">
        <h4>Trading Licence Tax Registration</h4>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="table-container">
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="w-1/14 px-4 py-2" data-column="ID">
                  ID
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Type of Activity">
                  Type of Activity
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Category">
                  Category
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Classification">
                  Classification
                </th>
                <th
                  className="w-1/14 px-4 py-2"
                  data-column="Sector of Activities"
                >
                  Sector of Activities
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Section">
                  Section
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Division">
                  Division
                </th>
                <th
                  className="w-1/14 px-4 py-2"
                  data-column="Group of Activity"
                >
                  Group of Activity
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Class of Tax">
                  Class of Tax
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Subclass">
                  Subclass
                </th>
                <th className="w-1/14 px-4 py-2" data-column="ISCI Code">
                  ISCI Code
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Province">
                  Province
                </th>
                <th className="w-1/14 px-4 py-2" data-column="District">
                  District
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Sector">
                  Sector
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Actions">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="border px-4 py-2" data-column="ID">
                    {item.id}
                  </td>
                  <td
                    className="border px-4 py-2"
                    data-column="Type of Activity"
                  >
                    {item.typeOfActivity}
                  </td>
                  <td className="border px-4 py-2" data-column="Category">
                    {item.category}
                  </td>
                  <td className="border px-4 py-2" data-column="Classification">
                    {item.classification}
                  </td>
                  <td
                    className="border px-4 py-2"
                    data-column="Sector of Activities"
                  >
                    {item.sectorOfActivities}
                  </td>
                  <td className="border px-4 py-2" data-column="Section">
                    {item.section}
                  </td>
                  <td className="border px-4 py-2" data-column="Division">
                    {item.division}
                  </td>
                  <td
                    className="border px-4 py-2"
                    data-column="Group of Activity"
                  >
                    {item.groupOfActivity}
                  </td>
                  <td className="border px-4 py-2" data-column="Class of Tax">
                    {item.classOfTax}
                  </td>
                  <td className="border px-4 py-2" data-column="Subclass">
                    {item.subclass}
                  </td>
                  <td className="border px-4 py-2" data-column="ISCI Code">
                    {item.isciCode}
                  </td>
                  <td className="border px-4 py-2" data-column="Province">
                    {item.province}
                  </td>
                  <td className="border px-4 py-2" data-column="District">
                    {item.district}
                  </td>
                  <td className="border px-4 py-2" data-column="Sector">
                    {item.sector}
                  </td>
                  <td className="border px-4 py-2" data-column="Actions">
                    <div>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-1"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
                        onClick={() => handleUpdate(item.id)}
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
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default TradingLisenceTaxTable;
