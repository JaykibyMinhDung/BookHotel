import React from "react";
import Detail from "./Detail";
import styles from "./Detail.module.css";
import styled from "styled-components";
import { Col, Row } from "reactstrap";

const Button = styled.button`
  display: inline-block;
  border-radius: 10px;
  padding: 0.5rem 0;

  width: 11rem;
  background: #1c86ee;
  color: white !important;
  border: 0px solid white;
  &:hover {
    background: #f56c6c;
    box-shadow: -5px 4px 3px #f56c6c7a;
    border-radius: 20px;
    transition: 0.5s;
  }
`;

const Image = (props) => {
  return (
    <div style={{ marginLeft: "2em" }}>
      <div>
        <div className={styles.intro}>
          <h3>{props.name}</h3>
          <div>
            <i className="fa fa-location-arrow" aria-hidden="true"></i>
            <span>{props.address}</span>
          </div>
          <a href="#">{props.distance}</a>
          <p>{props.price}</p>
        </div>
        <Button className={styles.button}>Reserve or book Now</Button>
      </div>
      <a href={props.photos} className={styles.pic}>
        {props.photos.map((img, index) => (
          <img
            src={img}
            alt={props.name + index}
            width={420}
            height={290}
          ></img>
        ))}
      </a>
      <div>
        <Row>
          <Col lg={9}>
            <h3 style={{ fontWeight: "bold" }}>{props.title}</h3>
            <span>{props.description}</span>
          </Col>
          <Col lg={3} className={styles.theme}>
            <p>
              <strong>{"Perfect for a 9-night stay!"}</strong>
            </p>
            <div>
              Located in the real heart of krakow, this property has an
              excellent location score of 9.8
            </div>
            <p>
              <strong style={{ fontSize: "larger" }}>{" $" + 945}</strong>{" "}
              {"(9 nights)"}
            </p>
            <Button style={{ width: "100%" }} onClick={"a"}>
              Reserve or book Now
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Image;
