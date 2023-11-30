// import { Navbar, Nav, Container } from "react-bootstrap";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link
              className="nav-link btn btn-primary btn-squared"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link btn btn-primary btn-squared"
              to="/consoles"
            >
              Consoles
            </Link>
          </li>
          <li>
            <Link
              className="nav-link btn btn-primary btn-squared"
              to="/controllers"
            >
              Controllers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;