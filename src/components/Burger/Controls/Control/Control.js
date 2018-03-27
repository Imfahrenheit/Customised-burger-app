import React from "react";
import styles from './Control.css'

const control = (props) => {
  return (
    <div className={styles.Control}>
      <div className= {styles.Label}> {props.type} </div>
      <button className ={styles.Less} onClick={props.removed} disabled={props.disable}> Less</button> 
      <button className = {styles.More} onClick={props.added}> More</button>

    </div>
  );
};
export default control;
