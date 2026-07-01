import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api.js";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await api.post("/auth/register", formData);
      alert("Account created successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="auth-only register-page">
      <div className="auth-card-container">
        <aside className="auth-card">
          <h2>Create an account</h2>
          <p className="muted">Join the Sagar Feed dealer & farmer network</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              <b>Full Name</b>
              <input
                type="text"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>

            <div className="two-col">
              <label>
                <b>Email</b>
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
                <b>Phone</b>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+977-XXX-XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              <b>I am a</b>
              <select name="role" value={formData.role} onChange={handleChange} required>
                <option value="">Select your role</option>
                <option value="Dealer">Dealer</option>
                <option value="Farmer">Farmer</option>
              </select>
            </label>

            <label>
              <b>Password</b>
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <b>Confirm Password</b>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />{" "}
              I agree to the Terms of Service and Privacy Policy
            </label>

            <button className="form-button">Create Account →</button>

            <div className="auth-alt">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </form>
        </aside>
      </div>
    </main>
  );
}

export default RegisterPage;
