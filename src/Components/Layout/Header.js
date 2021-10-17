import React from "react";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a class="navbar-brand" href="#">
              React Food App
            </a>
            <HeaderCartButton onClick={props.onShowCartFn} />
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
