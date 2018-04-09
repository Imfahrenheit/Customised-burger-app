import React from 'react'
import styles from './toggleMenu.css'

const togglemenu = (props) => {
    return (
        <div className={styles.DrawerToggle} onClick={props.click} >
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
    )
}
export default togglemenu;