import React from "react";
import styled from "styled-components";
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
    <Col>
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          width: 400,
          height: 300,
          color: "lightcyan",
          position: "relative",
        }}
      >
        <Banner>
          {props.name}
          <p>{props.subText}</p>
        </Banner>
      </div>
    </Col>
  );
};

export default InformationCity;
