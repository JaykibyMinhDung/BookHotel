import React, { useState } from "react";
// import { text } from "@fortawesome/fontawesome-svg-core";
// import { Component } from "react";
// import { CardBody, CardImgOverlay, Card } from "reactstrap";
import { isFirstDayOfMonth } from "date-fns/esm";
import Styled from "./Home.module.css";

// Components liên quan đến chức năng tạo viền trắng khi di chuyển chuuột vào
const Navbar = (props) => {
  const [border, setBorder] = useState(true);
  //Khi di chuyển chuột vào thì trạng thái của Icon sẽ đối chiếu với trạng thái hiện tại để thay đổi, nếu true thì hiện viền, còn false thì không
  let Active = {
    border: props.active ? "1px solid white" : "",
    borderRadius: "20px",
  };
  // Trạng thái 2, để tạo viền rộng hơn khi di chuyển chuột
  const Active2 = {
    border: props.active ? "5px" : "",
  };
  // Dùng useState để thay đổi trạng thái của viền
  const [status, setStatus] = useState(Active2);

  // const changestatus = () => {
  //   setTimeout(() => {
  //     if (border) {
  //       setStatus(Active); // Trạng thái có đường kẻ nếu đúng
  //       setBorder(false);
  //     } else {
  //       setStatus(Active2); // Trạng thái không có đường kẻ (Chức năng do sinh viên làm thêm nhưng chưa hoàn thành)
  //       setBorder(true);
  //     }
  //   }, 500);
  // };

  return (
    <div>
      <div
        // onMouseMove={changestatus}
        style={status}
        className={Styled.StyleNavbar}
      >
        <i className={"fa " + props.icon} aria-hidden="true"></i>
        <a href="#">{props.type}</a>
      </div>
    </div>
  );
};

export default Navbar;
