import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="text-3xl no-underline text-black  font-bold" to='/'>
            Delive<span className="text-yellow">roo</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  Pricing
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to='/'
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to='/'>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/'>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to='/'>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
