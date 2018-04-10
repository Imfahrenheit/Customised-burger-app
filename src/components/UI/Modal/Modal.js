import React from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import BackDrop from './Backdrop/BackDrop.js'



const modal = props => {
  return props.show? (    <Aux>

                <BackDrop show={props.show} clicked={props.modalClosed}
                />


                  <div className = {`${styles.Modal} animated slideInUp`}>
                       
                {props.children}
                  </div>
                
                </Aux>
  ):null
}
export default modal;