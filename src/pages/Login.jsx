import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

// Demo credentials for front-end-only deployments (e.g., GitHub Pages)
const DEMO_USER = { username: "demo", password: "demo123" };

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // 1) Front-end-only demo mode: hardcoded credentials
    if (form.username === DEMO_USER.username && form.password === DEMO_USER.password) {
      localStorage.setItem("token", "DEMO_TOKEN");
      localStorage.setItem("username", form.username);
      navigate("/dashboard");
      return;
    }

    // 2) Fallback to real backend login when available
    try {
      const res = await axios.post("http://localhost:8081/auth/login", form);
      localStorage.setItem("token", res.data);
      localStorage.setItem("username", form.username);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials. For demo, use username: demo and password: demo123.");
    }
  };

  return (
    <div className="auth-container travel-theme">
      <div className="auth-box">
        <h2>Login to TravelEase</h2>
        <p className="demo-hint">Demo login: <strong>demo</strong> / <strong>demo123</strong></p>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username"
                 onChange={(e) => setForm({ ...form, username: e.target.value })} required />
          <input type="password" placeholder="Password"
                 onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          <button type="submit">Login</button>
        </form>
        <p>New traveler? <Link to="/signup">Register here</Link></p>
      </div>
    </div>
  );
}
