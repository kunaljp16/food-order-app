import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form>
      <Input
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
      <button className="btn btn-primary">+ Add</button>
    </form>
  );
};

export default MealItemForm;
