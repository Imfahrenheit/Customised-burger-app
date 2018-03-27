import React, {Component} from "react";
import styles from "./ingredients.css";
import PropTypes from "prop-types";

class Ingredients extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={styles.BreadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}> </div>
            <div className={styles.Seeds2}> </div>
          </div>
        );
        break;

      case "meat":
        ingredient = <div className={styles.Meat}> </div>;
        break;
      case "bacon":
        ingredient = <div className={styles.Bacon}> </div>;
        break;
      case "cheese":
        ingredient = <div className={styles.Cheese}> </div>;
        break;
      case "salad":
        ingredient = <div className={styles.Salad}> </div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

Ingredients.propTypes = {
  type: PropTypes.string.isRequired
};
export default Ingredients;
