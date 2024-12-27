import React, {useState, useEffect, useRef, useCallback} from "react";
import $api from "../../api";
import GB from "../../assets/img/flags/GB.svg";
import arrow_down from "../../assets/img/arrow_down.svg";
import menuHamburger from "../../assets/img/menuHamburger.svg";
import profile from "../../assets/img/profile.svg";
import Login from "./Login";
import Registration from "./Registration";
import Burger from "./Burger";
import TruncateText from "./TruncateText";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { STATUS_CODES } from "../../assets/variables";

import axiosInstance from "../../api/axiosInstance";
import { useDispatch } from "react-redux";
import { addLogin, removeLogin, setCurrencyImages } from "../../redux/actions";
import LangDrop from "./LangDrop";
import { useTranslation } from "react-i18next";
import { languages } from "../../assets/languages";

function Header() {

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [login, setLogin] = useState(false);
  const [registr, setRegistr] = useState(false);
  const [burger, setBurger] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [langDrop, setLangDrop] = useState(false);

  const loginRef = useRef(null);
  const logoutRef = useRef(null);
  const registrRef = useRef(null);
  const burgerContentRef = useRef(null);

  const loginTxt = useSelector((state) => state.loginReducer.login);

  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  const savedFlag = Object.values(languages).find(
      (lang) => lang.code === savedLanguage
  )?.flag;
  const currencies = useSelector((state) => state.exchangeReducer.currencies);

  const handleLoginClick = () => {
    setLogin(true);
    setRegistr(false);
    setBurger(false);
    document.body.classList.add("no-scroll");
  };

  const handleRegistrClick = () => {
    setRegistr(true);
    setLogin(false);
    setBurger(false);
    document.body.classList.add("no-scroll");
  };

  const handleCloseModals = () => {
    setLogin(false);
    setRegistr(false);
    setBurger(false);
    setDropdown(false);
    document.body.classList.remove("no-scroll");
  };

  const showBurger = () => {
    setBurger(!burger);
    setLogin(false);
    setRegistr(false);
  };

  const handleClickOutside = (event) => {
    if (
        dropdown &&
        logoutRef.current &&
        !logoutRef.current.contains(event.target)
    ) {
      handleCloseModals();
    }
    if (
        login &&
        loginRef.current &&
        !loginRef.current.contains(event.target)
    ) {
      handleCloseModals();
    }
    if (
        registr &&
        registrRef.current &&
        !registrRef.current.contains(event.target)
    ) {
      handleCloseModals();
    }
    if (
        burger &&
        burgerContentRef.current &&
        !burgerContentRef.current.contains(event.target)
    ) {
      handleCloseModals();
    }
  };

  const getUser = useCallback(async () => {
    const token =
        localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (!token) return;
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;
    let response = await $api.get(`${process.env.REACT_APP_SERVER_URL}/user/${userId}`);
    if (!response) return;
    if (response.status === STATUS_CODES.SUCCESS) {
      const userData = response.data;
      dispatch(addLogin(userData.login));
    }
  },[dispatch]);

  const fetchCurrencyImages = useCallback(async () => {
    const imageUrls = {};

    for (const currency of currencies) {
      if (currency.icon) {
        try {
          const response = await axiosInstance.get(
              `${process.env.REACT_APP_SERVER_URL}/file/`,
              {
                params: { Url: currency.icon },
                responseType: "blob",
              }
          );
          const imageUrl = URL.createObjectURL(response.data);
          imageUrls[currency.value] = imageUrl;
        } catch (error) {
          console.error(`Error fetching image for ${currency.value}:`, error);
        }
      }
    }

    dispatch(setCurrencyImages(imageUrls));
  },[currencies, dispatch]);

  const logout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    dispatch(removeLogin());
  };

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogin = async (login, password) => {
    const loginData = { login, password };
    try {
      const response = await axiosInstance.post(
        `${process.env.REACT_APP_SERVER_URL}/user/auth/login`,
        loginData
      );

      if (response.status === STATUS_CODES.SUCCESS) {
        const token = response.data;
        localStorage.setItem("authToken", token);

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const userResponse = await $api.get(
          `${process.env.REACT_APP_SERVER_URL}/user/${userId}`
        );
        if (userResponse.status === STATUS_CODES.SUCCESS) {
          dispatch(addLogin(userResponse.data.login));
        }
      }
    } catch (error) {
      console.error("Login after registration failed:", error);
    }
  };

  const showDropLang = () => {
    setLangDrop(!langDrop);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown, login, registr, burger]);

  useEffect(() => {
    fetchCurrencyImages();
  }, [fetchCurrencyImages]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <header>
      {login ? (
        <Login
          loginRef={loginRef}
          close={handleCloseModals}
          handleRegistrClick={handleRegistrClick}
        />
      ) : null}
      {registr ? (
        <Registration
          registrRef={registrRef}
          close={handleCloseModals}
          handleLogin={handleLogin}
        />
      ) : null}
      <div className="header_container container">
        <img
          src={menuHamburger}
          alt=""
          className="header_burger"
          onClick={showBurger}
        />
        <Link
          to="/
  "
          className="header_logo"
        >
          USDT<span className="header_logo2">ASIA</span>
        </Link>
        <nav className="header_groupNav">
          <Link to="/" className="groupNav_el">
            {t("Home")}
          </Link>
          {loginTxt ? (
            <Link to="/history" className="groupNav_el">
              {t("History")}
            </Link>
          ) : (
            <p className="groupNav_el" onClick={handleLoginClick}>
              {t("History")}
            </p>
          )}
          <Link to="/faq" className="groupNav_el">
            {t("FAQ")}
          </Link>
          <Link to="/terms" className="groupNav_el">
            {t("TermsOfService")}
          </Link>
          <Link to="/support" className="groupNav_el">
            {t("Support")}
          </Link>
        </nav>
        <div className="header_group2">
          <div className="group2_lang" onClick={showDropLang}>
            <img src={savedFlag} alt="" className="group2__lang_flag" />
            <img src={arrow_down} alt="" className="group2__lang_arr" />
            {langDrop && <LangDrop />}
          </div>
          {loginTxt ? (
            <div
              className="loginTxtHeader_conyForDropdown"
              onClick={showDropdown}
            >
              <div className="group2_lang loginHeaderTxt_container">
                <div className="loginTxtHeader">
                  <TruncateText text={loginTxt} maxLength={7} />
                </div>
                <img src={arrow_down} alt="" className="group2__lang_arr" />
                {dropdown && (
                  <div
                    ref={logoutRef}
                    className="quick__curency_dropdown quick__curency_dropdown_header"
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
            <div className="group2_registration">
              <button
                className="group2__registration_in"
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
        </div>
        <img
          src={profile}
          alt=""
          className="header_profile"
          onClick={showBurger}
        />
      </div>
      {burger ? (
        <Burger
          showBurger={showBurger}
          handleLoginClick={handleLoginClick}
          handleRegistrClick={handleRegistrClick}
          burgerContentRef={burgerContentRef}
          close={handleCloseModals}
        />
      ) : null}
    </header>
  );
}

export default Header;
