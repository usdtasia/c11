import React, {useMemo} from "react";
import FaqList from "../components/faq/FaqList";
import {useTranslation} from "react-i18next";
import {SUPPORT_ITEMS} from "../assets/static";

function Support() {

  const { t } = useTranslation();

  const supportItems = useMemo(() => {
    return SUPPORT_ITEMS(t);
  },[]);

  return (
      <div className="homeMain home_container container other_container faq_container">
        <div className="order__h1_container">
          <h1>{t("Support")}</h1>
        </div>

        <FaqList
            list={supportItems}
        />

        <span className="faq_a">{t("Support_a4")}</span>
        <span className="faq_a">{t("Support_a5")}</span>
        <span className="faq_a">{t("Support_a6")}</span>
      </div>
  )
}

export default Support;
