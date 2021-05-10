import React from "react";
import appleMusic from "../assets/imgs/applemusic.png";
import spotify from "../assets/imgs/spotify.png";
import youtube from "../assets/imgs/youtube.png";
import instagram from "../assets/imgs/intagram.png";
import facebook from "../assets/imgs/fb.png";
import luizpie from "../assets/imgs/luizpie.png";
import { Col, Row } from "react-flexbox-grid";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="barTextContent">
        <Row>
          <Col xs={12}>
            <h1 className="title">Luiz Pié</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <a className="mediaLink">
              <img className="mediaImg" src={appleMusic} alt="apple music" />{" "}
            </a>
          </Col>
          <Col xs={2}>
            <a className="mediaLink">
              <img className="mediaImg" src={spotify} alt="spotify" />
            </a>
          </Col>
          <Col xs={2}>
            <a className="mediaLink">
              <img className="mediaImg" src={youtube} alt="youtube" />
            </a>
          </Col>
          <Col xs={2}>
            <a className="mediaLink">
              <img className="mediaImg" src={instagram} alt="instagram" />
            </a>
          </Col>
          <Col xs={2}>
            <a className="mediaLink">
              <img className="mediaImg" src={facebook} alt="facebook" />
            </a>
          </Col>
        </Row>
      </div>
      <img className="luizPieImg" src={luizpie} alt="Luiz Pié" />
    </div>
  );
}
