import React from "react";
import arrow from "../assets/imgs/arrow.png";

export default function Quote(props) {
  const { mainQuote, author, moreInfoArrow } = props;
  return (
    <div id="firstQuote" className="quote">
      <div className="whiteDivSpace">
        <h4>{mainQuote}</h4>

        <h5>{author}</h5>
        {moreInfoArrow && (
          <a href="#album">
            <img className="arrow" src={arrow} alt="scroll down" />
          </a>
        )}
      </div>
    </div>
  );
}
