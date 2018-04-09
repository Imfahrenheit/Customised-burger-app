import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import Controls from '../../components/Burger/Controls/Controls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/UI/OrderSummery/OrderSummery'
import swal from 'sweetalert2'


const IGR_PRICE={
  salad:0.5,
  cheese:0.7,
  meat: 1.3,
  bacon:0.6
}


class BurgerBuilder extends Component {
  
  state ={
ingredients:{
salad: 0,
bacon:0,
cheese:0,
meat:0,
},
totalPrice: 4,
purchasable: false,
purchasing:false
}

upDatePricehandler = (ingredients)=>{

const updatedPrice = Object.keys(ingredients).map((ingkey)=>{
return ingredients[ingkey]}).reduce((sum,el)=>{
  return sum + el
},0)
this.setState({purchasable: updatedPrice > 0})


}


addIngHandler = (type)=>{
  
  const updatedIng={
    ...this.state.ingredients
  }
  updatedIng[type] = this.state.ingredients[type] + 1;
  const newPrice = this.state.totalPrice + IGR_PRICE[type];
this.setState(
  {ingredients:updatedIng, totalPrice:newPrice})
  this.upDatePricehandler(updatedIng)
};

removeIngHandler= (type)=>{
  const updatedIng = {
    ...this.state.ingredients
  }
  updatedIng[type] = this.state.ingredients[type] -1;
  const newPrice = this.state.totalPrice - IGR_PRICE[type];
  this.setState(
    { ingredients: updatedIng, totalPrice: newPrice })
  this.upDatePricehandler(updatedIng)
};

orderHandler = ()=>{
this.setState({purchasing: true})
}
  purchaseCancelled = () => {
    this.modalCancel()
    this.setState({ purchasing: false })
  };
  modalContinue = () => {
    swal({
      position: 'center', type: 'success', title: 'Your order has been sent', showConfirmButton: false,
      timer: 1500
    })
  }
 
  modalCancel = ()=>{
    swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
      cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
      swal({
        title:'Cancelled!',
        text:'Your order has been cancelled.',
        type:'success',
        showConfirmButton:false ,
        timer: 1000
      })
    }
  })
 };

orderContinue = ()=>{
  
  this.purchaseCancelled()
  this.modalContinue();
}





  render() {


 let disAbleInfo= 
{
   ...this.state.ingredients
 }
 for(let key in disAbleInfo ){

  disAbleInfo[key] = disAbleInfo[key]<= 0
 }



    return (
        <Aux>
        <Modal show={this.state.purchasing}
         modalClosed={this.purchaseCancelled}>

         <OrderSummery ingredients={this.state.ingredients}
                        modalClosed={this.purchaseCancelled}
                        orderContinue={this.orderContinue}
                        price={this.state.totalPrice}
         />
        </Modal>

        <Burger ingredients= {this.state.ingredients}/>
        
        <Controls ingredAdded= {this.addIngHandler}
                  ingRemoved={this.removeIngHandler}
                  disAble={disAbleInfo}
                  purchase={this.state.purchasable}
                  ordered={this.orderHandler}
                  price={this.state.totalPrice}
             />

          
          
              
            </Aux>
    );
  }
}

export default BurgerBuilder;
