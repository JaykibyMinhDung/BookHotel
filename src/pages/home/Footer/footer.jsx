import React from "react";
import StyleFooter from "./StyleFooter";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const footerData = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

const Footer = () => {
  return (
    <Flex>
      {/* Lấy dữ liệu từ trên và không cần chép lại thủ công như các components trước */}
      {footerData.map((list) => (
        <StyleFooter col_values={list.col_values} />
      ))}
    </Flex>
  );
};

export default Footer;
