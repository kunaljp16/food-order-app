import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>
      <FaShoppingCart /> Cart
      <span
        className={
          classes["cart-counter"] + "  rounded-pill text-dark bg-light"
        }
      >
        8
      </span>
    </button>
  );
};

export default HeaderCartButton;
