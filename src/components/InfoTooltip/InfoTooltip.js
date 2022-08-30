import "./InfoTooltip.css";

import TooltipContext from "../../context/TooltipContext";
import { TIME_PROMPT } from "../../utils/constants";

import React, { useContext, useEffect } from "react";

function InfoTooltip({ message }) {
  const { setTooltipMessage } = useContext(TooltipContext);

  useEffect(() => {
    setTimeout(() => {
      setTooltipMessage("");
    }, TIME_PROMPT);
  });

  return (
    <div className={`info-tooltip ${message && "info-tooltip_opened"}`}>
      <p className='info-tooltip__text'>{message}</p>
    </div>
  );
}

export default InfoTooltip;
