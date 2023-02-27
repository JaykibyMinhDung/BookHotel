import React from "react";
import styles from "./SearchPop.module.css";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const Button = styled.input`
  display: inline-block;
  border-radius: 3px;
  background: #1c86ee;
  color: white;
  border: 0px solid white;
  &:hover {
    background: #f56c6c;
    box-shadow: -5px 4px 3px #f56c6c7a;
    border-radius: 20px;
    transition: 0.5s;
  }
`;

const SearchPopup = () => {
  function reload() {
    window.location.replace("/");
  }
  return (
    <div className={styles.coloring}>
      <form>
        <h3>Search</h3>
        <label for="Destination">Destination</label>
        <br />
        <input id="Destination" type={"text"} name="Destination" /> <br />
        <label for="checkdate">Check-in date</label> <br />
        <input
          id="checkdate"
          type={"date"}
          name="checkdate"
          // Hiển thị ngày giờ hiện tại tự động để hướng dẫn khách hàng
          placeholder={
            new Date().getDay() +
            "/" +
            new Date().getMonth() +
            "/" +
            new Date().getFullYear()
          }
        />{" "}
        <br />
        <label>Options</label> <br />
        <Row>
          <Col className={styles.Collabel} lg={9}>
            <label for="Minprice">min price per night</label> <br />
            <label for="Maxprice">Max price per night</label> <br />
            <label for="Adult">Adult</label> <br />
            <label for="chilren">Chilren</label> <br />
            <label for="room">Room</label> <br />
          </Col>
          <Col className={styles.Colinput} lg={3}>
            <input id="Minprice" type={"number"} name="Minprice" /> <br />
            <input id="Maxprice" type={"number"} name="Maxprice" /> <br />
            <input
              placeholder="1"
              id="Adult"
              type={"number"}
              name="Adult"
            />{" "}
            <br />
            <input
              placeholder="0"
              id="chilren"
              type={"number"}
              name="chilren"
            />{" "}
            <br />
            <input placeholder="1" id="room" type={"number"} name="room" />{" "}
            <br />
          </Col>
        </Row>
        <Button type={"button"} value={"Search"} onClick={reload} />
      </form>
    </div>
  );
};

export default SearchPopup;
