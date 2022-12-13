import React, { useState } from "react"; //import React library
import { CgCloseO } from "react-icons/cg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function MobileNav(props) {
  const currentUser = props.currentUser;
  const [open, setOpen] = useState(false);
  const openIcon = (
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
      {currentUser.uid && 
        <>
          <Link to="/ProfilePage" aria-label="profilePage">
            <img
              className="profile-icon"
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
