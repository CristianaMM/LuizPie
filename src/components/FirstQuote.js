import React from "react";
import arrow from "../assets/imgs/arrow.png";

export default function FirstQuote() {
  return (
    <div id="firstQuote" className="quote">
      <div className="whiteDivSpace">
        <h4>
          Quando aparece alguém assim com bom gosto e oferece sua alma e coração
          pra gente, o mundo se torna mais feliz e acreditável.
        </h4>

        <h5>Nilton Nascimento</h5>
        <a href="#album">
          <img className="arrow" src={arrow} alt="scroll down" />
        </a>
      </div>
    </div>
  );
}
