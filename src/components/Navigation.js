import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import logo from "../assets/Images/logo.png";
import Sidebar from "./Sidebar";

const Navigation = () => {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow-xl"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#fff" : "transparent",
        }}
      >
        <div className="container-fluid">
          <Link className=" no-underline text-black" to="/">
            <img className="w-36" src={logo} alt="" />
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Pricing
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            <Sidebar />

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
