import React from "react";
import useRound from "../../hooks/useRound";

function OrderCurrencyGet({ toName, value, img }) {
  const roundedToValue = useRound(value, toName);
  return (
    <div className="order_currency">
      <div className="order__currency_left">
        <img src={img} alt="" className="order__currency_left_currImg" />
        <div className="order__currency_left_txt">
          <p className="order__currency_left_txt_p_send">Get</p>
          <p className="order__currency_left_txt_p">{toName}</p>
        </div>
      </div>
      <div className="order__currency_left_txt order__curr_end">
        <p className="order__currency_left_txt_p_send">Amount:</p>
        <p className="order__currency_left_txt_p">
          {roundedToValue} {toName}
        </p>
      </div>
    </div>
  );
}

export default OrderCurrencyGet;
