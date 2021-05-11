import React from "react";

export default function PaginationDots(props) {
  const { activePage, setActivePage } = props;

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
            <a
              href={`#${p.ref}`}
              onClick={() => setActivePage(p.ref)}
              key={`dot-${p.ref}`}
            >
              <div
                className={activePage === p.ref ? "dot active" : "dot"}
              ></div>
            </a>
          );
        })}
    </div>
  );
}
