import React,{Component} from "react";
import Aux from "../../hoc/Aux";
import styles from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout  extends Component {
state ={
showSideDrawer: true
}

showSideDrawerHandLer = ()=>{

  this.setState({ showSideDrawer: false})

}

  render() {
    return (
      <Aux>

        <Toolbar />
        <SideDrawer 
        open={this.state.showSideDrawer} 
        show={this.showSideDrawerHandLer}/>

        <main className={styles.Content}>{this.props.children} </main>
      </Aux>
    )}
 
 
 };

export default Layout;
