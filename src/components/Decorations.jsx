import React from "react";
import { Routes, Route } from "react-router-dom";
import Sparkles from "../assets/img/Sparkles.svg";
import coin from "../assets/img/coin.svg";
import Bck from "./Bck";
import BckHome from "./BckHome";

function decorations() {
  return (
    <div className="decorations">
      <div className="sparkles">
        <img src={Sparkles} alt="" className="sparkles_el1 sparkles_el" />
        <img src={Sparkles} alt="" className="sparkles_el4 sparkles_el" />
      </div>
      <div className="coins">
        <img src={coin} alt="" className="coins_el1 coins_el" />
        <img src={coin} alt="" className="coins_el2 coins_el" />
      </div>
      <Routes>
        <Route path="/" element={<BckHome />} />
        <Route path="/zayavka" element={<Bck />} />
        <Route path="/zayavka2" element={<Bck />} />
        <Route path="/history" element={<Bck />} />
      </Routes>
    </div>
  );
}

export default decorations;
