import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const NavBar = () => {
  const isActivefunc = (match, location) => {
    console.log(match, location);
    return match;
  };
  const [isActive, setActive] = useState(false);
  const [isActiveSub, setActiveSub] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleToggleSub = () => {
    setActiveSub(!isActiveSub);
  };
  return (
    <div className="header">
      <div className="header-bottom sticky-header sticky">
        <div className="container">
          <div className="mgea-full-width">
            <div className="row">
              <div className="col-md-2 col-sm-6 col-xs-9 visible-xs">
                <div className="logo">
                  <a href="index.php">
                    <img src="../../../logo/logo.png" alt="leelenailspa" />
                  </a>
                </div>
              </div>
              <div className="col-md-12 hidden-sm hidden-xs">
                <div className="menu">
                  <nav>
                    <ul className="pull-left">
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="#"
                        >
                          Services
                        </NavLink>
                        <ul className="dropdown_menu">
                          <li>
                            <NavLink
                              isActive={isActivefunc}
                              exact
                              activeClassName="active"
                              to="/nails"
                            >
                              Nails
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              isActive={isActivefunc}
                              exact
                              activeClassName="active"
                              to="/hair"
                            >
                              Hair
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              isActive={isActivefunc}
                              exact
                              activeClassName="active"
                              to="/facial"
                            >
                              Facial
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              isActive={isActivefunc}
                              exact
                              activeClassName="active"
                              to="/body"
                            >
                              Body
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              isActive={isActivefunc}
                              exact
                              activeClassName="active"
                              to="/eyelash"
                            >
                              EyeLash
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              isActive={isActivefunc}
                              exact
                              activeClassName="active"
                              to="/wax"
                            >
                              Wax
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              isActive={isActivefunc}
                              exact
                              activeClassName="active"
                              to="/threading"
                            >
                              Threading
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/products"
                        >
                          Products
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/giftandoffer"
                        >
                          Gifts &amp; Offers
                        </NavLink>
                      </li>
                    </ul>
                    <a href="/" className="logo-center">
                      <img src="../../../logo/logo.png" alt="" />
                    </a>
                    <ul className="pull-right">
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/packages"
                        >
                          Packages
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/gallery"
                        >
                          Gallery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/contact"
                        >
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-area hidden-lg hidden-md">
          <div className="container mean-container">
            <div className="mean-bar">
              <NavLink
                isActive={isActivefunc}
                exact
                activeClassName="active"
                to="#nav"
                onClick={handleToggle}
                className={
                  isActive ? "meanmenu-reveal meanclose" : "meanmenu-reveal"
                }
                style={
                  isActive
                    ? {
                        right: "0px",
                        left: "auto",
                        textAlign: "center",
                        textIndent: "0px",
                        fontSize: "18px",
                      }
                    : { background: "", color: "", right: "0", left: "auto" }
                }
              >
                {isActive ? (
                  "X"
                ) : (
                  <>
                    <span></span>
                    <span></span>
                    <span></span>
                  </>
                )}
              </NavLink>
              <nav className="mean-nav">
                <ul
                  style={isActive ? { display: "block" } : { display: "none" }}
                >
                  <li>
                    <NavLink
                      isActive={isActivefunc}
                      exact
                      activeClassName="active"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      isActive={isActivefunc}
                      exact
                      activeClassName="active"
                      to="#"
                      onClick={handleToggleSub}
                    >
                      Services
                    </NavLink>
                    <ul
                      className="dropdown_menu"
                      style={
                        isActiveSub ? { display: "block" } : { display: "none" }
                      }
                    >
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/nails"
                        >
                          Nails
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/hair"
                        >
                          Hair
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/facial"
                        >
                          Facial
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/body"
                        >
                          Body
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/eyelash"
                        >
                          EyeLash
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/wax"
                        >
                          Wax
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          isActive={isActivefunc}
                          exact
                          activeClassName="active"
                          to="/threading"
                        >
                          Threading
                        </NavLink>
                      </li>
                    </ul>
                    <NavLink
                      exact
                      activeClassName="active"
                      to="#"
                      onClick={handleToggleSub}
                      className={
                        isActiveSub ? "mean-expand mean-clicked" : "mean-expand"
                      }
                      style={{ fontSize: "18px" }}
                    >
                      +
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      isActive={isActivefunc}
                      exact
                      activeClassName="active"
                      to="/products"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      isActive={isActivefunc}
                      exact
                      activeClassName="active"
                      to="/packages"
                    >
                      Packages
                    </NavLink>
                  </li>
                  <li>
                  <NavLink
                      isActive={isActivefunc}
                      exact
                      activeClassName="active"
                      to="/giftandoffer"
                    >
                      Gifts &amp; Offers
                    </NavLink>
                  </li>
                  <li>
                  <NavLink
                      isActive={isActivefunc}
                      exact
                      activeClassName="active"
                      to="/gallery"
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <li className="mean-last">
                  <NavLink
                      isActive={isActivefunc}
                      exact
                      activeClassName="active"
                      to="/contact"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
