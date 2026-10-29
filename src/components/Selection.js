import React, { useState } from "react";

const Selection = ({applyColor, nextBackground }) => {
  const [style, updateSelectionStyle] = useState({ background: "rgb(34, 193, 195)" });
  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(updateSelectionStyle)}
    ></div>
  );
};

export default Selection;
