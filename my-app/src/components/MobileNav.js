// NAV BAR, ERIC
import React, { useState } from "react"; //import React library
import { CgCloseO } from "react-icons/cg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const currentUser = {
    imgProfile: "../img/profile-pic.png",
    userName: "Jane Doe",
  };
  const [open, setOpen] = useState(false);
  const openIcon = (
    // <img
    //   src="../img/plant_logo.png"
    //   alt="logo"
    //   onClick={() => setOpen(!open)}
    // ></img>
    <MdOutlineNavigateNext size="40" onClick={() => setOpen(!open)}/>
  );
  const closeIcon = (
    <CgCloseO size="40" color="#507A55" onClick={() => setOpen(!open)} />
  );
  return (
    <nav className="nav-mobile">
        <div className="nav-left">
      <div className="ham">
      {open ? closeIcon : openIcon}
      </div>
    {open && 
      <ul>
        <Link to="/">Home</Link>
        <Link to="/ComparisonPage">Comparison</Link>
      </ul>}
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
