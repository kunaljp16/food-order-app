import { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  const [isAmountValid, setAmountIsValid] = useState(false);
  
  const amountInputRef = useRef();
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  };
  return (
    <form className='text-end' onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="btn btn-primary mt-2">+ Add</button>
      {isAmountValid && <p>Please enter a valid from from 1-5</p>}
    </form>
  );
};

export default MealItemForm;
