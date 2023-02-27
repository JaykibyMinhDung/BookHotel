import React from "react";
import styled from "styled-components";
import editimg from "./city.module.css";
import { Row, Col } from "reactstrap";

const Banner = styled.div`
  padding: 1.4em;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  font-size: 120%;
  color: white;
  transition: all 400ms ease-in;
  cursor: pointer;
  position: absolute;
  top: 12rem;

  &:hover {
    transition: all 400ms ease-in;
    transform: scale(1.2);
  }
`;

const InformationCity = (props) => {
  return (
    <div className={editimg.align}>
      <div
        className={editimg.banner}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          width: 380,
          height: 320,
          marginLeft: `${2.8 + "rem"}`,
          marginBottom: `${2 + "rem"}`,
        }}
      >
        <Banner>
          {props.name}
          <p>{props.subText}</p>
        </Banner>
      </div>
    </div>
  );
};

export default InformationCity;
