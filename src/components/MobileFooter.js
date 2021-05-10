import React from "react";
import { Col, Row } from "react-flexbox-grid";
import appleMusic from "../assets/imgs/applemusic.png";
import spotify from "../assets/imgs/spotify.png";
import youtube from "../assets/imgs/youtube.png";
import instagram from "../assets/imgs/intagram.png";
import facebook from "../assets/imgs/fb.png";

export default function MobileFooter() {
  return (
    <div className="mobileFooter">
      <Row center="xs">
        <Col className="iconCol" xs={2}>
          <a className="mediaLink">
            <img className="mediaImg" src={appleMusic} alt="apple music" />{" "}
          </a>
        </Col>
        <Col className="iconCol" xs={2}>
          <a className="mediaLink">
            <img className="mediaImg" src={spotify} alt="spotify" />
          </a>
        </Col>
        <Col className="iconCol" xs={2}>
          <a className="mediaLink">
            <img className="mediaImg" src={youtube} alt="youtube" />
          </a>
        </Col>
        <Col className="iconCol" xs={2}>
          <a className="mediaLink">
            <img className="mediaImg" src={instagram} alt="instagram" />
          </a>
        </Col>
        <Col className="iconCol" xs={2}>
          <a className="mediaLink">
            <img className="mediaImg" src={facebook} alt="facebook" />
          </a>
        </Col>
      </Row>
    </div>
  );
}
