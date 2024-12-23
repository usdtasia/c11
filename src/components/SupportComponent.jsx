import React from "react";
import { useTranslation } from "react-i18next";

function SupportComponent() {
  const { t } = useTranslation();
  return (
    <div className="homeMain home_container container other_container faq_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">{t("Support")}</h1>
      </div>
      <span className="faq_q">{t("Support_q1")}</span>
      <span className="faq_a">&nbsp;&nbsp;&nbsp;&nbsp; {t("Support_a1")}</span>
      <span className="faq_q">{t("Support_q2")}</span>
      <span className="faq_a">&nbsp;&nbsp;&nbsp;&nbsp;{t("Support_a2")}</span>
      <span className="faq_q">{t("Support_q3")}</span>
      <span className="faq_a">&nbsp;&nbsp;&nbsp;&nbsp;{t("Support_a3")}</span>

      <span className="faq_a">{t("Support_a4")}</span>
      <span className="faq_a">{t("Support_a5")}</span>
      <span className="faq_a">{t("Support_a6")}</span>
    </div>
  );
}

export default SupportComponent;
