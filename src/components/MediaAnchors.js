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
    {
      img: appleMusic,
      alt: "apple music",
      ref: "https://music.apple.com/us/artist/luiz-pi%C3%A9/1025103454",
    },
    {
      img: spotify,
      alt: "spotify",
      ref:
        "https://open.spotify.com/artist/2tHDlQHcAnf2Cu2hpzLtZw?autoplay=true",
    },
    {
      img: youtube,
      alt: "youtube",
      ref: "https://music.youtube.com/channel/UCEKd_jSQAYrxozKhVk2Vx8Q",
    },
    {
      img: instagram,
      alt: "instagram",
      ref: "https://www.instagram.com/luizpie/",
    },
    {
      img: facebook,
      alt: "facebook",
      ref: "https://www.facebook.com/luizpie/",
    },
  ];

  return (
    <>
      {media &&
        media.map((m) => {
          return (
            <Col className="iconCol" xs={2} key={`${keyWord}-${m.alt}`}>
              <a className="mediaLink" href={m.ref} target="_blank">
                <img className="mediaImg" src={m.img} alt={m.alt} />
              </a>
            </Col>
          );
        })}
    </>
  );
}
