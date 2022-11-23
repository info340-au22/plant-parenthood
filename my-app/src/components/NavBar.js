// NAV BAR, ERIC
import React from "react"; //import React library
import Nav from "./Nav.js";
import MobileNav from "./MobileNav.js"

export function NavBar() {
  return (
    <div>
      <Nav />
      <MobileNav />
    </div>
  );
}
