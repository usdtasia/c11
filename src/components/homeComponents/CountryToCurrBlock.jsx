import React from "react";
import see_more from "../../assets/img/see-more-ic.svg";
import graph from "../../assets/img/graph.svg";

import { useSelector } from "react-redux";
function CountryToCurrBlock({ symbol, curr, flag }) {
  const selectedCurrency = useSelector(
    (state) => state.currCryptoRatesReducer.crypto
  );

  const priceArray = useSelector((state) => state.exchangeReducer.rates);

  const gettingPrice = () => {
    const rateObj = priceArray.find(
      (obj) => obj.from.name === selectedCurrency && obj.to.name === symbol
    );
    return rateObj ? rateObj.rate.toFixed(2) : "N/A";
  };

  const gettingPercent = () => {
    const percentObj = priceArray.find(
      (obj) => obj.from.name === selectedCurrency && obj.to.name === symbol
    );
    return percentObj ? percentObj.percent : "N/A";
  };

  const exchangePercent = gettingPercent();
  const exchangePercentNum = exchangePercent / 100 + 1;

  const exchangeRate = gettingPrice();

  const convertedValue = (exchangeRate * exchangePercentNum).toFixed(2);

  return (
    <div className="countryToUsdt_block">
      <div className="countryToUsdt__block_side1">
        <div className="countryToUsdt__block_side1_left">
          <img
            src={curr}
            alt=""
            className="countryToUsdt__block_side1_left_coin"
          />
          <p className="countryToUsdt__block_side1_left_abr">{symbol}</p>
          <img
            src={flag}
            alt=""
            className="countryToUsdt__block_side1_left_ctr"
          />
        </div>
        <div className="countryToUsdt__block_side1_right">
          <img src={see_more} alt="" className="" />
        </div>
      </div>
      <div className="countryToUsdt__block_line"></div>
      <div className="countryToUsdt__block_side2">
        <div className="countryToUsdt__block_side2_txt">
          <p className="countryToUsdt__block_side2_txt1">
            1 {selectedCurrency} =
          </p>
          <div className="countryToUsdt__block_side2_txt2">
            {convertedValue} {symbol}
          </div>
        </div>
        <div className="countryToUsdt__block_side2_graph_graphRelative">
          <img
            src={graph}
            alt=""
            className="countryToUsdt__block_side2_graph"
          />
        </div>
      </div>
    </div>
  );
}

export default CountryToCurrBlock;
