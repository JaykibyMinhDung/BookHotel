import React from "react";
import styled from "styled-components";
import editimg from "./city.module.css";
import { Row, Col } from "reactstrap";

const Banner = styled.div`
  padding: 0.4em;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  font-size: 160%;
  color: white;
  position: absolute;
  top: 8em;

  &:hover {
    color: #63b8ff;
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
          marginLeft: `${6 + "rem"}`,
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
