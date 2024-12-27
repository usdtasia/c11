import React from "react";
import {AFFILIATE_LEVELS} from "../assets/static";
import {useTranslation} from "react-i18next";

function Affilate() {

  const {t} = useTranslation();

  return (
      <div className="homeMain home_container container other_container faq_container">
        <div className="order__h1_container">
          <h1>
            {t("AffilateProgram")}
          </h1>
        </div>

        <p className="faq_a">&nbsp;&nbsp;&nbsp;&nbsp;{t("Affilate_txt1")}</p>

        <table className="affiliate-table">
          <thead>
          <tr>
            <th>{t("Affilate_level")}</th>
            <th>{t("Affilate_refs")}</th>
            <th>{t("Affilate_yours")}</th>
          </tr>
          </thead>
          <tbody>
          {AFFILIATE_LEVELS.map(({level, refs, yours}) => (
              <tr key={level}>
                <td>{level}</td>
                <td>{refs}</td>
                <td>{yours}</td>
              </tr>
          ))}
          </tbody>
        </table>

        <p className="faq_a">{t("Affilate_txt2")}</p>
      </div>
  );
}

export default Affilate;
