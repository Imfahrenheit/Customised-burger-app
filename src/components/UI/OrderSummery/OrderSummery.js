import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../Button/Button'


 const orderSummery = (props) => {

let summery = Object.keys(props.ingredients).map((ing)=>{

  return <li style={{ textTransform: 'capitalize', listStyle: 'none' }} key={ing} >{ing}: {props.ingredients[ing]}</li>

})

  return (
    <Aux>

          <h2> Your Order </h2>
          <h4> This Delicious Burger Contains the Following ingredients </h4>
          <ul style={{listStyle:'none'}} > {summery} </ul>
          <p><strong> Total price: {props.price.toFixed(2)}</strong></p>
          <p> Continue to Checkout ? </p>
      <Button btnType='Danger' clicked={props.modalClosed}> Cancel</Button>
      <Button btnType='Success' clicked={props.orderContinue} > Continue</Button>

    </Aux>
      
    
  )
}
export default orderSummery;
