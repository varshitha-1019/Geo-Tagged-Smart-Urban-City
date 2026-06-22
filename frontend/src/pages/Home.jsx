import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">

          <span className="logo-icon">🌍</span>

          <h2>Smart Urban AI</h2>

        </div>

        <ul className="nav-links">

          <li><a href="/">Home</a></li>

          <li><a href="/">Features</a></li>

          <li><a href="/">Services</a></li>

          <li><a href="/">Contact</a></li>

        </ul>

        <div className="nav-buttons">

          <button className="login-btn">
            Login
          </button>

          <button className="register-btn">
            Register
          </button>

        </div>

      </nav>


      {/* Hero Section */}

      <section className="hero">

        <div className="hero-left">

          <span className="badge">

            AI Powered Smart City Platform

          </span>

          <h1>

            Geo-Tagged Smart Urban Infrastructure Monitoring System

          </h1>

          <p>

            Report waste, potholes, drainage issues, water leakage,
            streetlight failures and other civic problems using
            AI-powered image analysis and GPS-enabled issue tracking.

            Empower citizens and help government departments
            resolve issues faster through an intelligent dashboard.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Report an Issue

            </button>

            <button className="secondary-btn">

              Learn More

            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="circle one"></div>

          <div className="circle two"></div>

          <div className="circle three"></div>

          <div className="dashboard-card">

            <h3>Live Monitoring</h3>

            <p>✔ AI Issue Detection</p>

            <p>✔ GPS Mapping</p>

            <p>✔ Complaint Tracking</p>

            <p>✔ Authority Dashboard</p>

          </div>

        </div>

      </section>


      {/* Statistics */}

      <section className="stats">

        <div className="stat-card">

          <h2>10K+</h2>

          <p>Citizens Connected</p>

        </div>

        <div className="stat-card">

          <h2>95%</h2>

          <p>AI Detection Accuracy</p>

        </div>

        <div className="stat-card">

          <h2>24×7</h2>

          <p>Issue Monitoring</p>

        </div>

        <div className="stat-card">

          <h2>100+</h2>

          <p>Government Departments</p>

        </div>

      </section>

    </div>
  );
}

export default Home;