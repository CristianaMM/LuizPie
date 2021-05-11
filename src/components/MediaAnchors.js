import React from "react";
import { Col } from "react-flexbox-grid";
import appleMusic from "../assets/imgs/applemusic.png";
import spotify from "../assets/imgs/spotify.png";
import youtube from "../assets/imgs/youtube.png";
import instagram from "../assets/imgs/intagram.png";
import facebook from "../assets/imgs/fb.png";

export default function MediaAnchors(props) {
  const { keyWord } = props;
  const media = [
    { img: appleMusic, alt: "apple music" },
    { img: spotify, alt: "spotify" },
    { img: youtube, alt: "youtube" },
    { img: instagram, alt: "instagram" },
    { img: facebook, alt: "facebook" },
  ];

  return (
    <>
      {media &&
        media.map((m) => {
          return (
            <Col className="iconCol" xs={2} key={`${keyWord}-${m.alt}`}>
              <a className="mediaLink">
                <img className="mediaImg" src={m.img} alt={m.alt} />
              </a>
            </Col>
          );
        })}
    </>
  );
}
