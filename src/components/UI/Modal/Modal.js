import React from 'react';
import styles from './Modal.css';
import Aux from '../../../hoc/Aux';
import BackDrop from './Backdrop/BackDrop.js'



const modal = props => {
  return (    <Aux>

                <BackDrop show={props.show} clicked={props.modalClosed}
                />


                  <div className = {styles.Modal}
                        style={{
                            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: props.show ? '1' :'0'}}>
                {props.children}
                  </div>
                
                </Aux>
  )
}
export default modal;