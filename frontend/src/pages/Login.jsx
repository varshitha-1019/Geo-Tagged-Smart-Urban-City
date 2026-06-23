import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaMapMarkedAlt,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Temporary navigation
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        
        {/* Left Side: Premium Tech Display */}
        <div className="login-left">
          <button className="back-btn" onClick={() => navigate("/")}>
            <FaArrowLeft /> Home
          </button>

          <div className="brand">
            <FaMapMarkedAlt className="brand-icon" />
            <h1>Smart Urban</h1>
            <p>Geo-Tagged Infrastructure Monitoring</p>
          </div>

          {/* New Interactive Concept Cards to fill the space intelligently */}
          <div className="project-features">
            <div className="feature-item">
              <FaRobot className="feat-icon" />
              <div>
                <h4>AI Issue Classification</h4>
                <p>Automated deep learning multi-class categorization from image streams.</p>
              </div>
            </div>
            <div className="feature-item">
              <FaMapMarkedAlt className="feat-icon" />
              <div>
                <h4>Live Authority Mapping</h4>
                <p>Instant location intelligence and algorithmic department routing.</p>
              </div>
            </div>
          </div>

          <div className="left-footer">
            <h2>Welcome Back</h2>
            <p className="subtitle">
              Login to continue managing smart city issues.
            </p>
          </div>
        </div>

        {/* Right Side: Clean Form */}
        <div className="login-right">
          <form className="login-card" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <p>Access your account</p>

            <div className="input-group">
              <label>Email Address</label>
              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-box">
                <FaLock />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <span>Remember Me</span>
              </label>

              <button type="button" className="forgot-btn">
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="login-submit-btn">
              Login
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <p className="signup-text">
              Don't have an account?
              <span onClick={() => navigate("/register")}> Sign Up</span>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;