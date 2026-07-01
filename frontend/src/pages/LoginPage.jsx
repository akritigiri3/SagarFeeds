import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api.js";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", formData);
      alert("Login successful!");
      console.log("Logged in user:", res.data.user);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Invalid email or password.");
    }
  };

  return (
    <main className="auth-only">
      <div className="auth-card-container">
        <aside className="auth-card">
          <h2>Welcome back</h2>
          <p className="muted">Sign in to your account to continue</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              <b>Email address</b>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <b>Password</b>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>

            <label className="checkbox-row">
              <input type="checkbox" /> Remember me for 30 days
            </label>

            <button className="form-button">Sign In →</button>

            <div className="auth-alt">
              <p>
                Don't have an account? <Link to="/register">Create one</Link>
              </p>
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
}

export default LoginPage;
