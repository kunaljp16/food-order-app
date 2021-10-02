import React from "react";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            React Food App
            <HeaderCartButton onClick={props.onShowCartFn}/>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
