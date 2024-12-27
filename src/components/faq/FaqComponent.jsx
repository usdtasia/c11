import React, {useMemo} from "react";
import {FAQ_ITEMS} from "../../assets/static";
import FaqItem from "./FaqItem";
import FaqList from "./FaqList";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function FaqComponent() {

  const { t } = useTranslation();

  const faqItems = useMemo(() => {
      return FAQ_ITEMS(t);
  },[]);

  return (
      <div className="homeMain home_container container other_container faq_container">
          <div className="order__h1_container">
              <h1>{t("FAQ")}</h1>
          </div>
          <FaqList
              list={faqItems}
          />
      </div>
  );
}

export default FaqComponent;
