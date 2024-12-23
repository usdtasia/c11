import React from "react";
import RatesCurrEl from "./RatesCurrEl";
import { currencyImageMap } from "../../assets/currencyImageMap";
import { useSelector, useDispatch } from "react-redux";
import { currCrypto_rates } from "../../redux/actions";

function Rates() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.currCryptoRatesReducer.crypto
  );
  const currencies = useSelector((state) => state.exchangeReducer.currencies);

  // Filter and sort tokens
  const tokens = currencies
    .filter((currency) => currency.type === 0)
    .sort((a, b) => {
      const order = ["USDT", "BTC", "ETH", "SOL", "BNB"];
      const indexA = order.indexOf(a.value);
      const indexB = order.indexOf(b.value);
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  const handleClick = (currValue) => {
    dispatch(currCrypto_rates(currValue));
  };

  const currencyImages = useSelector(
    (state) => state.currencyImageReducer.currencyImages
  );

  return (
    <section className="rates">
      <p className="rates_span">CURRENT EXCHANGE RATES</p>
      <div className="rates_currency_container">
        {tokens.map((currency) => {
          const imgSrc =
            currencyImages[currency.value] || currencyImageMap[currency.value];
          return (
            <RatesCurrEl
              symbol={currency.value}
              key={currency.id}
              img={imgSrc}
              isCurr={
                selectedCurrency === currency.value ? "rates__current_curr" : ""
              }
              onClick={() => handleClick(currency.value)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Rates;
