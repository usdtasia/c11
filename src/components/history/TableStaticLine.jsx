import React from "react";
import { useTranslation } from "react-i18next";

function TableStaticLine() {
  const { t } = useTranslation();
  return (
    <div className="table__static_line">
      <p className="table__static_line_el">{t("History_1")}</p>
      <p className="table__static_line_el">{t("History_2")}</p>
      <p className="table__static_line_el">{t("History_3")}</p>
      <p className="table__static_line_el">{t("History_4")}</p>
      <p className="table__static_line_el table__static_line_el_amount">
        {t("History_3")}
      </p>
      <p className="table__static_line_el">{t("History_5")}</p>
    </div>
  );
}

export default TableStaticLine;
