import React from "react";

export default function PaginationDots() {
  const pages = [
    { ref: "firstQuote" },
    { ref: "album" },
    { ref: "secondQuote" },
    { ref: "biografia" },
    { ref: "contato" },
  ];
  return (
    <div className="dots">
      {pages &&
        pages.map((p) => {
          return (
            <a href={`#${p.ref}`} key={`dot-${p.ref}`}>
              <div className="dot"></div>
            </a>
          );
        })}
    </div>
  );
}
