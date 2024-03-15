import React from "react";
import "./App.css";
import AdminDashBoard from "./components/AdminDashBoard";
import Header from "./components/Header";
import MyTradingLisenceForm from "./components/TradinLisenceForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <div className="dashboard-column">
          <AdminDashBoard />
        </div>
        <div className="form-column">
          <MyTradingLisenceForm />
        </div>
      </div>
    </div>
  );
}

export default App;
