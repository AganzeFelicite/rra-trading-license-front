import React, { useContext, useState } from "react";
import useFetch from "../Hooks/useFetch";
import { UserContext } from "../Auth/UserAuth";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
});

const MyDeclarations = () => {
  const url = "http://127.0.0.1:8080/api/v1/declarations";
  const { data, isPending, error } = useFetch(url);
  const { userInfo } = useContext(UserContext);
  const [selectedDeclaration, setSelectedDeclaration] = useState(null);
  const handlePdfGenerate = (declaration) => {
    setSelectedDeclaration(declaration);
  };

  const DeclarationPDF = ({ declaration }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Declaration Details</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Document No</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.documentNo}</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Company Name</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.companyName}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Tax Period</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.taxPeriod}</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Due Date</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.dueDate}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Year</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.year}</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Status</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.status}</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Acknowledgement</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.acknowlegement}</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Tax To Be Paid</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>{declaration.taxTobePaid}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

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
                  pdf
                </th>
                <th className="w-1/14 px-4 py-2" data-column="Actions">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (declaration, index) =>
                  // Use parentheses for conditional rendering
                  declaration.tinNo === userInfo.tinNo && (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : ""}
                    >
                      <td className="border px-4 py-2" data-column="SL No">
                        {index + 1}
                      </td>
                      <td
                        className="border px-4 py-2"
                        data-column="Document No"
                      >
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
                      <td
                        className="border px-4 py-2"
                        data-column="Tax To Be Paid"
                      >
                        {declaration.taxTobePaid}
                      </td>
                      <td className="border px-4 py-2" data-column="TIN">
                        {declaration.tinNo}
                      </td>
                      <td
                        className="border px-4 py-2"
                        data-column="National ID"
                      >
                        {declaration.nationalId}
                      </td>
                      <td className="border px-4 py-2" data-column="Turnover">
                        {declaration.turnOver}
                      </td>
                      <td className="border px-4 py-2" data-column="Actions">
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-1"
                          onClick={() => handlePdfGenerate(declaration)}
                        >
                          Generate PDF
                        </button>
                      </td>
                      <td
                        className="border px-4 py-2"
                        data-column="Actions"
                      ></td>
                    </tr>
                  )
              )}
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
      {selectedDeclaration && (
        <div className="pdf-download">
          <PDFDownloadLink
            document={<DeclarationPDF declaration={selectedDeclaration} />}
            fileName="declaration.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default MyDeclarations;
