import "./Home.css";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaUserCheck,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  // Smooth scroll handler function for the navbar
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <FaMapMarkedAlt className="logo-icon" />
          <div>
            <h2>Smart Urban</h2>
            <p>Geo-Tagged Monitoring</p>
          </div>
        </div>

        <ul className="nav-links">
          {/* Added smooth navigation anchor click handler */}
          <li onClick={() => scrollToSection("features")}>Features</li>
          <li onClick={() => scrollToSection("workflow")}>Workflow</li>
          <li onClick={() => scrollToSection("impact")}>Impact</li>
          {/* MODIFIED: Added direct page routing navigation to the contact page */}
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/register")}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-left">
          <span className="badge">AI + Geo Intelligence</span>
          <h1>
            Smart City <br />
            Issue Monitoring
          </h1>
          <p>
            Detect. Track. Resolve. Faster urban issue management using AI and Geo-Tagging.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => navigate("/report")}>
              Report Issue
              <FaArrowRight />
            </button>
            <button className="track-btn" onClick={() => navigate("/track")}>
              Track Issue
            </button>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>95%</h3>
              <p>Accuracy</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Active</p>
            </div>
            <div className="stat">
              <h3>Real-time</h3>
              <p>Tracking</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="card">
            <div className="card-header">
              <FaRobot />
              <h3>AI Monitoring</h3>
            </div>
            <p>Automatic issue classification and routing</p>

            <div className="card-grid">
              <div className="mini-card">
                <FaShieldAlt />
                <span>Secure</span>
              </div>
              <div className="mini-card">
                <FaMapMarkedAlt />
                <span>Geo</span>
              </div>
              <div className="mini-card">
                <FaChartLine />
                <span>Live</span>
              </div>
              <div className="mini-card">
                <FaUserCheck />
                <span>Assigned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION (Targeted for navigation) ================= */}
      <section id="features" className="features">
        <h2>Core Features</h2>
        <p>AI powered urban management system</p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-card-glow-edge" />
            <h3>AI Classification</h3>
            <p>Automatic computer-vision analysis to categorize and prioritize infrastructural issues without human intervention.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card-glow-edge" />
            <h3>Geo Tagging</h3>
            <p>Captures exact geographical metadata and spatial coordinates to eliminate location ambiguity for workers.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card-glow-edge" />
            <h3>Authority Mapping</h3>
            <p>Intelligent backend routing mechanics pass telemetry data instantly to corresponding municipal zone offices.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card-glow-edge" />
            <h3>Live Tracking</h3>
            <p>Complete dashboard lifecycle data transparency from 'Reported' to 'Assigned' and 'Resolved'.</p>
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW SECTION ================= */}
      <section id="workflow" className="workflow">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Report Issue</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>AI Detects</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Assign Authority</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Resolve</p>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section id="impact" className="impact">
        <h2>Project Impact</h2>
        <div className="impact-grid">
          <div className="impact-box">
            <h3>1000+</h3>
            <p>Issues Reported</p>
          </div>
          <div className="impact-box">
            <h3>850+</h3>
            <p>Resolved</p>
          </div>
          <div className="impact-box">
            <h3>50+</h3>
            <p>Departments</p>
          </div>
          <div className="impact-box">
            <h3>98%</h3>
            <p>Satisfaction</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <h3>Smart Urban System</h3>
        <p>AI + Geo Intelligence for better cities</p>
      </footer>

    </div>
  );
};

export default Home;