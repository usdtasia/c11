import React from "react";
import order_contact from "../../assets/img/order_contact.svg";
import order_email from "../../assets/img/order_email.svg";
import order_telegram from "../../assets/img/order_telegram.svg";
import { useTranslation } from "react-i18next";

function PersonalInfo({ name, email, telega, wallet }) {
  const { t } = useTranslation();
  return (
    <section className="order_persInfo">
      <h3 className="order__persInfo_h3">{t("PersonalInformation")}</h3>
      <div className="order_persInfo_content">
        <div className="order__persInfo_el">
          <img src={order_email} alt="" className="order__persInfo_img" />
          <div className="order__persInfo_emailWord">E-mail:</div>
          <div className="order__persInfo_email">{email}</div>
        </div>
        <div className="order__persInfo_el">
          <img src={order_contact} alt="" className="order__persInfo_img" />
          <div className="order__persInfo_emailWord">Name:</div>
          <div className="order__persInfo_email">{name}</div>
        </div>
        <div className="order__persInfo_el">
          <img src={order_telegram} alt="" className="order__persInfo_img" />
          <div className="order__persInfo_emailWord">Telegram:</div>
          <div className="order__persInfo_email">{telega}</div>
        </div>
        <div className="qrSection_reqizity">
          <p className="qrSection__reqizity_word white">
            {t("Order2_qr2")}&nbsp;
          </p>
          <p className="order__persInfo_email">{wallet}</p>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
