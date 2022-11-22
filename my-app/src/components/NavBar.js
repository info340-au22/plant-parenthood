// NAV BAR, ERIC
import React from 'react'; //import React library
import { Link, useMatch, useResolvedPath} from "react-router-dom"


export function NavBar() {
    return (
      <nav className="navnav">
        <Link to="/" className="site-logo">
          Logo
        </Link>
        <ul>
         <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/ComparisonPage">Comparison</CustomLink>
          </ul>
          <ul>
          <CustomLink to="/ProfilePage">Profile</CustomLink>
        </ul>
      </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }