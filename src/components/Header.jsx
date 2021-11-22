import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";

import Nav from "./Nav";
import Logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>

      <Nav />
      <div className="icons">
       
        
        
      </div>
      <div className="share">
  <div className="share__parent">
  <BsFillShareFill />
  </div>
  <a href="#">
    <div className="share__button share__facebook">
    <BsInstagram />
    </div>
  </a>
  <a href="#">
    <div className="share__button share__linkedin">
    <AiFillFacebook />
    </div>
  </a>
  <a href="#">
    <div className="share__button share__twitter">
    <FaTripadvisor />
    </div>
  </a>
</div>
    </header>
  );
};

export default Header;
