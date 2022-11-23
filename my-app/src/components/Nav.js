// NAV BAR, ERIC
import React from "react"; //import React library
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav() {
  const currentUser = {
    imgProfile: "../img/profile-pic.png",
    userName: "Jane Doe",
  };
  return (
    <nav className="navnav">
      <div className="nav-left">
        <Link to="/" className="site-logo">
          <img src="../img/plant-logo-full.png" alt="logo"></img>
        </Link>
        <ul>
          <CustomLink to="/ComparisonPage">Comparison</CustomLink>
        </ul>
      </div>
      <Link to="/ProfilePage">
        <img
          className="pp"
          src={currentUser.imgProfile}
          alt="profile picture"
        />
      </Link>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link className="navLink" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
