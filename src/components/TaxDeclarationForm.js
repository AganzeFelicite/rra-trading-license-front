import React, { useState, useEffect } from "react";

const TradingLicenseDeclaration = ({ declaration }) => {
  const [fiscalYear, setFiscalYear] = useState(2024);
  const [vatTurnover, setVatTurnover] = useState(0);
  const [taxDue, setTaxDue] = useState(20000);
  const [month, setMonth] = useState("December");
  const [entriesTrue, setEntriesTrue] = useState(true);
  const [token, setToken] = useState(null);
  const [understandProsecution, setUnderstandProsecution] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const calculateTaxDue = () => {
    let calculatedTaxDue;
    let tempVatTurnover = vatTurnover;
    console.log(declaration);
    // const taxBrackets = [
    //   { threshold: 20000000, rate: 0.03 },
    //   { threshold: 60000000, rate: 0.15 },
    //   { threshold: Infinity, rate: 0.18 },
    // ];

    if (tempVatTurnover < 2000000) {
      calculatedTaxDue = 30000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (tempVatTurnover >= 2000000 && tempVatTurnover <= 7000000) {
      calculatedTaxDue = 100000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (tempVatTurnover >= 7000001 && tempVatTurnover <= 12000000) {
      calculatedTaxDue = 120000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (tempVatTurnover >= 12000001 && tempVatTurnover <= 20000000) {
      calculatedTaxDue = 160000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (tempVatTurnover >= 20000001 && tempVatTurnover <= 200000000) {
      calculatedTaxDue = 280000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (tempVatTurnover >= 200000001 && tempVatTurnover <= 1000000000) {
      calculatedTaxDue = 500000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (
      tempVatTurnover >= 1000000001 &&
      tempVatTurnover <= 25000000000
    ) {
      calculatedTaxDue = 1000000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (
      tempVatTurnover >= 25000000001 &&
      tempVatTurnover <= 50000000000
    ) {
      calculatedTaxDue = 1500000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else if (tempVatTurnover >= 50000000001) {
      calculatedTaxDue = 2000000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    } else {
      calculatedTaxDue = 30000;
      setTaxDue(`${calculatedTaxDue}   rwf`);
      return;
    }
  };
  const handleCalculateTax = () => {
    calculateTaxDue();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure declaration object is defined and contains necessary properties
    if (!declaration || !declaration.id || !taxDue || !vatTurnover) {
      console.error("Declaration object or its properties are missing");
      return;
    }

    // Update declaration object with new properties
    declaration.taxTobePaid = parseFloat(taxDue);
    declaration.turnOver = parseFloat(vatTurnover);

    try {
      console.log(JSON.stringify(declaration));
      const response = await fetch(
        `http://127.0.0.1:8080/api/v1/update-declaration/${declaration.id}`,
        {
          method: "PUT", // Assuming you're using PUT method for updating
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(declaration),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        setIsLoading(false);
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
    <div className="bg-yellow-100 p-2">
      <h2 className="text-green-900 mb-4">Trading License Declaration</h2>
      <div className="mb-4">
        <label className="block text-green-900 font-bold mb-2">
          5-Fiscal Year
        </label>
        <input
          type="number"
          value={fiscalYear}
          onChange={(e) => setFiscalYear(e.target.value)}
          className="border-2 border-green-900 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-green-900 font-bold mb-2">
          10-Annual VAT turnover
        </label>
        <input
          type="number"
          value={vatTurnover}
          onChange={(e) => setVatTurnover(e.target.value)}
          className="border-2 border-green-900 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-green-900 font-bold mb-2">
          20-Tax Due
        </label>
        <input
          type="text"
          value={taxDue}
          onChange={(e) => setTaxDue(e.target.value)}
          className="border-2 border-green-900 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-green-900 font-bold mb-2">25-Month</label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border-2 border-green-900 p-2 w-full"
        >
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={entriesTrue}
          onChange={(e) => setEntriesTrue(e.target.checked)}
          className="mr-2"
        />
        <label className="text-green-900">
          I Certify that the entries on this declaration are true and correct
        </label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={understandProsecution}
          onChange={(e) => setUnderstandProsecution(e.target.checked)}
          className="mr-2"
        />
        <label className="text-green-900">
          I understand that a false declaration may result in prosecution
        </label>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleCalculateTax}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Calculate Tax
        </button>
        {!isLoading ? (
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            saving ...
          </button>
        )}
      </div>
    </div>
  );
};

export default TradingLicenseDeclaration;
