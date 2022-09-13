import React from "react";
import InformationHotel from "./InformationHotel";
import "./Hotel.css";
import { Row, Col } from "reactstrap";

const ListHotel = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const Hotel = () => {
  return (
    <Row className="backgroundImage">
      <h2>Browse by property type</h2>
      <InformationHotel
        name={ListHotel[0].name}
        count={ListHotel[0].count}
        image={ListHotel[0].image}
      />
      <InformationHotel
        name={ListHotel[1].name}
        count={ListHotel[1].count}
        image={ListHotel[1].image}
      />
      <InformationHotel
        name={ListHotel[2].name}
        count={ListHotel[2].count}
        image={ListHotel[2].image}
      />
      <InformationHotel
        name={ListHotel[3].name}
        count={ListHotel[3].count}
        image={ListHotel[3].image}
      />
      <InformationHotel
        name={ListHotel[4].name}
        count={ListHotel[4].count}
        image={ListHotel[4].image}
      />
    </Row>
  );
};

export default Hotel;
