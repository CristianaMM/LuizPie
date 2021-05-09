import React from "react";
import appleMusic from "../assets/imgs/applemusic.png";
import spotify from "../assets/imgs/spotify.png";
import youtube from "../assets/imgs/youtube.png";
import instagram from "../assets/imgs/intagram.png";
import facebook from "../assets/imgs/fb.png";
import luizpie from "../assets/imgs/luizpie.png";

export default function SideBar() {
  return (
    <div className="sideBar">
      <h1 className="title">Luiz Pié</h1>
      <a className="mediaLink">
        <img src={appleMusic} alt="apple music" />{" "}
      </a>
      <a className="mediaLink">
        <img src={spotify} alt="spotify" />
      </a>
      <a className="mediaLink">
        <img src={youtube} alt="youtube" />
      </a>
      <a className="mediaLink">
        <img src={instagram} alt="instagram" />
      </a>
      <a className="mediaLink">
        <img src={facebook} alt="facebook" />
      </a>
      <img className="luizPieImg" src={luizpie} alt="Luiz Pié" />
    </div>
  );
}
