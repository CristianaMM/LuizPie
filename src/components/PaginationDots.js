import React from "react";

export default function PaginationDots() {
  return (
    <div className="dots">
      <a href="#firstQuote">
        <div className="dot active"></div>
      </a>
      <a href="#album">
        <div className="dot"></div>
      </a>
      <a href="#secondQuote">
        <div className="dot"></div>
      </a>
      <a href="#biografia">
        <div className="dot"></div>
      </a>
      <a href="#contato">
        <div className="dot"></div>
      </a>
    </div>
  );
}
