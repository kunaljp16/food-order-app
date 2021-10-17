import ModalPopUp from "../UI/ModalPopUp";
import CartContext from "../../Store/store-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    fetch('https://food-app-data-909c4-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user : userData,
        orderedItems: cartCtx.items
      })
    });
  };

  const cartItem = (
    <ul className={classes["list-group"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  const actionButtons = (
    <section className="text-end border border-end-0 border-bottom-0 border-start-0 border-3 pt-3">
      <button className="btn btn-primary" onClick={props.onHideCartFn}>
        Close
      </button>
      {hasItems && (
        <button className="btn btn-success mx-3" onClick={orderHandler}>
          Order
        </button>
      )}
    </section>
  );

  return (
    <ModalPopUp onCloseBackdrop={props.onHideCartFn}>
      {cartItem}
      <section className="d-flex justify-content-between text-end border border-end-0 border-bottom-0 border-start-0 border-3 pt-3 pb-3">
        <span className="h4">Total Amount </span>
        <span className="h4">{totalAmount}</span>
      </section>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.onHideCartFn}
        />
      )}
      {!isCheckout && actionButtons}
    </ModalPopUp>
  );
};

export default Cart;
