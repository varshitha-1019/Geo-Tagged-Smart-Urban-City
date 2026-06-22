import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Urban Monitor</h2>
      </div>

      <nav className="sidebar-menu">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/complaints"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Complaints
        </NavLink>

        <NavLink
          to="/authorities"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Authorities
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Analytics
        </NavLink>

        <NavLink
          to="/map"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Map View
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Reports
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "menu-link active" : "menu-link"
          }
        >
          Settings
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;