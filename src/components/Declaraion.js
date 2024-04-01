import React, { useState, useEffect } from "react";
import TradingLicenseDeclaration from "./TaxDeclarationForm";

const DeclarationForm = () => {
  const [isloading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({
    tinNo: "",
    nationalId: "",
    companyName: "",
    taxType: "",
    year: "",
    declarationOptions: "",
    turnOver: 0.0,
    dueTax: 0.0,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  const [declared, setDeclared] = useState(null);
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  console.log(declared);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await fetch("http://127.0.0.1:8080/api/v1/new-declaration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully!");
            setIsLoading(false);

            setIsSubmited(true);
          }
          return response.json();
        })
        .then((data) => setDeclared(data))
        .catch((err) => {
          console.error("Failed to submit form");
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {!isSubmited ? (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
          <div className="font-semibold p-2">
            <h3>Declaration Form</h3>
          </div>
          <div className="flex justify-center items-center flex-wrap mb-4">
            <div className="w-full lg:w-1/2 p-2">
              <label
                htmlFor="TIN"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                TIN:
              </label>
              <input
                type="text"
                name="tinNo"
                value={formData.tinNo}
                onChange={handleChange}
                className="block w-full p-2 border border-green-500 rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                NID:
              </label>
              <input
                type="text"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                className="block w-full p-2 border border-green-500 rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <label
                htmlFor="taxpayerOrCompanyName"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Taxpayer/Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="block w-full p-2 border border-green-500 rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <label
                htmlFor="taxType"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Tax Type:
              </label>
              <input
                type="text"
                name="taxType"
                value={formData.taxType}
                onChange={handleChange}
                className="block w-full p-2 border border-green-500 rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <label
                htmlFor="year"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Year:
              </label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="block w-full p-2 border border-green-500 rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <label
                htmlFor="declarationOptions"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Declaration Options:
              </label>
              <select
                name="declarationOptions"
                value={formData.declarationOptions}
                onChange={handleChange}
                className="block w-full p-2 border border-green-500 rounded"
              >
                <option value="">Select an option</option>
                <option value="Annual">Annual</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
            </div>
          </div>
          {isloading && (
            <button className="mt-4 p-2 bg-green-700 text-yellow-400 rounded ">
              Loading .....
            </button>
          )}
          <button
            type="submit"
            className="mt-4 p-2 bg-green-700 text-yellow-400 rounded"
          >
            Submit
          </button>
        </form>
      ) : (
        <>
          {!linkClicked ? (
            <div className="items-center justify-center p-14">
              <div className="flex bg-lime-300 p-2 space-x-4">
                <div className="flex-grow">
                  <h4>TIN: {declared?.tinNo}</h4>
                </div>
                <div className="flex-grow">
                  <h4>Tax payer Name: {declared?.taxPayer}</h4>
                </div>
                <div className="flex-grow">
                  <h4>Tax Type: {declared?.taxType}</h4>
                </div>
              </div>
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-1/4 px-4 py-2">SL no</th>
                    <th className="w-1/4 px-4 py-2">Document No</th>
                    <th className="w-1/4 px-4 py-2">Declaration For</th>
                    <th className="w-1/4 px-4 py-2">Tax Period</th>
                    <th className="w-1/4 px-4 py-2">Duedate</th>
                    <th className="w-1/4 px-4 py-2">year</th>
                    <th className="w-1/4 px-4 py-2">Status</th>
                    <th className="w-1/4 px-4 py-2">Acknowldgement</th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="bg-gray-100">
                    <td className="border px-1 py-2">1</td>
                    <td className="border px-2 py-2">
                      <a
                        onClick={() => setLinkClicked(true)}
                        className="underline text-blue-500"
                      >
                        {declared?.documentNo}
                      </a>
                    </td>
                    <td className="border px-2 py-2">
                      {declared?.companyName}
                    </td>
                    <td className="border px-2 py-2">{declared?.taxPeriod}</td>
                    <td className="border px-4 py-2">{declared?.dueDate}</td>
                    <td className="border px-4 py-2">{declared?.year}</td>
                    <td className="border px-4 py-2">{declared?.status}</td>
                    <td className="border px-4 py-2">
                      {declared?.acknowlegement}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </>
      )}
      {linkClicked && declared && (
        <TradingLicenseDeclaration declaration={declared} />
      )}
    </div>
  );
};

export default DeclarationForm;
