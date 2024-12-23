import React from "react";
import CountryToCurrBlock from "./CountryToCurrBlock";
import { fiatImageMap } from "../../assets/fiatImageMap";
import { flags } from "../../assets/flags.js";
import { useSelector } from "react-redux";

function CountryToUsdt() {
  const currencyImages = useSelector(
    (state) => state.currencyImageReducer.currencyImages
  );
  const currencies = useSelector((state) => state.exchangeReducer.currencies);
  const fiat = currencies.filter((currency) => currency.type === 1);

  return (
    <section className="countryToUsdt">
      {fiat.map((currency) => {
        const symbol = currency.value;
        const imgSrc = currencyImages[symbol] || fiatImageMap[symbol];
        const flagSrc = flags[symbol];

        return (
          <CountryToCurrBlock
            symbol={symbol}
            curr={imgSrc}
            key={symbol}
            flag={flagSrc}
          />
        );
      })}
    </section>
  );
}

export default CountryToUsdt;
