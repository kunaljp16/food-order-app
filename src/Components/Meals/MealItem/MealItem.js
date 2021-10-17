import { useContext } from "react";
import CartContext from "../../../Store/store-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };
  return (
    <li className="list-group-item" key={props.id}>
      <span className="d-flex justify-content-between align-items-center">
        <span>
          <span className="h5 d-block">{props.name}</span>
          <span className="d-block">{props.description}</span>
          <span className="h6 d-block">{price}</span>
        </span>
        <span>
          <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
        </span>
      </span>
    </li>
  );
};

export default MealItem;
