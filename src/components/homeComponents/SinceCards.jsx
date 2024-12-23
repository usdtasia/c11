import React from "react";
import { useTranslation } from "react-i18next";
import mouse1 from "../../assets/img/mouse1.png";
import mouse2 from "../../assets/img/mouse2.png";
import mouse3 from "../../assets/img/mouse3.png";

function SinceCards() {
  const { t } = useTranslation();
  return (
    <section className="since">
      <h2 className="since_h2">TRUST SINCE 2018</h2>
      <div className="since_content">
        <figure className="since_mousePic">
          <img src={mouse1} alt="" className="since_mouse" />
          <div className="since__mouse_txt">
            <h5 className="since__mouse_h5">{t("CardOneMain")}</h5>
            <p className="since__mouse_p">{t("CardOneTxt")}</p>
          </div>
        </figure>
        <figure className="since_mousePic">
          <img src={mouse2} alt="" className="since_mouse" />
          <div className="since__mouse_txt">
            <h5 className="since__mouse_h5">{t("CardTwoMain")}</h5>
            <p className="since__mouse_p">{t("CardTwoTxt")}</p>
          </div>
        </figure>
        <figure className="since_mousePic">
          <img src={mouse3} alt="" className="since_mouse" />
          <div className="since__mouse_txt">
            <h5 className="since__mouse_h5">{t("CardThreeMain")}</h5>
            <p className="since__mouse_p">{t("CardThreeTxt")}</p>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default SinceCards;
