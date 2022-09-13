import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Home.module.css";

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
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
const Title = (props) => {
  // const [counts, setCounts] = useState("Xin chào");

  // let co = true;
  // const EventSignIn = () => {
  //   return;
  // };
  return (
    <div className={styles.c}>
      <h3>A lifetime of discounts ? It's Genius</h3>
      <p>
        Get reward for your travels - unlock instant saving 10% or more with a
        free accounts
      </p>
      {/* <p>{counts}</p> */}
      <div>
        <Button type="button" onClick={props.onTop}>
          Sign in/ Register
        </Button>
      </div>
    </div>
  );
};

export default Title;
