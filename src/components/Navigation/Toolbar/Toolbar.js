import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navitems from '../Navitems/Navitems';
import Togglemenu from '../Sidedrawer/Togglemenu/Togglemenu';


const ToolBar = (props) => {
  return (
    <header className={styles.Toolbar}>

      <Togglemenu click={props.toggleClicked} />
      

      <div className={styles.Logo} >
            <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <Navitems />
      </nav>
    </header>
  )
}
export default ToolBar;