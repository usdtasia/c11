import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function FaqComponent() {
  const { t } = useTranslation();
  return (
    <div className="homeMain home_container container other_container faq_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">{t("FAQ")}</h1>
      </div>
      <span className="faq_q">{t("HomeQuestionsBlock1")}</span>
      <span className="faq_a">
        &nbsp;&nbsp;&nbsp;&nbsp; {t("HomeAnswersBlock1")}
      </span>
      <span className="faq_q">{t("HomeQuestionsBlock2")} </span>
      <span className="faq_a">
        <Trans i18nKey="HomeAnswersBlock2" components={{ br: <br /> }} />
      </span>
      <span className="faq_q">{t("HomeQuestionsBlock3")}</span>
      <span className="faq_a">
        &nbsp;&nbsp;&nbsp;&nbsp; {t("HomeAnswersBlock3")}
      </span>
      <span className="faq_q">{t("HomeQuestionsBlock4")}</span>
      <span className="faq_a">
        &nbsp;&nbsp;&nbsp;&nbsp; {t("HomeAnswersBlock4")}
      </span>
      <span className="faq_q">{t("HomeQuestionsBlock5")}</span>
      <span className="faq_a">
        &nbsp;&nbsp;&nbsp;&nbsp; {t("HomeAnswersBlock5")}
      </span>
      <span className="faq_q">{t("HomeQuestionsBlock6")}</span>
      <span className="faq_a">
        &nbsp;&nbsp;&nbsp;&nbsp; {t("HomeAnswersBlock6")}
      </span>
    </div>
  );
}

export default FaqComponent;
