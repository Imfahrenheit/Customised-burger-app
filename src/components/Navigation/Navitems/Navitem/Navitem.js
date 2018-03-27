import React from 'react';
import styles from './Navitem.css';

const navItem = (props) => {
  return (
    <li className={styles.Navitem}>
      <a href={props.link} 
      className={props.active? styles.active:null} >{props.children} </a>
    </li>
  )
}
export default  navItem;