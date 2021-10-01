import React from "react";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="list-group-item" key={props.id}>
      <span className="d-flex justify-content-between align-items-center" >
        <span >
          <span className="h3 d-block">{props.name}</span>
          <span className="d-block">{props.description}</span>
          <span className="h4 d-block">{price}</span>
        </span>
        <span>
        <MealItemForm />
        </span>
      </span>
    </li>
  );
};

export default MealItem;
