import React, { useState, useEffect } from "react";
import {logEvent} from "../../assets/analytics";
import autorenew from "../../assets/img/autorenew.svg";
import autorenew2 from "../../assets/img/autorenew2.svg";

import done from "../../assets/img/done.svg";
import CurrChoose from "./CurrChoose";
import Wallet from "./Wallet";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addHighlight,
  removeHighlight,
  setCurrencies,
  setRates,
  swapSendGet,
} from "../../redux/actions";

import axios from "axios";

// all crypto

import Bitcoin from "../../assets/img/Bitcoin.svg";
import tCurr from "../../assets/img/tCurr.svg";
import Ethereum from "../../assets/img/Ethereum.svg";
import WrappedBNB from "../../assets/img/WrappedBNB.svg";
import { fiatImageMap } from "../../assets/fiatImageMap";

import { currencyImageMap } from "../../assets/currencyImageMap";
import { jwtDecode } from "jwt-decode";

import { useTranslation } from "react-i18next";
function ExchangeContainer() {
  const currencyImages = useSelector(
    (state) => state.currencyImageReducer.currencyImages
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokensResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/binance/exchange-tokens`
        );
        const ratesResponse = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/binance/currencies`
        );
        dispatch(setCurrencies(tokensResponse.data));
        dispatch(setRates(ratesResponse.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 900000); //15хв

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleInactiveButton = () => {
    dispatch(addHighlight());
  };

  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const email = useSelector((state) => state.contactsReducer.email);
  const name = useSelector((state) => state.contactsReducer.name);
  const telega = useSelector((state) => state.contactsReducer.telega);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  const wallet = useSelector((state) => state.contactsReducer.wallet);

  const highlight = useSelector((state) => state.highlightReducer.highlight);

  useEffect(() => {
    if (highlight) {
      setTimeout(() => {
        dispatch(removeHighlight());
      }, 500);
    }
  }, [dispatch, highlight]);

  // checking if logged in + btn thx changing

  const loginTxt = useSelector((state) => state.loginReducer.login);

  const [buttonText, setButtonText] = useState("EXCHANGE NOW");

  // checking if email is valid

  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handleBtnClick = () => {
    if (num < minSend || convertedValue < minGet) {
      setButtonText("Сумма обмена меньше минимума");
      setTimeout(() => {
        setButtonText("EXCHANGE NOW");
      }, 2000);
    }
  };

  const sendName = useSelector(
    (state) => state.currCryptoCurrChooseReducer.sendCurrency
  );

  const getName = useSelector(
    (state) => state.currCryptoCurrChooseReducer.getCurrency
  );

  const imgArrays = { ...fiatImageMap, ...currencyImageMap, ...currencyImages };

  const imgSrcSend = imgArrays[sendName];

  const imgSrcGet = imgArrays[getName];

  const priceArray = useSelector((state) => state.exchangeReducer.rates);

  const gettingPrice = () => {
    const rateObj = priceArray.find(
      (obj) => obj.from.name === sendName && obj.to.name === getName
    );
    return rateObj ? rateObj.rate : "N/A";
  };

  const gettingPercent = () => {
    const percentObj = priceArray.find(
      (obj) => obj.from.name === sendName && obj.to.name === getName
    );
    return percentObj ? percentObj.percent : "N/A";
  };

  const num = useSelector((state) => state.sendNumReducer.num);

  const exchangePercent = gettingPercent();
  const exchangePercentNum = exchangePercent / 100 + 1;

  const exchangeRate = gettingPrice();

  const convertedValue = num * exchangeRate * exchangePercentNum;

  const telegram = telega;

  const creatingTransaction = async (e) => {
    const transactionData = {
      wallet,
      from: {
        name: sendName,
        value: num,
      },
      to: {
        name: getName,
        value: convertedValue,
      },
      email,
      name,
      telegram,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/transaction`,
        transactionData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      logEvent(
          "Button",
          "Click",
          "ExchangeNowButton"
      );
      navigate(`/zayavka/${response.data}`);
    } catch (error) {
      console.error(error);
    }
  };

  const [minSend, setMinSend] = useState(null);
  const [minGet, setMinGet] = useState(null);

  useEffect(() => {
    const rateObj = priceArray.find(
      (obj) => obj.from.name === sendName && obj.to.name === getName
    );
    if (rateObj) {
      setMinSend(rateObj.from.minCount);
      setMinGet(rateObj.to.minCount);
    }
  }, [priceArray, sendName, getName]);

  const swapping = () => {
    setTimeout(() => {
      dispatch(swapSendGet());
    }, 50);
  };

  const { t } = useTranslation();

  return (
    <div className="exchange_container">
      <section className="quick__exchange_container">
        <div className="quick__exchange_border"></div>
      </section>
      <div className="exchange_container_padding">
        <section className="quick__currencyChoioce_block">
          <CurrChoose
            key={`send-${sendName}`}
            img={imgSrcSend}
            txt={sendName}
            input={true}
            symb={sendName}
            status="Send"
          />
          <img
            src={autorenew}
            alt=""
            className="quick__currencyChoioce_autorenew"
            onClick={swapping}
          />
          <img
            src={autorenew2}
            alt=""
            className="quick__currencyChoioce_autorenewMobile_img"
            onClick={swapping}
          />

          <CurrChoose
            key={`get-${getName}`}
            img={imgSrcGet}
            txt={getName}
            number={convertedValue.toFixed(2)}
            symb={getName}
            status="Get"
          />
        </section>
        <section className="quick__exchange_currenct_span">
          <div className="quick__exchange_currenct_span_1 quick__exchange_currenct_span_1_1_isInMobile">
            <div className="quick__exchange_currenct_span_1_1">
              {t("Order_rate")} 1 {sendName} ≈{" "}
              {parseFloat(gettingPrice() * exchangePercentNum).toFixed(2)}{" "}
              {getName}
            </div>
            <div
              className={`quick__exchange_currenct_span_1_2 ${
                highlight ? "quick__exchange_currenct_span_1_2_high" : ""
              }`}
            >
              Min: {minSend} {sendName}
            </div>
          </div>
          <div className="quick__exchange_currenct_span_1">
            <div className="quick__exchange_currenct_span_1_1"></div>
            {/* резерв:n */}
            <div
              className={`quick__exchange_currenct_span_1_2 ${
                highlight ? "quick__exchange_currenct_span_1_2_high" : ""
              }`}
            >
              Min: {minGet} {getName}
            </div>
          </div>
        </section>
        <Wallet isEmailValid={isEmailValid} />
        <section className="quick__exchange_done">
          <div
            className={`quick__exchange_done_rect mailNameTelega__mail_container ${
              highlight ? "highlight" : ""
            }`}
            onClick={handleCheckboxChange}
          >
            {checked && (
              <img src={done} alt="" className="quick__exchange_img" />
            )}
          </div>
          <Link to="terms" className="quick__exchange_span">
            {t("Home_checkboxTxt1")}{" "}
            <span className="change_span_done_blue">
              {t("Home_checkboxTxt2")}
            </span>{" "}
            {t("Home_checkboxTxt3")}{" "}
            <span className="change_span_done_blue">
              {t("Home_checkboxTxt4")}
            </span>
          </Link>
        </section>

        {checked &&
        email.length > 0 &&
        name.length > 0 &&
        isEmailValid &&
        num > minSend &&
        convertedValue > minGet ? (
          <div className="exchange_btn">
            <button
              className="quick__exchange_btn"
              onClick={creatingTransaction}
            >
              EXCHANGE NOW
            </button>
          </div>
        ) : (
          <section className="exchange_btn">
            <button
              className="quick__exchange_btn
              quick__exchange_btn_nonActive"
              onClick={() => {
                handleInactiveButton();
                handleBtnClick();
              }}
            >
              {buttonText}
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

export default ExchangeContainer;
