import React, { useState } from "react";

const DeclarationForm = () => {
  const [isloading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [formData, setFormData] = useState({
    TIN: "",
    NID: "",
    taxpayerOrCompanyName: "",
    taxType: "",
    year: "",
    declarationOptions: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://example.com/api/declaration/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Form submitted successfully!");
        setIsLoading(false);
        setIsSubmited(true);
      } else {
        console.error("Failed to submit form");
        setIsLoading(false);
      }
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
                name="TIN"
                value={formData.TIN}
                onChange={handleChange}
                className="block w-full p-2 border border-green-500 rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 p-2">
              <label
                htmlFor="NID"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                NID:
              </label>
              <input
                type="text"
                name="NID"
                value={formData.NID}
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
                name="taxpayerOrCompanyName"
                value={formData.taxpayerOrCompanyName}
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
        <div>
          <table class="table-fixed">
            <thead>
              <tr>
                <th class="w-1/4 px-4 py-2">SL no</th>
                <th class="w-1/4 px-4 py-2">Document No</th>
                <th class="w-1/4 px-4 py-2">Declaration For</th>
                <th class="w-1/4 px-4 py-2">Tax Period</th>
                <th class="w-1/4 px-4 py-2">Duedate</th>
                <th class="w-1/4 px-4 py-2">year</th>
                <th class="w-1/4 px-4 py-2">Status</th>
                <th class="w-1/4 px-4 py-2">Acknowldgement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">Intro to CSS</td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">858</td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
              </tr>
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td class="border px-4 py-2">Adam</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
                <td class="border px-4 py-2">112</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DeclarationForm;
