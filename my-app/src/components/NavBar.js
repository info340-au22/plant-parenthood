// NAV BAR, ERIC
import { Link, useMatch, useResolvedPath} from "react-router-dom"
import React from 'react'; //import React library

export function NavBar(props) {
    return ( <nav className = "nav" >
        <Link to = "/" className = "site-title" > Logo </Link> 
        <ul>
        <CustomLink to = "/comparison" > Comparison </CustomLink> 
        <CustomLink to = "/profile" > Profile </CustomLink> 
        </ul> 
        </nav> 
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const active = useMatch({ path: resolvedPath.pathname, end:true})
    return ( <li className = {isActive ? "active" : "" } >
        < Link to = { to } {...props } > { children } </Link> 
        </li>
    )
}

