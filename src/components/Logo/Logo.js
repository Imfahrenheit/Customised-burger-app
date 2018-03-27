import React from 'react'
import burgerLogo from '../../assets/burger-logo.png';
import styles from './Logo.css';

 const logo=() => {
  return (
    <div className= {styles.Logo}>
      <img src={burgerLogo} alt= 'My-burger' />
    </div>
  )
}
export default logo;