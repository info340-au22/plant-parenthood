// NAV BAR, ERIC
import React from "react"; //import React library
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Button } from "./Button";

export default function Nav(props) {
  const currentUser = props.currentUser;
  return (
    <nav className="navnav">
      <div className="nav-left">
        <Link to="/" className="site-logo">
          <img src="../img/plant-logo-full.png" alt="logo"></img>
        </Link>
        <ul>
          <CustomLink key="home" to="/">Home</CustomLink>
          <CustomLink key="compare" to="/ComparisonPage">Comparison</CustomLink>
        </ul>
      </div>
      {currentUser.uid && 
        <>
          <Link to="/ProfilePage" aria-label="profilePage">
            <img
              className="pp"
              src={currentUser.imgProfile}
              alt="profile picture"
            />
          </Link>
        </>
      }
      {!currentUser.uid && 
        <>
          <Link to="/SignIn">
            <Button classStyle="signin-button" text="Sign In"/>
          </Link>
        </>
      }
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
