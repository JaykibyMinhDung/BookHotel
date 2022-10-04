import React from "react";
import "./Hotel.css";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const InformationHotel = (props) => {
  const Banner = styled.img`
    padding: 0em;
    &:hover {
      padding: 0.5em;
      width: 350;
      height: 300;
      box-shadow: 5px 3px 2px #bbbbbb, 0px -2px 2px #bbbbbb;
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
