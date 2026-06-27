import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <main className="auth-only register-page">
      <div className="auth-card-container">
        <aside className="auth-card">
          <h2>Create an account</h2>
          <p className="muted">Join the Sagar Feed dealer & farmer network</p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <b>Full Name</b>
              <input type="text" placeholder="Your full name" />
            </label>

            <div className="two-col">
              <label>
                <b>Email</b>
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                <b>Phone</b>
                <input type="tel" placeholder="+977-XXX-XXXX" />
              </label>
            </div>

            <label>
              <b>I am a</b>
              <select>
                <option>Select your role</option>
                <option>Dealer</option>
                <option>Farmer</option>
              </select>
            </label>

            <label>
              <b>Password</b>
              <input type="password" placeholder="Create a strong password" />
            </label>

            <label>
              <b>Confirm Password</b>
              <input type="password" placeholder="Repeat your password" />
            </label>

            <label className="checkbox-row">
              <input type="checkbox" /> I agree to the Terms of Service and Privacy Policy
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
