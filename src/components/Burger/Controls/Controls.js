import React from 'react';
import styles from './Controls.css'
import Control from './Control/Control';

const bgrControls= [
  { lebel:'Salad',  type: 'salad'},
  { lebel:'Cheese', type : 'cheese' },
  { lebel:'Bacon', type: 'bacon' },
  { lebel:'Meat', type: 'meat' }

]

const controls = (props) => {
  return (
    <div className ={styles.Controls} >
      <p> Total Price: <strong>{props.price.toFixed(2)} </strong></p>
    {bgrControls.map((ctrl)=>( 
      <Control 
      key={ctrl.lebel}
      type= {ctrl.lebel}
      lab = {ctrl.label}
      added={()=>{props.ingredAdded(ctrl.type)}}
      removed={() => { props.ingRemoved(ctrl.type) }}
      disable={props.disAble[ctrl.type]}
       
       />
 ))}
      <button className={styles.OrderButton}
        disabled ={!props.purchase}
        onClick={props.ordered}
      
      
        > ORDER NOW</button>
    </div>
  )
}
export default controls;