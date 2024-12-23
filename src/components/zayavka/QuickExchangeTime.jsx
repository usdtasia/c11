import React from "react";
import time_line from "../../assets/img/time_line.svg";
import time_graph from "../../assets/img/time_graph.svg";
import calendar from "../../assets/img/calendar.svg";

import { useTranslation } from "react-i18next";

function QuickExchangeTime({ formattedDate, toName, fromName, rate }) {
  const { t } = useTranslation();
  return (
    <section className="quick__exchange_time">
      <div className="exchange__time_el">
        <img src={calendar} alt="" className="exchange__time_img" />
        <p className="exchange__time_span">
          <span className="order_blue">{t("Order_data")}&nbsp;</span>{" "}
          {formattedDate}
        </p>
      </div>
      <img src={time_line} alt="" className="time_line" />
      <div className="exchange__time_el">
        <img src={time_graph} alt="" className="exchange__time_img" />
        <p className="exchange__time_span">
          <span className="order_blue">{t("Order_rate")}&nbsp;</span> 1{" "}
          {fromName} = {""}
          {rate} {toName}
        </p>
      </div>
    </section>
  );
}

export default QuickExchangeTime;
