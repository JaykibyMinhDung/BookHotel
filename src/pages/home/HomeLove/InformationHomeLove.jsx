import React from "react";
import styles from "./homelove.module.css";
import { Row, Col } from "reactstrap";

const InformationHomeLove = (props) => {
  return (
    <Col className={styles.lovehome}>
      <div>
        <a href="#">
          <img
            src={props.image}
            alt={props.name}
            width={240}
            height={160}
          ></img>
        </a>
      </div>
      <a href="#">{props.name}</a>

      <p style={{ fontSize: "large" }}>{props.city}</p>

      <h4>{"Starting from " + "$" + props.price}</h4>
      <div>
        <span>{props.rate}</span>
        {props.type}
      </div>
    </Col>
  );
};

export default InformationHomeLove;
