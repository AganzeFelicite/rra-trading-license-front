import React, { useState } from "react";

const MyTradingLicenseForm = () => {
  const [formData, setFormData] = useState({
    typeOfActivity: "",
    category: "",
    classification: "",
    sectorOfActivities: "",
    section: "",
    division: "",
    groupOfActivity: "",
    classeOfTax: "",
    subclasse: "",
    iscicode: "",
    province: "",
    district: "",
    sector: "",
    cell: "",
    village: "",
    mainBranchAndUnitName: "",
    streetName: "",
    houseNo: "",
    doorNo: "",
    annualTurnover: "",
    netCapitalInvested: "",
    numberOfEmployees: "",
    registrationDate: "",
    upiNo: "",
    isExempted: false,
    branch: "",
    houseOwner: "",
    houseOwnerNID: "",
    houseOwnerPhone: "",
    tinNo: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/trading-licence/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        // Reset form fields if needed
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
      {/* Type of Activity, Category, Classification */}
      <div className="flex justify-center items-center mb-4">
        <div className="mr-4 flex-3">
          <label
            htmlFor="typeOfActivity"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Type of Activity:
          </label>
          <input
            type="text"
            name="typeOfActivity"
            value={formData.typeOfActivity}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="mr-4 flex-3">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="flex-3">
          <label
            htmlFor="classification"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Classification:
          </label>
          <input
            type="text"
            name="classification"
            value={formData.classification}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
      </div>

      {/* Sector of Activities, Section, Division */}
      <div className="flex justify-center items-center mb-4">
        <div className="mr-4 flex-3">
          <label
            htmlFor="sectorOfActivities"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Sector of Activities:
          </label>
          <input
            type="text"
            name="sectorOfActivities"
            value={formData.sectorOfActivities}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="mr-4 flex-3">
          <label
            htmlFor="section"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Section:
          </label>
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="flex-3">
          <label
            htmlFor="division"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Division:
          </label>
          <input
            type="text"
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mb-4">
        <div className="mr-4 flex-3">
          <label
            htmlFor="groupOfActivity"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Group of Activity:
          </label>
          <input
            type="text"
            name="groupOfActivity"
            value={formData.groupOfActivity}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="mr-4 flex-3">
          <label
            htmlFor="classeOfTax"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Classe of Tax:
          </label>
          <input
            type="text"
            name="classeOfTax"
            value={formData.classeOfTax}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="flex-3">
          <label
            htmlFor="subclasse"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Subclasse:
          </label>
          <input
            type="text"
            name="subclasse"
            value={formData.subclasse}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
      </div>

      {/* Add more fields similarly */}

      <button
        type="submit"
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default MyTradingLicenseForm;
