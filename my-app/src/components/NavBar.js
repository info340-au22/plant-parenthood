import React from "react"; //import React library
import Nav from "./Nav.js";
import MobileNav from "./MobileNav.js"

export function NavBar(props) {
  const currentUser = props.currentUser;
  return (
    <div>
      <Nav currentUser={currentUser}/>
      <MobileNav currentUser={currentUser}/>
    </div>
  );
}
