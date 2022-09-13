import React from "react";
import InformationHomeLove from "./InformationHomeLove";
import { Row, Col } from "reactstrap";

const informationHomeLove = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const HomeLove = () => {
  return (
    <Row style={{ paddingLeft: "1em" }}>
      <h1>Homes guests love</h1>
      <InformationHomeLove
        name={informationHomeLove[0].name}
        city={informationHomeLove[0].city}
        price={informationHomeLove[0].price}
        rate={informationHomeLove[0].rate}
        type={informationHomeLove[0].type}
        image={informationHomeLove[0].image_url}
      />
      <InformationHomeLove
        name={informationHomeLove[1].name}
        city={informationHomeLove[1].city}
        price={informationHomeLove[1].price}
        rate={informationHomeLove[1].rate}
        type={informationHomeLove[1].type}
        image={informationHomeLove[1].image_url}
      />
      <InformationHomeLove
        name={informationHomeLove[2].name}
        city={informationHomeLove[2].city}
        price={informationHomeLove[2].price}
        rate={informationHomeLove[2].rate}
        type={informationHomeLove[2].type}
        image={informationHomeLove[2].image_url}
      />
      <InformationHomeLove
        name={informationHomeLove[3].name}
        city={informationHomeLove[3].city}
        price={informationHomeLove[3].price}
        rate={informationHomeLove[3].rate}
        type={informationHomeLove[3].type}
        image={informationHomeLove[3].image_url}
      />
    </Row>
  );
};

export default HomeLove;
