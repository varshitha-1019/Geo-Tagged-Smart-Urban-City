import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaMapMarkedAlt,
  FaRobot,
  FaUsersCog,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "citizen", // Default tier from abstract
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Data: ", formData);
    // On success, route them over to login
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        
        {/* Left Side: Premium Tech Display */}
        <div className="register-left">
          <button className="back-btn" onClick={() => navigate("/")}>
            <FaArrowLeft /> Home
          </button>

          <div className="brand">
            <FaMapMarkedAlt className="brand-icon" />
            <h1>Smart Urban</h1>
            <p>Geo-Tagged Infrastructure Monitoring</p>
          </div>

          <div className="project-features">
            <div className="feature-item">
              <FaRobot className="feat-icon" />
              <div>
                <h4>Decentralized Reporting</h4>
                <p>Empowering citizens with geo-spatial image uploads for urban transparency.</p>
              </div>
            </div>
            <div className="feature-item">
              <FaUsersCog className="feat-icon" />
              <div>
                <h4>Multi-Tier Governance</h4>
                <p>Isolated workflows mapped perfectly for citizens, triage authorities, and admins.</p>
              </div>
            </div>
          </div>

          <div className="left-footer">
            <h2>Create Account</h2>
            <p className="subtitle">
              Join the technology-driven smart governance platform.
            </p>
          </div>
        </div>

        {/* Right Side: Frosted Cyber Registration Card */}
        <div className="register-right">
          <form className="register-card" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <p>Register your credentials to get started</p>

            {/* Full Name Field */}
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
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

            {/* Role/Account Type Dropdown (From Abstract Specs) */}
            <div className="input-group">
              <label>Account Tier</label>
              <div className="input-box">
                <FaUsersCog />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="role-select"
                >
                  <option value="citizen">Citizen (Public Reporter)</option>
                  <option value="authority">Department Authority (Resolver)</option>
                  <option value="admin">System Administrator (Overseer)</option>
                </select>
              </div>
            </div>

            {/* Password Field */}
            <div className="input-group">
              <label>Password</label>
              <div className="input-box">
                <FaLock />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="input-group">
              <label>Confirm Password</label>
              <div className="input-box">
                <FaLock />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span className="eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="register-submit-btn">
              Register System User
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <p className="login-redirect-text">
              Already have an account?
              <span onClick={() => navigate("/login")}> Login Here</span>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;