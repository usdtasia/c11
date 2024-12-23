import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import time_line from "../assets/img/time_line.svg";
import { QRCodeSVG } from "qrcode.react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Zayavka2() {
  const { t } = useTranslation();
  const { transactionId } = useParams();
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

  const statusCancelled = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/transaction/${transactionId}/change-status`,
        { status: 2 },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const statusPending = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/transaction/${transactionId}/change-status`,
        { status: 1 },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(loginTxt > 0 ? "/history" : `/zayavka/${transactionId}`);
  };

  const paidFunc = async () => {
    try {
      await statusPending();
      handleRedirect();
      window.location.reload();
    } catch (error) {
      console.error("Error in paidFunc:", error);
    }
  };

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

  const handleCopyAddress = () => {
    const addressText = transactionData.wallet;
    navigator.clipboard.writeText(addressText);
  };

  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">PAY ORDER #{transactionData.id}</h1>
      </div>
      <div className="exchange_container order_exchange">
        <section className="quick__exchange_container quick__exchange_container_order">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding order_padding pay_txt">
          <section className="pay__txt_top">
            <h5 className="txt__top_h5">{t("Order2_congrat")}</h5>
            <p className="txt__top_p">
              {t("Order2_toFinish1")} #{transactionData.id}{" "}
              {t("Order2_toFinish2")} {transactionData.from.value.toFixed(2)}.{" "}
              {transactionData.from.name} {t("Order2_toFinish3")}
            </p>
          </section>
          <section className="pay_instruction">
            <div className="pay__instruction_el">
              <div className="punkt_number">1</div>
              <p className="pay__instruction_p">{t("Order2_inst1")}</p>
            </div>
            <img src={time_line} alt="" className="pay__instruction_img" />
            <div className="pay__instruction_el">
              <div className="punkt_number">2</div>
              <p className="pay__instruction_p">{t("Order2_inst2")}</p>
            </div>
            <img src={time_line} alt="" className="pay__instruction_img" />
            <div className="pay__instruction_el">
              <div className="punkt_number">3</div>
              <p className="pay__instruction_p">{t("Order2_inst3")}</p>
            </div>
          </section>
          <section className="qrSection">
            <div className="qrSection_content">
              <QRCodeSVG value={transactionData.wallet} size={193} />
              <div className="qrSection_txt">
                <p className="qrSection_value white">
                  {transactionData.from.value} {transactionData.from.name}
                </p>
                <div className="qrSection_valuta">
                  <p className="qrSection__valuta_word white">
                    {t("Order2_qr1")}&nbsp;
                  </p>
                  <p className="qrSection__valuta_name">
                    {transactionData.from.name}
                  </p>
                </div>
                <div className="qrSection_reqizity">
                  <p className="qrSection__reqizity_word white">
                    {t("Order2_qr2")}&nbsp;
                  </p>
                  <p className="qrSection__reqizity_code">
                    {transactionData.wallet}
                  </p>
                </div>
                <p
                  className="qrSection_copyAddress"
                  onClick={handleCopyAddress}
                >
                  {t("Order2_qr3")}
                </p>
              </div>
            </div>
          </section>
          <section className="pay__txt_bottom_container">
            <p className="pay__txt_bottom">
              {t("Order2_t1")}
              <br></br>
              <br></br> {t("Order2_t2")}
              <br></br>
              <br></br> {t("Order2_t3")}
              <br></br>
              <br></br> {t("Order2_t4")}
            </p>
          </section>
          <section className="exchange_btn pay_btn_container">
            <Link to="/">
              <button
                className="quick__exchange_btn order_btn pay__btnCancel pay_btn"
                onClick={statusCancelled}
              >
                {t("Order2_cancel")}
              </button>
            </Link>
            <button
              className="quick__exchange_btn order_btn pay_btn"
              onClick={paidFunc}
            >
              {t("Order2_paid")}
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Zayavka2;
