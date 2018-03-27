import React from 'react'
import styles from './Navitems.css'
import Navitem from '../Navitems/Navitem/Navitem';

const navItems = (props) => {
    return (
        <ul className={styles.Navitems}>
            <Navitem link='/' active >  Burger Builder</Navitem>
            <Navitem link='/' > Checkout </Navitem>
        </ul>
    )
}
export default navItems;