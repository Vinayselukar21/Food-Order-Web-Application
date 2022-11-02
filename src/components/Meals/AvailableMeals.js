import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError , setHttpError] = useState();

  useEffect(()=>{
    const fetchMeals = async() => {
        const response =  await fetch(
          "https://food-order-app-b2538-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }


        const mealData =  await response.json();

        const loadedMeals = [];

        for (const key in mealData) {
          loadedMeals.push({
            id: key,
            name: mealData[key].name,
            description: mealData[key].description,
            price: mealData[key].price,
          });
        }
  
        setMeals(loadedMeals);
        setIsLoading(false)
      }


      fetchMeals().catch(error=>{
        setIsLoading(false)
        setHttpError(error.message)
      })
  },[]);


  if (isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>
  }
   

  const mealList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      mealName={meal.name}
      mealDescription={meal.description}
      mealPrice={meal.price}
    ></MealItem>
  ));

  

  return (
    <section>
      <Card>
        <ul className={classes.meals}>
          {mealList}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
