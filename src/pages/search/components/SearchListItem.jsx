import React from "react";
import styles from "./Search.module.css";
import { Col, Row } from "reactstrap";
import styled from "styled-components";

//// Thiết kế style button tổng thể của bài, chỉ thay đổi tọa độ ở mỗi page khác nhau
const Button = styled.button`
  display: inline-block;
  border-radius: 10px;
  padding: 0.5rem 0;

  width: 11rem;
  background: #1c86ee;
  color: white !important;
  border: 0px solid white;
  &:hover {
    background: #f56c6c;
    box-shadow: -5px 4px 3px #f56c6c7a;
    border-radius: 20px;
    transition: 0.5s;
  }
`;
// Nút chuyển hướng sang trang detail
function DetailHotel() {
  window.location.replace("/Detail");
}
const StyleInfor = (props) => {
  return (
    <Row className={styles.card}>
      <Col lg={4}>
        {/* Thiết lập ảnh chung bằng reactjs */}
        <img src={props.image_url} alt={props.name} width={250} height={250} />
      </Col>
      <Col className={styles.align_title} lg={5}>
        <h4>{props.name}</h4>
        <div>
          <p>{props.distance + " form center"}</p>
          <div className={styles.Tag}>
            <p>{props.tag}</p>
          </div>
          <div className={styles.detail}>
            <p>{props.description}</p>
            <div>{props.type}</div>
            <div>
              {/* Thiết lập tự hiển thị dữ liệu từ file JSON có sẵn, không cần thêm thủ công */}
              <p>{props.free_cancel ? "Free cancellation" : ""}</p>
              <span>
                {/* Thiết lập tự hiển thị dữ liệu từ file JSON có sẵn, không cần thêm thủ công */}
                {props.free_cancel
                  ? "you can cancel later, so look in this great price today!"
                  : ""}
              </span>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <Row className={styles.button}>
          <Col sm={3}>{""}</Col>
          <Col sm={6}>{props.rate_text}</Col>
          <Col className={styles.ratelovehome}>{props.rate}</Col>
        </Row>
        <div className={styles.Tax}>
          <p className={styles.dollar}>{"$" + props.price}</p>
          <span className={styles.float}>Includes taxes and fees</span>
        </div>
        <Button className={styles.float} onClick={DetailHotel}>
          see availability
        </Button>
      </Col>
    </Row>
  );
};

export default StyleInfor;
