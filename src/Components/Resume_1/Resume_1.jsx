import React from "react";
import "./style1.css";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Resume_downloader from "./Resume_downloader";
const Resume_1 = ({ formData }) => {
  return (
    <div>
      <Resume_downloader downloadFileName="CustomPdf" rootElementId="kk" />
      <div className="container" id="kk">
        <LeftSide formData={formData} />
        <RightSide formData={formData} />
      </div>
    </div>
  );
};

export default Resume_1;
