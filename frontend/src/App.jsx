import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />
        
        {/* Registration Page Route */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;