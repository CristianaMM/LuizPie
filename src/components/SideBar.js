import React from "react";
import luizpie from "../assets/imgs/luizpie.png";
import { Col, Row } from "react-flexbox-grid";
import MediaAnchors from "./MediaAnchors";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="barTextContent">
        <Row center="xs" start="md">
          <Col xs={12}>
            <h1 className="title">Luiz Pié</h1>
          </Col>
        </Row>
        <Row center="xs" start="md">
          <MediaAnchors keyWord="side-bar" />
        </Row>
      </div>
      <img className="luizPieImg" src={luizpie} alt="Luiz Pié" />
    </div>
  );
}
