// import { Navbar, Nav, Container } from "react-bootstrap";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from "react";

const Header = () => {
  return (
    <header>
    <nav>
      <ul>
        <li><a href="#">
        <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/`}>Home</Link>
            </a></li>
        <li><a href="#">
          <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/consoles`}>Consoles</Link>
            </a></li>
        <li><a href="#">
        <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/controllers`}>Controllers</Link>
          </a></li>
       
      </ul>
    </nav>
    </header>
  );
};

export default Header;
