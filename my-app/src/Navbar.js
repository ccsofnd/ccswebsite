import React from 'react';
import { Link } from 'react-router-dom';
import CCSLogo from './svg-logos/CCSLogo';
import { FaHome, FaRegCalendarAlt } from 'react-icons/fa';
import { BiSolidContact } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from 'react';
import './Navbar.css'; // Optional for styling

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 520);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 520) {
        close(); // Close if screen is large and it's open
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  function close() {
    setShowDropDown(false);
  }
  function open() {
    setShowDropDown(true);
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <CCSLogo height={43} width={43} className="navbar-logo" />
        <ul>
          {isLargeScreen &&
            <>
              <li className="link-container">
                <Link to="/">
                  <div className="icon-container">
                    <FaHome className="icon" />
                    Home
                  </div>
                </Link>
              </li>
              <li className="link-container">
                <Link to="/events">
                  <div className="icon-container">
                    <FaRegCalendarAlt className="icon" />
                    Events
                  </div>
                </Link>
              </li>
              <li className="link-container">
                <Link to="/admin">
                  <div className="icon-container">
                    <BiSolidContact className="icon" />
                    Admin
                  </div>
                </Link>
              </li>
            </>
          }
          {!isLargeScreen &&
            <li className="dropdown-button-container">
              {!showDropDown ?
                <button className="dropdown-button" onClick={open}>
                  <div className="icon-container">
                    <RxHamburgerMenu className="icon" />
                  </div>
                </button>
                :
                <button className="dropdown-button" onClick={close}>
                  <div className="icon-container">
                    <GrClose className="icon" />
                  </div>
                </button>
              }
            </li>
          }
        </ul>
      </div>
      {showDropDown &&
        <>
          <section className="dropdown-menu">
            <ul>
              <li className="link-container">
                <Link to="/" onClick={close}>
                  <div className="icon-container">
                    <FaHome className="icon" />
                    Home
                  </div>
                </Link>
              </li>
              <li className="link-container">
                <Link to="/events" onClick={close}>
                  <div className="icon-container">
                    <FaRegCalendarAlt className="icon" />
                    Events
                  </div>
                </Link>
              </li>
              <li className="link-container">
                <Link to="/admin" onClick={close}>
                  <div className="icon-container">
                    <BiSolidContact className="icon" />
                    Admin
                  </div>
                </Link>
              </li>
            </ul>
          </section>
        </>}
    </nav>
  );
};

export default Navbar;