import React from "react";
import { Row, Col } from "antd";
import myImage from "../../assets/image.png";

const MTA1: React.FC = () => {
  return (
    <div className="thong-ke-count" style={{ textAlign: "center", marginTop: "50px" }}>
      <Row>
        <Col span={24}>
          <img
            src={myImage} // Thay thế bằng URL của ảnh tiêu đề
            alt="MTA 1"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col span={24}>
          <h2 style={{ fontWeight: "bold" }}>Học Viện Kỹ Thuật Quân Sự 1</h2>
        </Col>
      </Row>
    </div>
  );
};

export default MTA1;
