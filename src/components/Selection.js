import React, { useState } from "react";

const Selection = ({applyColor }) => {
  const [style, updateSelectionStyle] = useState({ background: "" });
  return (
    <div
      className="fix-box"
      style={{ background: style.background }}
      onClick={() => applyColor(updateSelectionStyle)}
    ></div>
  );
};

export default Selection;
