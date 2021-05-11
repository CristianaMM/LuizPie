import React from "react";
import { Row } from "react-flexbox-grid";
import MediaAnchors from "./MediaAnchors";

export default function MobileFooter() {
  return (
    <div className="mobileFooter">
      <Row center="xs">
        <MediaAnchors keyWord="mobile-footer" />
      </Row>
    </div>
  );
}
