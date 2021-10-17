import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="border-bottom d-flex justify-content-between align-items-center">
      <span className="d-block">
        <span className="h4">{props.name}</span>
        <span className={classes["summary"] + " b-block"}>
          <span className={classes.price}>{price}</span>
          <span className={classes["amount"] + " h6"}>x {props.amount}</span>
        </span>
      </span>
      <span className={classes.actions}>
        <button className="btn btn-primary btn-sm" onClick={props.onRemove}>
          −
        </button>
        <button className="btn btn-primary btn-sm ms-2" onClick={props.onAdd}>
          +
        </button>
      </span>
    </li>
  );
};

export default CartItem;
