import React, { useState } from "react";
import menuHamburger from "../../assets/img/menuHamburger.svg";
import GB from "../../assets/img/flags/GB.svg";
import arr_down from "../../assets/img/arrow_down.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeLogin } from "../../redux/actions";
import { Link } from "react-router-dom";
import TruncateText from "./TruncateText";
import { languages } from "../../assets/languages";
import LangDrop from "./LangDrop";
import { useTranslation } from "react-i18next";

function Burger({
  showBurger,
  handleLoginClick,
  handleRegistrClick,
  burgerContentRef,
  close,
}) {
  const { t } = useTranslation();

  // checking if logged in

  const loginTxt = useSelector((state) => state.loginReducer.login);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    dispatch(removeLogin());
  }; // dropdown

  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  // lang

  const [langDrop, setLangDrop] = useState(false);

  const showDropLang = () => {
    setLangDrop(!langDrop);
  };

  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

  const savedFlag = Object.values(languages).find(
    (lang) => lang.code === savedLanguage
  )?.flag;
  return (
    <div className="burgerActive_effects">
      <nav className="burgerActive" ref={burgerContentRef}>
        <div className="flex">
          <img
            src={menuHamburger}
            alt=""
            className="header_burger"
            width="32px"
            onClick={showBurger}
          />
          <div className="header_logo">
            USDT<span className="header_logo2">ASIA</span>
          </div>
        </div>
        <nav className="header_groupNav burgerShow_nav">
          <Link to="/" className="groupNav_el" onClick={close}>
            {t("Home")}
          </Link>
          {token ? (
            <Link to="/history" className="groupNav_el" onClick={close}>
              {t("History")}
            </Link>
          ) : (
            <p className="groupNav_el" onClick={handleLoginClick}>
              {t("History")}
            </p>
          )}
          <Link to="/faq" className="groupNav_el" onClick={close}>
            {t("FAQ")}
          </Link>
          <Link to="/terms" className="groupNav_el" onClick={close}>
            {t("TermsOfService")}
          </Link>
          <Link to="/support" className="groupNav_el" onClick={close}>
            {t("Support")}
          </Link>
        </nav>
        <div className="burger_flag" onClick={showDropLang}>
          <img src={savedFlag} alt="" className="group2__lang_flag" />
          <img src={arr_down} alt="" className="group2__lang_arr" />
          {langDrop && <LangDrop />}
        </div>
        {loginTxt ? (
          <div
            className="loginTxtHeader_conyForDropdown"
            onClick={showDropdown}
          >
            <div className="group2_lang loginHeaderTxt_container loginHeaderTxt_container_burger">
              <div className="loginTxtHeader">
                <TruncateText text={loginTxt} maxLength={7} />
              </div>

              <img src={arr_down} alt="" className="group2__lang_arr" />
              {dropdown && (
                <div
                  className="quick__curency_dropdown quick__curency_dropdown_header quick__curency_dropdown_header_burger"
                  onClick={logout}
                >
                  <div className="quick__curency_dropdown_item">
                    {t("LogOut")}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="burger__login_container">
            <button
              className="group2__registration_in burger_signIn"
              onClick={handleLoginClick}
            >
              {t("SignIn")}
            </button>
            <button
              className="group2__registration_up"
              onClick={handleRegistrClick}
            >
              {t("SignUp")}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Burger;
