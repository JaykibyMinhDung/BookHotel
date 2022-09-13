import React from "react";
import styles from "./footer.module.css";
import { Col } from "reactstrap";

const StyleFooter = (props) => {
  return (
    <Col className={styles.foot}>
      {props.col_values.map((ele) => (
        <a href="#">{ele}</a>
      ))}
    </Col>
  );
};

export default StyleFooter;
