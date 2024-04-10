import React from "react";
import useFetch from "../Hooks/useFetch";

const TradingLisenceTaxTable = () => {
  const url =
    "http://127.0.0.1:8080/api/v1/trading-lisence/all-trading-lisence";
  const { data, isPending, error } = useFetch(url);
  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log(`Deleting declaration with id: ${id}`);
  };

  const handleUpdate = (id) => {
    // Implement update functionality here
    console.log(`Updating declaration with id: ${id}`);
  };
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="p-4">
      <div className="bg-lime-300 p-2">
        <h4>Trading Lisence Tax Registration</h4>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <table className="table-fixed w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="w-1/14 px-4 py-2">ID</th>
              <th className="w-1/14 px-4 py-2">Type of Activity</th>
              <th className="w-1/14 px-4 py-2">Category</th>
              <th className="w-1/14 px-4 py-2">Classification</th>
              <th className="w-1/14 px-4 py-2">Sector of Activities</th>
              <th className="w-1/14 px-4 py-2">Section</th>
              <th className="w-1/14 px-4 py-2">Division</th>
              <th className="w-1/14 px-4 py-2">Group of Activity</th>
              <th className="w-1/14 px-4 py-2">Classe of Tax</th>
              <th className="w-1/14 px-4 py-2">Subclasse</th>
              <th className="w-1/14 px-4 py-2">ISCI Code</th>
              <th className="w-1/14 px-4 py-2">Province</th>
              <th className="w-1/14 px-4 py-2">District</th>
              <th className="w-1/14 px-4 py-2">Sector</th>
              <th className="w-1/14 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.typeOfActivity}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">{item.classification}</td>
                <td className="border px-4 py-2">{item.sectorOfActivities}</td>
                <td className="border px-4 py-2">{item.section}</td>
                <td className="border px-4 py-2">{item.division}</td>
                <td className="border px-4 py-2">{item.groupOfActivity}</td>
                <td className="border px-4 py-2">{item.classeOfTax}</td>
                <td className="border px-4 py-2">{item.subclasse}</td>
                <td className="border px-4 py-2">{item.iscicode}</td>
                <td className="border px-4 py-2">{item.province}</td>
                <td className="border px-4 py-2">{item.district}</td>
                <td className="border px-4 py-2">{item.sector}</td>

                <td className="border px-4 py-2">
                  {/* <div>
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
                  </div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        onClick={handleBack}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  p-2 m-2 rounded"
      >
        Go back
      </button>
    </div>
  );
};

export default TradingLisenceTaxTable;
