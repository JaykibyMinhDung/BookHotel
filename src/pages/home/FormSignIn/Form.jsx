import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.background}>
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <input type="email" placeholder="Your Email" />
      <button>Subcribe</button>
    </div>
  );
};
export default Form;
