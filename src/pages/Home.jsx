import React from "react";

import ExchangeContainer from "../components/homeComponents/ExchangeContainer";
import Rates from "../components/homeComponents/Rates";
import CountryToUsdt from "../components/homeComponents/CountryToUsdt";
import Recent from "../components/homeComponents/Recent";
import SinceCards from "../components/homeComponents/SinceCards";

function restore() {
  return (
    <main className="homeMain home_container container">
      <div className="home__h1_container">
        <h1 className="home_h1">USDT ASIA CRYPTOCURRENCY EXCHANGE</h1>
        <h1 className="home_h1_mobile">LIGHTNING CRYPTOCURRENCY EXCHANGE</h1>
      </div>
      <ExchangeContainer />
      <Rates />
      <CountryToUsdt />
      <SinceCards />
      <Recent />
    </main>
  );
}

export default restore;
