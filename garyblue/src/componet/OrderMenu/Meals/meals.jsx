import React, { useEffect, useState } from "react";
import classes from "./meals.module.css";
import MealItems from "./mealItems";
import Categories from "../../services/Categories";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSelectedCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        `https://react-http-f1a28-default-rtdb.firebaseio.com/meals.json`
      );

      if (!response.ok) {
        throw new Error("Loading Failed!");
      }
      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          category: responseData[key].category,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setMeals(loadedMeals);

      setIsloading(false);
    };

    fetchMeals().catch((err) => {
      setIsloading(false);
      setError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.loading}>Loading......</p>
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <p className={classes.error}>{error}</p>
      </section>
    );
  }
  const filteredMeals = meals.filter((e) => {
    return e.category === selectedCategory;
  });
  const mealsList = filteredMeals.map((meal) => (
    <MealItems
      key={meal.id}
      name={meal.name}
      id={meal.id}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <React.Fragment>
      <Categories onSelectCategory={onSelectedCategory} />
      <section className={classes.meals}>
        <ul>{mealsList}</ul>
      </section>
    </React.Fragment>
  );
};

export default Meals;
