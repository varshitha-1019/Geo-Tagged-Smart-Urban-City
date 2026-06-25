import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';

const Features = () => {
  const navigate = useNavigate();

  const featureList = [
    {
      icon: "🤖",
      title: "AI Monitoring & Classification",
      description: "Automatic computer-vision analysis of reported images. The system instantly categorizes, identifies severity levels, and tags infrastructural anomalies without human intervention."
    },
    {
      icon: "📍",
      title: "Precision Geo-Tagging",
      description: "Embedded GIS mapping strings lock exact geographical coordinates on submission. Provides field workers with interactive pinpoint maps to eliminate location ambiguity."
    },
    {
      icon: "📊",
      title: "Real-Time Tracking Engine",
      description: "Complete transparent issue lifecycle tracking from 'Reported' to 'Assigned' and 'Resolved'. Citizens and city admins receive instant dynamic data refreshes."
    },
    {
      icon: "🛡️",
      title: "Automated Secured Routing",
      description: "Intelligent backend routing mechanics pass telemetry data instantly to corresponding municipal zone offices, maximizing team deployment speed and operational security."
    }
  ];

  return (
    <section id="features" className="features-section">
      {/* ADDED TOP STICKY HEADER NAVIGATION BAR */}
      <nav className="features-nav">
        <div className="features-nav-brand" onClick={() => navigate('/')}>
          <span className="nav-brand-icon">🏙️</span>
          <div>
            <h3>Smart Urban</h3>
            <p>Geo-Tagged Monitoring</p>
          </div>
        </div>
        <button className="nav-back-home-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </nav>

      <div className="features-container">
        <div className="features-header">
          <span className="features-badge">AI + Geo Intelligence Capabilities</span>
          <h2>Platform Core Features</h2>
          <p>
            An interconnected system optimized with automated routing layers to drastically accelerate 
            urban issue resolution matrix frameworks.
          </p>
        </div>

        <div className="features-card-grid">
          {featureList.map((feat, idx) => (
            <div key={idx} className="feature-interactive-card">
              <div className="feature-icon-wrapper">
                <span className="feature-emoji-icon">{feat.icon}</span>
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
              <div className="feature-card-glow-edge" />
            </div>
          ))}
        </div>

        <div className="features-metrics-bar">
          <div className="metric-item">
            <h4>95%</h4>
            <p>AI Classification Accuracy</p>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <h4>24/7</h4>
            <p>Active System Uptime</p>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <h4>Real-time</h4>
            <p>Spatial Tracking Updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;