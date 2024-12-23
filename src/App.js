import React, {useEffect} from "react";
import {initGA, logPageView} from "./assets/analytics";
import {Routes, Route, useLocation} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Decorations from "./components/Decorations";
import Home from "./pages/Home";
import Zayavka from "./pages/Zayavka";
import Zayavka2 from "./pages/Zayavka2";
import History from "./pages/History";
import Faq from "./pages/Faq";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import Affilate from "./pages/Affilate";

function App() {

  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

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
          <Route path="/zayavka/:transactionId" element={<Zayavka />} />
          <Route path="/zayavka2/:transactionId" element={<Zayavka2 />} />
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
