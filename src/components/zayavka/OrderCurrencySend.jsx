import React from "react";
import useRound from "../../hooks/useRound";

function OrderCurrencySend({ fromName, value, img }) {
  const roundedFromValue = useRound(value, fromName);
  return (
    <div className="order_currency">
      <div className="order__currency_left">
        <img src={img} alt="" className="order__currency_left_currImg" />
        <div className="order__currency_left_txt">
          <p className="order__currency_left_txt_p_send">Send</p>
          <p className="order__currency_left_txt_p">{fromName}</p>
        </div>
      </div>
      <div className="order__currency_left_txt order__curr_end">
        <p className="order__currency_left_txt_p_send">Amount:</p>
        <p className="order__currency_left_txt_p">
          {roundedFromValue} {fromName}
        </p>
      </div>
    </div>
  );
}

export default OrderCurrencySend;
