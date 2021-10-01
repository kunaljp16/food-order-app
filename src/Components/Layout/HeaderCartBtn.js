import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
  return (
    <button type="button" className="btn btn-primary">
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

export default HeaderCartBtn;
