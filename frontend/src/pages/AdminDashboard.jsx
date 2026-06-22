import React from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const departments = [
    {
      id: 1,
      department: "Municipality",
      issues: 124,
      resolved: 98,
    },
    {
      id: 2,
      department: "Roads & Buildings",
      issues: 86,
      resolved: 70,
    },
    {
      id: 3,
      department: "Water Supply",
      issues: 54,
      resolved: 42,
    },
    {
      id: 4,
      department: "Electricity",
      issues: 39,
      resolved: 31,
    },
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Monitor departments, authorities, complaints, and system activity.</p>
        </div>

        <button className="admin-btn">
          Generate Report
        </button>
      </div>

      <div className="admin-stats">
        <div className="admin-card total">
          <h2>325</h2>
          <p>Total Complaints</p>
        </div>

        <div className="admin-card users">
          <h2>1,240</h2>
          <p>Registered Citizens</p>
        </div>

        <div className="admin-card authorities">
          <h2>42</h2>
          <p>Authorities</p>
        </div>

        <div className="admin-card resolved">
          <h2>241</h2>
          <p>Resolved Issues</p>
        </div>
      </div>

      <div className="admin-content">
        <div className="department-section">
          <div className="section-title">
            <h2>Department Performance</h2>

            <input
              type="text"
              placeholder="Search Department..."
            />
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Department</th>
                  <th>Total Issues</th>
                  <th>Resolved</th>
                  <th>Efficiency</th>
                </tr>
              </thead>

              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.id}>
                    <td>{dept.id}</td>
                    <td>{dept.department}</td>
                    <td>{dept.issues}</td>
                    <td>{dept.resolved}</td>
                    <td>
                      {Math.round(
                        (dept.resolved / dept.issues) * 100
                      )}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-side">
          <div className="side-card">
            <h3>Complaint Categories</h3>

            <div className="category">
              <span>Waste Management</span>
              <span>38%</span>
            </div>

            <div className="category">
              <span>Road Damage</span>
              <span>30%</span>
            </div>

            <div className="category">
              <span>Water Issues</span>
              <span>20%</span>
            </div>

            <div className="category">
              <span>Street Lights</span>
              <span>12%</span>
            </div>
          </div>

          <div className="side-card">
            <h3>System Overview</h3>

            <div className="overview-box">
              Analytics & Charts Area
            </div>
          </div>

          <div className="side-card">
            <h3>Geo Map</h3>

            <div className="map-box">
              Map Integration Area
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;