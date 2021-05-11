import React from "react";
import arrow from "../assets/imgs/arrow.png";

export default function Quote(props) {
  const { mainQuote, author, sectionID, arrowRef } = props;
  return (
    <div id={sectionID} className="quote">
      <div className="whiteDivSpace">
        <h4>{mainQuote}</h4>

        <h5>{author}</h5>
        {arrowRef && (
          <a href={arrowRef}>
            <img className="arrow" src={arrow} alt="scroll down" />
          </a>
        )}
      </div>
    </div>
  );
}
