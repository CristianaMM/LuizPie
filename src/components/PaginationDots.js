import React from "react";
import Scrollspy from "react-scrollspy";

export default function PaginationDots() {
  const pages = ["firstQuote", "album", "secondQuote", "biografia", "contato"];
  return (
    <Scrollspy
      className="dots"
      items={["firstQuote", "album", "secondQuote", "biografia", "contato"]}
      currentClassName="active"
    >
      {pages.map((p) => (
        <li key={`dot-item-${p}`}>
          <a href={`#${p}`}>
            <div className="dot"></div>
          </a>
        </li>
      ))}
    </Scrollspy>
  );
}
