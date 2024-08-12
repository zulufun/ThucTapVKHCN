import React from "react";
import { Row, Col } from "antd";
import img from "../../assets/Logo_của_AMST.png";

const VKHQS2: React.FC = () => {
  return (
    <div className="thong-ke-count" style={{ textAlign: "center", marginTop: "50px" }}>
      <Row>
        <Col span={24}>
          <img
           src={img}// Thay thế bằng URL của ảnh tiêu đề
            alt="MTA 1"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col span={24}>
          <h2 style={{ fontWeight: "bold" }}>Viện Khoa Học Và Công Nghệ 2</h2>
        </Col>
      </Row>
    </div>
  );
};

export default VKHQS2;
