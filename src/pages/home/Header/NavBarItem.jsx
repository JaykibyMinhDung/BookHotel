import React from "react";
import list from "../../../data/navBar.json";
import { Row, Col } from "reactstrap";
import Navbar from "./Navbar";
import styles from "./Home.module.css";

function Header() {
  // const list = [
  //   {
  //     type: "Stays",
  //     icon: "fa-bed",
  //     active: true,
  //   },
  //   {
  //     type: "Flights",
  //     icon: "fa-plane",
  //     active: false,
  //   },
  //   {
  //     type: "Car-rentals",
  //     icon: "fa-car",
  //     active: false,
  //   },
  //   {
  //     type: "Attractions",
  //     icon: "fa-bed",
  //     active: false,
  //   },
  //   {
  //     type: "Airport-taxis",
  //     icon: "fa-taxi",
  //     active: false,
  //   },
  // ];
  return (
    <Row>
      <h5 style={{ paddingLeft: "6em" }}>Booking Website</h5>
      <Col className={styles.Icon}>
        <Navbar
          type={list[0].type}
          icon={list[0].icon}
          active={list[0].active}
        />
        <Navbar
          type={list[1].type}
          icon={list[1].icon}
          active={list[1].active}
        />
        <Navbar
          type={list[2].type}
          icon={list[2].icon}
          active={list[2].active}
        />
        <Navbar
          type={list[3].type}
          icon={list[3].icon}
          active={list[3].active}
        />
        <Navbar
          type={list[4].type}
          icon={list[4].icon}
          active={list[4].active}
        />
      </Col>
      <Col className={styles.Login} lg={1}>
        <button>Register</button>
        <button>Login</button>
      </Col>
    </Row>
  );
}

export default Header;
