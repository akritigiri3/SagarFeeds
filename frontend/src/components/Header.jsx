import { NavLink } from "react-router-dom";
import { assets, navLinks } from "../content.js";

function Header() {
  // Keep main links separate from auth links so auth links can be right-aligned
  const primaryLinks = navLinks.filter(([, path]) => path !== "/login" && path !== "/register");
  const authLinks = navLinks.filter(([, path]) => path === "/login" || path === "/register");

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Sagar Feeds home">
        <img src={assets.logo} alt="Sagar Feeds" />
      </NavLink>

      <nav aria-label="Main navigation" className="main-nav">
        {primaryLinks.map(([label, path]) => (
          <NavLink key={path} to={path} end={path === "/"}>
            {label}
          </NavLink>
        ))}
      </nav>

      <nav aria-label="Auth navigation" className="auth-nav">
        {authLinks.map(([label, path]) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
