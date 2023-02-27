import React from "react";
import "./Hotel.css";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const InformationHotel = (props) => {
  const Banner = styled.img`
    padding: 0em;
    box-shadow: 1px 5px 5px #00000077, 0px -4px 10px #0000005e;
    transition: all 200ms ease-in;
    &:hover {
      transform: scale(1.1);
      // padding: 0.5em;
      // width: 350;
      // height: 300;
    }
  `;
  return (
    <Col>
      <div>
        <a
          href="#"
          title="Click to know detail"
          style={{
            color: "black",
            FontFamily: `"Times New Roman", Times, serif`,
          }}
        >
          <Banner src={props.image} alt={props.name} width="220" height="150" />
          <h4>{props.name}</h4>
        </a>
        <p>{props.count + " hotels"}</p>
      </div>
    </Col>
  );
};

export default InformationHotel;
