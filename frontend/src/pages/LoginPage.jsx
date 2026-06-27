import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <main className="auth-only">
      <div className="auth-card-container">
        <aside className="auth-card">
          <h2>Welcome back</h2>
          <p className="muted">Sign in to your account to continue</p>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <b>Email address</b>
              <input type="email" placeholder="you@example.com" />
            </label>

            <label>
              <b>Password</b>
              <input type="password" placeholder="********" />
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
