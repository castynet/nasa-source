import React from "react";
import "./css/navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar visible-md visible-lg topnavbar menu menu--ama">
        <div className="centered">
          <a className=" stlist" href="https://riungemaina.xyz">
            Castynet
          </a>
          <a className="stlist" href="#idAsteroid">
            Asteroids
          </a>
          <a className=" stlist" href="#idAbout">
            About
          </a>
          <a
            className=" stlist"
            href="https://www.castynet.co.ke/#sectionContact"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
