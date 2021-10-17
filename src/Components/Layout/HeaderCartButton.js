import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/store-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button type="button" className="btn btn-primary" onClick={props.onClick}>
      <FaShoppingCart /> Your Cart
      <span
        className={
          classes["cart-counter"] + "  rounded-pill text-dark bg-light"
        }

      >{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
