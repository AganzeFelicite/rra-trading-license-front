import React from "react";

const AdminDashBoard = () => {
  return (
    <div className="dashboard">
      <header className="bg-#022c22 text-white py-5">Dashboard</header>
      <nav className="bg-#022c22 text-white py-3">
        <ul className="list-none">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </nav>
      <main className="bg-white py-5">
        <h1>Content</h1>
        <p>This is the main content of the dashboard.</p>
      </main>
    </div>
  );
};

export default AdminDashBoard;
