import React, { useEffect, useState } from "react";
import HistoryLine from "../components/history/HistoryLine";

import arrRight from "../assets/img/arrRight.svg";

import { useSelector } from "react-redux";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import TableStaticLine from "../components/history/TableStaticLine";

function History() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const loginTxt = useSelector((state) => state.loginReducer.login);

  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async (page) => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.id;

        try {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/user/${id}/transactions?Page=${page}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setTransactions(response.data.transactions);
          setTotalPages(response.data.pages);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        return setLoading(true);
      }
    };

    fetchData(currentPage);
  }, [token, loginTxt, currentPage]);

  if (loading)
    return (
      <main className="homeMain home_container container other_container">
        <p className="loading_history">Loading...</p>
        <p className="loading_history logInPlz_history">
          You may not be signed in to your account
        </p>
      </main>
    );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">ORDER HISTORY</h1>
      </div>
      <div className="exchange_container order_exchange">
        <section className="quick__exchange_container quick__exchange_container_order">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding order_padding history_padding">
          <section className="history_table">
            <TableStaticLine />
            {transactions.map((transaction, index) => {
              const isEven = index % 2 === 1;
              return (
                <HistoryLine
                  key={transaction.id}
                  {...transaction}
                  darker={isEven ? "history__table_darker_bck" : ""}
                  transactionId={transaction.id}
                />
              );
            })}
            {transactions.length === 0 && (
              <div className="table_zeroTransactions">
                <p className="table_zeroTransactions_p">
                  You have not created any transactions yet.
                </p>
              </div>
            )}
            <div className="table_pageScroller">
              <img
                src={arrRight}
                alt=""
                className="pageScroller_left pageScroller_arr"
                onClick={handlePrevPage}
                style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
              />
              {Array.from({ length: totalPages }, (_, i) => (
                <div
                  key={i}
                  className={`pageScroller_number ${
                    currentPage === i + 1 ? "pageScroller_number_active" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
              <img
                src={arrRight}
                alt=""
                className="pageScroller_right pageScroller_arr"
                onClick={handleNextPage}
                style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default History;
