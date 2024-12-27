import React, { useEffect } from "react";
import { initGA, logPageView } from "./assets/analytics";
import {Routes, Route, useLocation, useSearchParams} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Decorations from "./components/Decorations";
import Home from "./pages/Home";
import Order from "./pages/Order";
import OrderPay from "./pages/OrderPay";
import History from "./pages/History";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import Affilate from "./pages/Affilate";

function App() {

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const handleParseRefValue = () => {
    let ref = searchParams.get("ref");
    if (!ref) return;
    sessionStorage.setItem("ref", ref);
  }

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    handleParseRefValue();
  }, [searchParams]);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return (
      <div className="wrapper">
        <div className="content">
          <Header />
          <Decorations />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order/:transactionId" element={<Order />} />
            <Route path="/order-pay/:transactionId" element={<OrderPay />} />
            <Route path="/history" element={<History />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
            <Route path="/affilate" element={<Affilate />} />
          </Routes>
          <Footer />
        </div>
      </div>
  );
}

export default App;
