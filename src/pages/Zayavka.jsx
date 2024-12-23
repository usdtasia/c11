import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";

import PersonalInfo from "../components/zayavka/PersonalInfo";
import QuickExchangeTime from "../components/zayavka/QuickExchangeTime";
import OrderCurrencySend from "../components/zayavka/OrderCurrencySend";
import OrderCurrencyGet from "../components/zayavka/OrderCurrencyGet";
import OrderCurrencyMobile from "../components/zayavka/OrderCurrencyMobile";

import { format } from "date-fns";

import { fiatImageMap } from "../assets/fiatImageMap";
import { currencyImageMap } from "../assets/currencyImageMap";

function Zayavka() {
  const { t } = useTranslation();
  const currencyImages = useSelector(
    (state) => state.currencyImageReducer.currencyImages
  );
  const imgArrays = { ...fiatImageMap, ...currencyImageMap, ...currencyImages };
  const { transactionId } = useParams();
  const [visibleBtn, setVisibleBtn] = useState(true);
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState(true);

  const loginTxt = useSelector((state) => state.loginReducer.login);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/transaction/${transactionId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setError(false);
        setTransactionData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, [transactionId, token, loginTxt]);

  useEffect(() => {
    if (transactionData && transactionData.status === 0) {
      setVisibleBtn(true);
    } else {
      setVisibleBtn(false);
    }
  }, [transactionData]);

  if (!transactionData)
    return (
      <main className="homeMain home_container container other_container">
        <p className="loading_history">Loading...</p>
        <p className="loading_history logInPlz_history">
          It can be a transaction of another user
        </p>
      </main>
    );

  if (error)
    return (
      <main className="homeMain home_container container other_container">
        <p className="loading_history">Loading...</p>
        <p className="loading_history logInPlz_history">
          It can be a transaction of another user
        </p>
      </main>
    );

  const formattedDate = format(
    new Date(transactionData.createdAt),
    "dd.MM.yyyy HH:mm"
  );
  const statusMap = {
    0: t("Created"),
    1: t("Pending"),
    2: t("Cancelled"),
    3: t("Success"),
    4: t("Paid"),
  };

  const getRate = () => {
    if (transactionData?.from?.value && transactionData?.to?.value) {
      return transactionData.to.value / transactionData.from.value;
    }
    return 0;
  };

  const rate = getRate();

  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">
          {t("Order")} #{transactionData.id}
        </h1>
      </div>
      <div className="exchange_container order_exchange">
        <section className="quick__exchange_container quick__exchange_container_order">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding order_padding">
          <QuickExchangeTime
            formattedDate={formattedDate}
            rate={rate}
            fromName={transactionData.from.name}
            toName={transactionData.to.name}
          />
          <section className="quick__exchange_curr order_exch_curr">
            <OrderCurrencySend
              fromName={transactionData.from.name}
              value={transactionData.from.value}
              img={imgArrays[transactionData.from.name]}
            />
            <OrderCurrencyGet
              toName={transactionData.to.name}
              value={transactionData.to.value}
              img={imgArrays[transactionData.to.name]}
            />
          </section>
          <OrderCurrencyMobile
            fromName={transactionData.from.name}
            toName={transactionData.to.name}
            toValue={transactionData.to.value}
            fromValue={transactionData.from.value}
            toImg={imgArrays[transactionData.to.name]}
            fromImg={imgArrays[transactionData.from.name]}
          />
          <PersonalInfo
            email={transactionData.email}
            name={transactionData.name}
            telega={transactionData.telegram}
            wallet={transactionData.wallet}
          />
          <section className="order_status">
            <p className="order__status_p">
              {t("Order_statusLong")} {transactionData.id}
            </p>
            <span className="order__status_p">
              {t("Order_statusShort")}{" "}
              <span
                className={`statusTransaction_zayavka ${
                  transactionData.status === 0
                    ? "created"
                    : transactionData.status === 1
                    ? "pending"
                    : transactionData.status === 2
                    ? "cancelled"
                    : transactionData.status === 3
                    ? "success"
                    : "paid"
                }`}
              >
                {statusMap[transactionData.status]}
              </span>
            </span>
            <p className="order__status_p order__status_p_mob">
              {t("Order_statusLong")} {transactionData.id}
            </p>
            <p
              className={`statusTransaction_zayavka      order__status_p_mob mob_oplachena 
${
  transactionData.status === 0
    ? "created"
    : transactionData.status === 1
    ? "pending"
    : transactionData.status === 2
    ? "cancelled"
    : transactionData.status === 3
    ? "success"
    : "paid"
}`}
            >
              {statusMap[transactionData.status]}
            </p>
          </section>
          {visibleBtn && (
            <section className="order_instruction">
              <h3 className="order__instruction_h3">{t("WhatShouldBeDone")}</h3>
              <div className="order__instruction_punkty">
                <div className="order__instruction_punkt">
                  <div className="punkt_number">1</div>
                  <p className="punkt_p">{t("WhatShouldBeDone1")}</p>
                </div>
                <div className="order__instruction_punkt">
                  <div className="punkt_number">2</div>
                  <p className="punkt_p">{t("WhatShouldBeDone2")}</p>
                </div>
                <div className="order__instruction_punkt">
                  <div className="punkt_number">3</div>
                  <p className="punkt_p">{t("WhatShouldBeDone3")}</p>
                </div>
                <div className="order__instruction_punkt">
                  <div className="punkt_number">4</div>
                  <p className="punkt_p">{t("WhatShouldBeDone4")}</p>
                </div>
              </div>
            </section>
          )}
          {visibleBtn && (
            <Link to={`/zayavka2/${transactionId}`} className="exchange_btn">
              <button className="quick__exchange_btn order_btn">
                {t("Order_pay")}
              </button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

export default Zayavka;
