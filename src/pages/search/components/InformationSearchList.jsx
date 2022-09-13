import React from "react";
import StyleInfor from "./SearchListItem";
import styles from "./Search.module.css";
import SearchPopup from "./SearchPopup";
import { Col, Row } from "reactstrap";

const InformationSearchList = (props) => {
  return (
    <Row>
      <Col lg={4}>
        <SearchPopup />
      </Col>
      <Col lg={8}>
        {props.tour.map((List) => (
          <StyleInfor
            name={List.name}
            distance={List.distance}
            tag={List.tag}
            type={List.type}
            description={List.description}
            free_cancel={List.free_cancel}
            price={List.price}
            rate={List.rate}
            rate_text={List.rate_text}
            image_url={List.image_url}
          />
        ))}
      </Col>
    </Row>
  );
};

export default InformationSearchList;
