import React from "react";
import useFetch from "../Hooks/useFetch";

const DeclarationDetails = () => {
  const url = "http://127.0.0.1:8080/api/v1/declarations";
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="p-4">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <table className="table-fixed w-full ">
          <thead>
            <tr className="bg-gray-200">
              <th className="w-1/14 px-4 py-2">SL No</th>
              <th className="w-1/14 px-4 py-2">Document No</th>
              <th className="w-1/14 px-4 py-2">Declaration For</th>
              <th className="w-1/14 px-4 py-2">Tax Period</th>
              <th className="w-1/14 px-4 py-2">Due Date</th>
              <th className="w-1/14 px-4 py-2">Year</th>
              <th className="w-1/14 px-4 py-2">Status</th>
              <th className="w-1/14 px-4 py-2">Acknowledgement</th>
              <th className="w-1/14 px-4 py-2">Tax To Be Paid</th>
              <th className="w-1/14 px-4 py-2">TIN</th>
              <th className="w-1/14 px-4 py-2">National ID</th>
              <th className="w-1/14 px-4 py-2">Turnover</th>
            </tr>
          </thead>
          <tbody>
            {data.map((declaration, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">
                  <a className="underline text-blue-500" href="#">
                    {declaration.documentNo}
                  </a>
                </td>
                <td className="border px-4 py-2">{declaration.companyName}</td>
                <td className="border px-4 py-2">{declaration.taxPeriod}</td>
                <td className="border px-4 py-2">{declaration.dueDate}</td>
                <td className="border px-4 py-2">{declaration.year}</td>
                <td className="border px-4 py-2">{declaration.status}</td>
                <td className="border px-4 py-2">
                  {declaration.acknowlegement}
                </td>
                <td className="border px-4 py-2">{declaration.taxTobePaid}</td>
                <td className="border px-4 py-2">{declaration.tinNo}</td>
                <td className="border px-4 py-2">{declaration.nationalId}</td>
                <td className="border px-4 py-2">{declaration.turnOver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back
      </button>
    </div>
  );
};

export default DeclarationDetails;
