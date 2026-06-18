import { NavLink } from "react-router-dom";
import { assets, navLinks } from "../content.js";

function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Sagar Feeds home">
        <img src={assets.logo} alt="Sagar Feeds" />
      </NavLink>
      <nav aria-label="Main navigation">
        {navLinks.map(([label, path]) => (
          <NavLink key={path} to={path} end={path === "/"}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
