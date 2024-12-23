import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function TermsComponent() {
  const { t } = useTranslation();
  return (
    <div className="homeMain home_container container other_container faq_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">{t("Terms_h")}</h1>
      </div>

      <span className="faq_a">
        <Trans i18nKey="Terms_allTxt" components={{ br: <br /> }} />
      </span>
    </div>
  );
}

export default TermsComponent;
