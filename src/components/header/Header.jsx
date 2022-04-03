import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.scss";

const Header = () => {
  const [bgColor, setBgColor] = useState("")

  window.addEventListener("scroll",function(){
    if(window.scrollY>200){
      setBgColor("active-header")
    }else{
      setBgColor("")

    }
  })
  return (
    <div className={`header ${bgColor}`}>
      <nav className="d-flex align-items-center">
        <div className="num">
          <Link to="/">+1 631 123 4567</Link>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar-coll">
            <ul className="d-flex list-unstyled align-items-center">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/About">ABOUT</Link>
              </li>
              <li>
                <Link to="/">WORK</Link>
              </li>
              <li>
                <Link to="/">REVIEW</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="num">
          <Link to="/">menu-bar</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
