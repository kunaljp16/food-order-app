import React from "react";
import DUMMY_MEALS from "./DummyData";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <div className="row justify-content-center">
      <div className="col-8 ">
        <div className="card">
          <ul className="list-group list-group-flush">{mealsList}</ul>
        </div>
      </div>
    </div>
  );
};

export default AvailableMeals;
