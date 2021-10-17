import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-data-909c4-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      const loadMeals = [];

      for (const key in responseData) {
        loadMeals.push({
          id: key,
          description: responseData[key].description,
          price: responseData[key].price,
          name: responseData[key].name,
        });
      }
      setMeals(loadMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes['loading-indicator']}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
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
      <div className="col-6">
        <div className="card">
          <ul className="list-group list-group-flush">{mealsList}</ul>
        </div>
      </div>
    </div>
  );
};

export default AvailableMeals;
