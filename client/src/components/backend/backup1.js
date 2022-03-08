import React, { useState } from "react";
import { IconContext } from "react-icons";
import { userActions } from "../../store/auth/actions";
import { history } from "../../helpers";
import store from "../../store";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const isActivefunc = (match, location) => {
  console.log(match, location);
  return match;
};

const Navbar = ({ dispatch }) => {
  const { authentication } = store.getState();
  const { user } = authentication;

  const handleMenuLogout = () => {
    dispatch(userActions.logout);
    history.push("/login");
  }

  const isActivefunc = (match, location) => {
    console.log(match, location);
    return match;
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">
                LEELE NAIL
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink 
                  to="/admin" 
                  activeClassName="active"
                  isActive={isActivefunc}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                <NavLink 
                to="/account" 
                activeClassName="active"
                isActive={isActivefunc}
                >
                Account
                  </NavLink>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li className="dropdown-header">Nav header</li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                    <li>
                      <a href="#">One more separated link</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">Hi {user.username}</a>
                </li>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a href="" onClick={handleMenuLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default connect()(Navbar);
