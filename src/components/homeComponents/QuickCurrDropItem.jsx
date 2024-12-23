import React from "react";

function QuickCurrDropItem({ name, onClick, imgSrc }) {
  return (
    <div className="quick__curency_dropdown_item" onClick={onClick}>
      <img src={imgSrc} alt="" className="quick__curency_dropdown_item_img" />
      <div className="quick__curency_dropdown_item_name">{name}</div>
    </div>
  );
}

export default QuickCurrDropItem;
