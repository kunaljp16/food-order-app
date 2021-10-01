import React from "react";
import { Fragment } from "react";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            React Food App
            <HeaderCartBtn />
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
