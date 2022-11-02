import { useContext } from "react";
import CartContext from '../../../store/cart-context'
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm'



const MealItem = (props) => {

  const cartCtx = useContext(CartContext)

  const price = props.mealPrice.toFixed(2)  //for showing only two decimals

  // console.log(price)

  const onAddToCartHandler = amount =>{
    // console.log(amount + ' in meal item js')

    cartCtx.addItem({
      id: props.id,
      name: props.mealName,
      amount: amount,
      price: price,
      totalAmount: 0
    })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={classes.description}>{props.mealDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};
export default MealItem;
