import React from "react";
import styles from "./Button.module.css"
const Button = ({label,onClick}) => {
  label="Hello World"
  return (<button className={styles.button}  data-testid="button" onClick={onClick}>{label}</button>)
};

export default Button;