import React from "react";
import QuickCurrDropItem from "./QuickCurrDropItem";

import { useSelector, useDispatch } from "react-redux";
import { setSendCurrency, setGetCurrency } from "../../redux/actions";
import { fiatImageMap } from "../../assets/fiatImageMap";
import { currencyImageMap } from "../../assets/currencyImageMap";

function QuickCurrDrop({ type }) {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.exchangeReducer.currencies);

  const handleClick = (currValue) => {
    if (type === "Send") {
      dispatch(setSendCurrency(currValue));
    } else if (type === "Get") {
      dispatch(setGetCurrency(currValue));
    }
  };
  const imgArrays = { ...fiatImageMap, ...currencyImageMap };
  const currencyImages = useSelector(
    (state) => state.currencyImageReducer.currencyImages
  );
  return (
    <div className="quick__curency_dropdown">
      {currencies.map((currency, index) => {
        const imgSrc =
          currencyImages[currency.value] || imgArrays[currency.value];
        return (
          <QuickCurrDropItem
            key={index}
            name={currency.value}
            onClick={() => handleClick(currency.value)}
            imgSrc={imgSrc}
          />
        );
      })}
    </div>
  );
}

export default QuickCurrDrop;
