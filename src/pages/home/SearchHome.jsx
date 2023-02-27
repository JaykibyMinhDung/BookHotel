import { React, useState } from "react";
import styled from "styled-components";
import styles from "./Header/Home.module.css";
import "./modal.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";

const Style = styled.label`
  width: 80rem;
  line-height: 2.5em;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  right: 3%;
  top: 90%;
  border: 3.5px solid rgb(224, 202, 0);

  & i {
    color: rgba(0, 0, 0, 0.513);
  }
  & span {
    margin: 2rem !important;
  }
`;

// const modal = document.querySelector(".display1");
// Hàm để chuyển qua phần search
function myFunction() {
  window.location.replace("/search");
}
// Dùng để hiển thị ví dụ cho mọi người từ ngày bắt đầu cộng thêm 5 ngày nữa
const selectionRange = {
  startDate: new Date(),
  endDate: addDays(new Date(), 5),
  key: "selection",
};
const SearchHome = (props) => {
  const [startdate, setstartDate] = useState([selectionRange]);

  // const [state, setstate] = useState(modal);

  const handleSelect = (Start) => {
    setstartDate(Start.selection);
  };
  const Book = () => {
    const modal = document.querySelector(".daterange");
    modal.classList.toggle("display");
    console.log("hello");
  };
  return (
    <div>
      <form className="d-flex">
        <Style>
          {" "}
          <span>
            <i className="fa fa-bed"></i>
            <input
              className={styles.input}
              type="text"
              placeholder="Where are you going?"
            />
          </span>
          <span>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <input
              className={styles.input}
              onClick={Book}
              type="text"
              placeholder="29/9/2022"
            />
          </span>
          <span>
            <i className="fa fa-female" aria-hidden="true"></i>
            <input
              className={styles.input}
              type="number"
              placeholder="1 adult - 0 children - 1 room"
            />
          </span>
        </Style>
        <button
          className={"btn .btn-primary " + styles.butt}
          type="button"
          style={{ background: "#1C86EE" }}
          onClick={myFunction}
        >
          Search
        </button>
      </form>
      <DateRange
        //// class trong file modal.css
        className="daterange display"
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        minDate={new Date()}
        onChange={handleSelect}
        ranges={startdate}
      />
    </div>
  );
};

export default SearchHome;
