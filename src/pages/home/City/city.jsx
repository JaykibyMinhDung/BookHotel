import React from "react";
import ListCity from "../../../data/city.json";
import InformationCity from "./InformationCity";
import { Row, Col } from "reactstrap";
import editimg from "./city.module.css";

// const ListCity = [
//   {
//     name: "Dublin",
//     subText: "123 properties",
//     image: "./images/city_1.webp",
//   },
//   {
//     name: "Reno",
//     subText: "533 properties",
//     image: "./images/city_2.webp",
//   },
//   {
//     name: "Austin",
//     subText: "532 properties",
//     image: "./images/city_3.webp",
//   },
// ];
const City = () => {
  return (
    <Row className={editimg.display}>
      <InformationCity
        name={ListCity[0].name}
        subText={ListCity[0].subText}
        image={ListCity[0].image}
      />

      <InformationCity
        name={ListCity[1].name}
        subText={ListCity[1].subText}
        image={ListCity[1].image}
      />

      <InformationCity
        name={ListCity[2].name}
        subText={ListCity[2].subText}
        image={ListCity[2].image}
      />
    </Row>
  );
};

export default City;
