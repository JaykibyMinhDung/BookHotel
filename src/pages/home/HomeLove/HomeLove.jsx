import React from "react";
import informationHomeLovedata from "../../../data/hotel_list.json";
import InformationHomeLove from "./InformationHomeLove";
import { Row, Col } from "reactstrap";

// const informationHomeLove = [
//   {
//     name: "Aparthotel Stare Miasto",
//     city: "Madrid",
//     price: 120,
//     rate: 8.9,
//     type: "Excellent",
//     image_url: "./images/hotel_1.webp",
//   },
//   {
//     name: "Comfort Suites Airport",
//     city: "Austin",
//     price: 140,
//     rate: 9.3,
//     type: "Exceptional",
//     image_url: "./images/hotel_2.jpg",
//   },
//   {
//     name: "Four Seasons Hotel",
//     city: "Lisbon",
//     price: 99,
//     rate: 8.8,
//     type: "Excellent",
//     image_url: "./images/hotel_3.jpg",
//   },
//   {
//     name: "Hilton Garden Inn",
//     city: "Berlin",
//     price: 105,
//     rate: 8.9,
//     type: "Excellent",
//     image_url: "./images/hotel_4.jpg",
//   },
// ];

const HomeLove = () => {
  return (
    <Row style={{ paddingLeft: "6em", paddingRight: "10rem", margin: "0em" }}>
      <h2>Homes guests love</h2>
      <InformationHomeLove
        name={informationHomeLovedata[0].name}
        city={informationHomeLovedata[0].city}
        price={informationHomeLovedata[0].price}
        rate={informationHomeLovedata[0].rate}
        type={informationHomeLovedata[0].type}
        image={informationHomeLovedata[0].image_url}
      />
      <InformationHomeLove
        name={informationHomeLovedata[1].name}
        city={informationHomeLovedata[1].city}
        price={informationHomeLovedata[1].price}
        rate={informationHomeLovedata[1].rate}
        type={informationHomeLovedata[1].type}
        image={informationHomeLovedata[1].image_url}
      />
      <InformationHomeLove
        name={informationHomeLovedata[2].name}
        city={informationHomeLovedata[2].city}
        price={informationHomeLovedata[2].price}
        rate={informationHomeLovedata[2].rate}
        type={informationHomeLovedata[2].type}
        image={informationHomeLovedata[2].image_url}
      />
      <InformationHomeLove
        name={informationHomeLovedata[3].name}
        city={informationHomeLovedata[3].city}
        price={informationHomeLovedata[3].price}
        rate={informationHomeLovedata[3].rate}
        type={informationHomeLovedata[3].type}
        image={informationHomeLovedata[3].image_url}
      />
    </Row>
  );
};

export default HomeLove;
