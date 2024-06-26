import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";

function sendEmail(to, password, userName) {
  const emailData = {
    to: to,
    subject: "Your New Password FROM RRA",
    body: `
      Dear ${userName},

      We're excited to inform you that your new password has been successfully generated! Here are the details:

      New Password: ${password}

      You can now use this password to login to your account. For security purposes, we require you to change your password on your first login.

      Upon logging in, you'll be prompted to change your password. Please ensure to choose a strong and unique password for your account.

      If you have any questions or need assistance, feel free to reach out to our support team.

      Happy browsing!

      Best regards,
      The Management Team
    `,
  };
  fetch("http://localhost:8080/api/v1/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

const MyTradingLicenseForm = () => {
  const [isloading, setIsLoading] = useState(false);
  const url = "http://127.0.0.1:8080/api/v1/tinNo";
  const { data, isPending, error } = useFetch(url);
  const [formData, setFormData] = useState({
    tinNo: "",
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
    email: "",
    phoneNumber: "",
    names: "",
    password: "",
    firstLogin: true,
  });

  console.log(data);
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
        "http://127.0.0.1:8080/api/v1/trading-lisence-users/register",
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
        sendEmail(formData.email, formData.password, formData.names);
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
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
      <div className="font-semibold p-2">
        <h3>Trading License Registration</h3>
      </div>
      <div className="flex justify-center items-center flex-wrap mb-4">
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="tinNo"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            TIN No:
          </label>
          <input
            type="text"
            name="tinNo"
            value={(formData.tinNo = data)}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded cursor-not-allowed disabled bg-gray-200
           
            cursor-not-allowed
            readonly"
            disabled
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
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
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="iscicode"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            ISCICODE:
          </label>
          <input
            type="text"
            name="iscicode"
            value={formData.iscicode}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="province"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Province:
          </label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="district"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            District:
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="sector"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Sector:
          </label>
          <input
            type="text"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="cell"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Cell:
          </label>
          <input
            type="text"
            name="cell"
            value={formData.cell}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="village"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Village:
          </label>
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="mainBranchAndUnitName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Main Branch and Unit Name:
          </label>
          <input
            type="text"
            name="mainBranchAndUnitName"
            value={formData.mainBranchAndUnitName}
            onChange={handleChange}
            className="block w -full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="streetName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Street Name:
          </label>
          <input
            type="text"
            name="streetName"
            value={formData.streetName}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="houseNo"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            House No:
          </label>
          <input
            type="text"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="doorNo"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Door No:
          </label>
          <input
            type="text"
            name="doorNo"
            value={formData.doorNo}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="annualTurnover"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Annual Turnover:
          </label>
          <input
            type="text"
            name="annualTurnover"
            value={formData.annualTurnover}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="netCapitalInvested"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Net Capital Invested:
          </label>
          <input
            type="text"
            name="netCapitalInvested"
            value={formData.netCapitalInvested}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="numberOfEmployees"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Number of Employees:
          </label>
          <input
            type="text"
            name="numberOfEmployees"
            value={formData.numberOfEmployees}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="registrationDate"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Registration Date:
          </label>
          <input
            type="text"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="upiNo"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            UPI No:
          </label>
          <input
            type="text"
            name="upiNo"
            value={formData.upiNo}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>

        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="branch"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Branch:
          </label>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="names"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Names:
          </label>
          <input
            type="text"
            name="names"
            value={formData.names}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full p-2 border border-green-500 rounded"
          />
        </div>
        <div className="w-full lg:w-1/3 p-2">
          <label
            htmlFor="isExempted"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Is Exempted:
          </label>
          <input
            type="checkbox"
            name="isExempted"
            checked={formData.isExempted}
            onChange={handleChange}
            className="block"
          />
        </div>
      </div>
      {isloading && (
        <button className="mt-4 p-2 bg-green-700 text-yellow-400 rounded ">
          loading .....
        </button>
      )}
      <button
        type="submit"
        className="mt-4 p-2 bg-green-700 text-yellow-400 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default MyTradingLicenseForm;
