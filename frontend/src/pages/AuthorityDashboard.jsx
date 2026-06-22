import React from "react";
import "./AuthorityDashboard.css";

const AuthorityDashboard = () => {
  const complaints = [
    {
      id: "CMP001",
      category: "Waste",
      location: "Madhapur",
      status: "Pending",
      date: "21-06-2026",
    },
    {
      id: "CMP002",
      category: "Road Damage",
      location: "Kukatpally",
      status: "In Progress",
      date: "20-06-2026",
    },
    {
      id: "CMP003",
      category: "Water Leakage",
      location: "Uppal",
      status: "Resolved",
      date: "19-06-2026",
    },
    {
      id: "CMP004",
      category: "Street Light",
      location: "LB Nagar",
      status: "Pending",
      date: "18-06-2026",
    },
  ];

  return (
    <div className="authority-dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Authority Dashboard</h1>
          <p>Monitor and manage citizen reported issues.</p>
        </div>

        <button className="refresh-btn">Refresh</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card total">
          <h2>124</h2>
          <p>Total Complaints</p>
        </div>

        <div className="stat-card pending">
          <h2>42</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card progress">
          <h2>38</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card resolved">
          <h2>44</h2>
          <p>Resolved</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="complaints-section">
          <div className="section-header">
            <h2>Recent Complaints</h2>

            <div className="filters">
              <select>
                <option>All Categories</option>
                <option>Waste</option>
                <option>Road Damage</option>
                <option>Water Leakage</option>
                <option>Street Light</option>
              </select>

              <input
                type="text"
                placeholder="Search Complaint ID..."
              />
            </div>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {complaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td>{complaint.id}</td>
                    <td>{complaint.category}</td>
                    <td>{complaint.location}</td>
                    <td>{complaint.date}</td>
                    <td>
                      <span
                        className={`status ${complaint.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {complaint.status}
                      </span>
                    </td>
                    <td>
                      <button className="view-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="side-panel">
          <div className="panel-card">
            <h3>Issue Distribution</h3>

            <div className="distribution">
              <div className="item">
                <span>Waste</span>
                <span>40%</span>
              </div>

              <div className="item">
                <span>Roads</span>
                <span>30%</span>
              </div>

              <div className="item">
                <span>Water</span>
                <span>20%</span>
              </div>

              <div className="item">
                <span>Street Lights</span>
                <span>10%</span>
              </div>
            </div>
          </div>

          <div className="panel-card">
            <h3>Map Overview</h3>
            <div className="map-placeholder">
              Map Integration Area
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;