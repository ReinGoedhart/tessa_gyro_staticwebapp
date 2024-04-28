import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Gyro
      </Link>
      <ul>
        <CustomLink to="/dansblok">Dansblok</CustomLink>
        <CustomLink to="/gallery">Gallery</CustomLink>
        <CustomLink to="/calender">Calender</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
