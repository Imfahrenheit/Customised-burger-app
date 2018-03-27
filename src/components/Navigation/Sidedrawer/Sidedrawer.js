import React from 'react';
import Navitems from '../Navitems/Navitems'
import Logo from '../../Logo/Logo';
import BackDrop from '../../UI/Modal/Backdrop/BackDrop'
import Aux from '../../../hoc/Aux'
import styles from './Sidedrawer.css'

const sideDrawer = (props) => {

  let dynamicClasses = [styles.SideDrawer, styles.Close];
  if(props.open){
    dynamicClasses = [styles.SideDrawer, styles.Open]
  }
  return (
    
    
    <Aux>
    <BackDrop show={props.open}  clicked={props.show} />
    
    <div className = { dynamicClasses.join(' ')} >

      <div className={styles.Logo}>
     <Logo/>
    </div>
      <nav> 
      <Navitems/>
      </nav>
    </div>
    </Aux>
  )
}
export default sideDrawer;