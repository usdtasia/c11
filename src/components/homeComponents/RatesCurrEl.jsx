import React from "react";

function RatesCurrEl({ img, symbol, isCurr, onClick }) {
  return (
    <div className={`rates__curr_el ${isCurr}`} onClick={onClick}>
      <img src={img} alt="" className="currency__el_img" />
      <p className="currency__el_abr">{symbol}</p>
    </div>
  );
}

export default RatesCurrEl;
