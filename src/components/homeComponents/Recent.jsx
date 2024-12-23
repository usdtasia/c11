import React, { useState, useEffect } from "react";
import arrRight from "../../assets/img/arrRight.svg";
import arrowUpDown from "../../assets/img/arrowUpDown.svg";
import infoSuccess from "../../assets/img/infoSuccess.svg";
import tether_usdtlogo_small from "../../assets/img/tether_usdtlogo_small.svg";
import RecentLine from "./RecentLine";
import axios from "axios";
import { fiatImageMap } from "../../assets/fiatImageMap";
import { useSelector } from "react-redux";

import { currencyImageMap } from "../../assets/currencyImageMap";

function Recent() {
  const currencyImages = useSelector(
    (state) => state.currencyImageReducer.currencyImages
  );
  const imgArrays = { ...fiatImageMap, ...currencyImageMap, ...currencyImages };

  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/transaction`
        );

        const sortedTransactions = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setTransactions(sortedTransactions.slice(0, 6));
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <section className="recent_container">
      <h3 className="recent_h3">Recent transactions</h3>
      <div className="recent_block">
        {/* <RecentLine img1={tether_usdtlogo_small} img2={tether_usdtlogo_small} />
        <RecentLine
          img1={tether_usdtlogo_small}
          img2={tether_usdtlogo_small}
          blue="blue_footer"
        />
        <RecentLine img1={tether_usdtlogo_small} img2={tether_usdtlogo_small} />
        <RecentLine
          img1={tether_usdtlogo_small}
          img2={tether_usdtlogo_small}
          blue="blue_footer"
        />
        <RecentLine img1={tether_usdtlogo_small} img2={tether_usdtlogo_small} /> */}
        {transactions.map((transaction, index) => {
          const imgSrcSend = imgArrays[transaction.from.name];
          const imgSrcGet = imgArrays[transaction.to.name];
          const isEven = index % 2 === 1;
          return (
            <RecentLine
              key={transaction.id}
              img1={imgSrcSend}
              img2={imgSrcGet}
              from={transaction.from}
              to={transaction.to}
              createdAt={transaction.createdAt}
              blue={isEven ? "blue_footer" : ""}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Recent;
