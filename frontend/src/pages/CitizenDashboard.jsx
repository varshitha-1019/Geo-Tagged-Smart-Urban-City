import React from "react";

const CitizenDashboard = () => {
  const complaints = [
    {
      id: "CMP001",
      issue: "Garbage Overflow",
      status: "Pending",
      date: "20-06-2026",
    },
    {
      id: "CMP002",
      issue: "Road Pothole",
      status: "In Progress",
      date: "18-06-2026",
    },
    {
      id: "CMP003",
      issue: "Street Light Fault",
      status: "Resolved",
      date: "15-06-2026",
    },
  ];

  return (
    <div className="citizen-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Citizen Dashboard</h1>
        <p>Welcome back! Monitor and manage your reported issues.</p>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>12</h2>
          <p>Total Complaints</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Pending</p>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <p>In Progress</p>
        </div>

        <div className="stat-card">
          <h2>5</h2>
          <p>Resolved</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button>+ Report New Issue</button>
        <button>Track Complaints</button>
      </div>

      {/* Recent Complaints */}
      <div className="complaints-section">
        <h2>Recent Complaints</h2>

        <table>
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>Issue Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.id}</td>
                <td>{complaint.issue}</td>
                <td>
                  <span
                    className={`status ${complaint.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {complaint.status}
                  </span>
                </td>
                <td>{complaint.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CitizenDashboard;