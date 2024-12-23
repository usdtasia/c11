import React, { useState, useEffect } from "react";
import walletImg from "../../assets/img/wallet.svg";
import walletCardImg from "../../assets/img/walletCard.svg";
import mailHome from "../../assets/img/mailHome.svg";
import profileHome from "../../assets/img/profileHome.svg";
import telegaHome from "../../assets/img/telegaHome.svg";
import content_copy from "../../assets/img/content_copy.svg";
import qr_code from "../../assets/img/qr_code.svg";

import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setName,
  setTelega,
  removeHighlight,
  setWallet,
} from "../../redux/actions";

import { networkArr } from "../../assets/networkArr";

function Wallet({ isEmailValid }) {
  const currencies = useSelector((state) => state.exchangeReducer.currencies);
  const dispatch = useDispatch();

  const [isFiat, setIsFiat] = useState(false);

  const getName = useSelector(
    (state) => state.currCryptoCurrChooseReducer.getCurrency
  );

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };
  const handleTelegaChange = (e) => {
    dispatch(setTelega(e.target.value));
  };

  const handleWalletChange = (e) => {
    if (isFiat && e.target.value.length > 16) return;
    dispatch(setWallet(e.target.value));
  };

  const email = useSelector((state) => state.contactsReducer.email);
  const name = useSelector((state) => state.contactsReducer.name);
  const telega = useSelector((state) => state.contactsReducer.telega);
  const wallet = useSelector((state) => state.contactsReducer.wallet);

  const highlight = useSelector((state) => state.highlightReducer.highlight);

  useEffect(() => {
    if (highlight) {
      setTimeout(() => {
        dispatch(removeHighlight());
      }, 500);
    }
  }, [dispatch, highlight]);

  const addressName = networkArr[getName];

  useEffect(() => {
    const selectedCurrency = currencies.find(
      (currency) => currency.value === getName
    );
    setIsFiat(selectedCurrency ? selectedCurrency.type === 1 : false);
  }, [currencies, getName]);

  const hasValue =
    wallet.length > 0 && (!isFiat || (isFiat && wallet.length === 16));

  return (
    <>
      <section
        className={`quick__exchange_trcAdress_container mailNameTelega__mail_container ${
          highlight ? "highlight" : ""
        }`}
      >
        <div className="trcAdress_wallet">
          <img
            src={isFiat ? walletCardImg : walletImg}
            alt=""
            className="wallet_img"
          />
          <input
            type="text"
            className="wallet_input"
            placeholder={
              isFiat
                ? "Your card number"
                : `Your ${addressName ? addressName : ""} address`
            }
            onChange={handleWalletChange}
            value={wallet}
            maxLength={isFiat ? 16 : undefined}
          />
        </div>

        <div className="trcAdress_imgs">
          <img src={content_copy} alt="" className="trcAdress_imgs_img" />
          <img src={qr_code} alt="" className="trcAdress_imgs_img" />
        </div>
      </section>
      {!hasValue && isFiat ? (
        <p className="inputCardAlert">input must contain exactly 16 digits</p>
      ) : (
        <></>
      )}
      {hasValue && (
        <section className="mailNameTelega_container">
          <div
            className={`mailNameTelega__mail_container ${
              highlight ? "highlight" : ""
            }${!isEmailValid ? "inputErrorEmail" : ""}`}
          >
            <img
              src={mailHome}
              alt=""
              className="wallet_img wallet__img_3inps"
            />
            <input
              type="email"
              className="wallet_input"
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
            />
            {!isEmailValid && <p className="errorTextEmail">invalid email</p>}
          </div>
          <div
            className={`mailNameTelega__mail_container ${
              highlight ? "highlight" : ""
            }`}
          >
            <img
              src={profileHome}
              alt=""
              className="wallet_img wallet__img_3inps"
            />
            <input
              type="text"
              className="wallet_input"
              placeholder="Name"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div
            className={`mailNameTelega__mail_container ${
              highlight ? "highlight" : ""
            }`}
          >
            <img
              src={telegaHome}
              alt=""
              className="wallet_img wallet__img_3inps"
            />
            <input
              type="text"
              className="wallet_input"
              placeholder="Telegram/WhatsApp"
              onChange={handleTelegaChange}
              value={telega}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Wallet;
