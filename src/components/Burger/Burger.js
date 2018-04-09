import React from 'react';
import styles from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const burger =(props) => {


let newIngredients = Object.keys(props.ingredients)
  .map(ing => {
    return [...Array(props.ingredients[ing])].map((_, i) => {
      return <Ingredients key={ing + i} type={ing} />;
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el);
  },[]);

if(newIngredients.length===0){
  newIngredients ='Please start adding ingrediants!'
}


  return <div className={styles.Burger}>
      <Ingredients type="bread-top" />
      {newIngredients}
      
      <Ingredients type="bread-bottom" />
    </div>;
}
export default burger;