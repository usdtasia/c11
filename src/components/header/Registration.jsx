import React, { useState } from "react";
import done from "../../assets/img/done.svg";
import hrestik from "../../assets/img/hrestik.svg";
import login_profile from "../../assets/img/login_profile.svg";
import login_lock from "../../assets/img/login_lock.svg";
import alternate_email from "../../assets/img/alternate_email.svg";

import axios from "axios";
import { useTranslation } from "react-i18next";
import {logEvent} from "../../assets/analytics";

function Registration({ registrRef, close, handleLogin }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  // --------------------------
  // --------------------------
  // --------------------------
  // --------------------------
  // --------------------------
  // --------------------------

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === password2) {
      const registrationData = { login, password, email };
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/user/auth/registration`,
          registrationData
        );

        if (response.status === 200) {
          console.log("Registration successful:", response.data);
          logEvent(
              "Button",
              "Click",
              "RegisterButton"
          );
          await handleLogin(login, password);
          close();
        }
      } catch (error) {
        console.log(error);
        alert("The account already exists or you entered invalid data");
      }
    } else {
      alert("Passwords do not match");
    }
  };
  const { t } = useTranslation();
  return (
    <div className="login_container">
      <form onSubmit={handleSubmit} className="login_content" ref={registrRef}>
        <div className="login__word_container">
          <p className="login_word">REGISTRATION</p>
          <img src={hrestik} alt="" className="login_hrestik" onClick={close} />
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">{t("Login_1")}</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={login_profile} alt="" className="loginInput_icon" />
            <input
              type="text"
              className="loginInput_input"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">{t("Login_3")}</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={login_lock} alt="" className="loginInput_icon" />
            <input
              type="password"
              className="loginInput_input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">{t("Registration_1")}</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={login_lock} alt="" className="loginInput_icon" />
            <input
              type="password"
              className="loginInput_input"
              placeholder="Password"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">E-mail:</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={alternate_email} alt="" className="loginInput_icon" />
            <input
              type="email"
              className="loginInput_input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="login_rememberMe">
          <div className="done_rect">
            <div
              className="quick__exchange_done_rect quick__exchange_done_rect_login"
              onClick={handleCheckboxChange}
            >
              {checked && (
                <img src={done} alt="" className="quick__exchange_img" />
              )}
            </div>
          </div>
          <p className="rememberMe_p">{t("Registration_2")}</p>
        </div>
        {checked &&
        login.length > 0 &&
        password.length > 0 &&
        password2.length > 0 &&
        email.length > 0 ? (
          <section className="exchange_btn">
            <button className="quick__exchange_btn order_btn" type="submit">
              {t("Registration_3")}
            </button>
          </section>
        ) : (
          <section className="exchange_btn quick__exchange_btn_nonActive">
            <button className="quick__exchange_btn order_btn" disabled>
              {t("Registration_3")}
            </button>
          </section>
        )}
      </form>
    </div>
  );
}

export default Registration;
