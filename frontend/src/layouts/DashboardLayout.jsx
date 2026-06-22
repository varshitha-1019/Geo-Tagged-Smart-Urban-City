import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <h2>Urban Monitor</h2>
        </div>

        <nav className="sidebar-nav">
          <a href="/">Dashboard</a>
          <a href="/">Complaints</a>
          <a href="/">Analytics</a>
          <a href="/">Authorities</a>
          <a href="/">Map View</a>
          <a href="/">Settings</a>
        </nav>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-header">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <div className="header-content">
            <h3>Geo-Tagged Smart Urban Infrastructure Monitoring System</h3>

            <div className="user-profile">
              <span>Admin</span>
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;