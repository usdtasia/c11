import React, { useState } from "react";
import Question from "../../assets/img/Question.svg";

function AskedQline({ p, blue, underTxt }) {
  const [clickedBot, setClickedBot] = useState(false);

  const handleClicking = () => {
    setClickedBot(!clickedBot);
  };

  return (
    <div
      className={`askedQuestions_block_container ${blue && "blue_footer"}`}
      onClick={handleClicking}
    >
      <div className="askedQuestions_block">
        <div className="askedQuestions_name">
          <img src={Question} alt="" className="askedQuestions_question" />
          <p className="askedQuestion__name_p">{p}</p>
        </div>
        <div className="askedQuestions_plus">{clickedBot ? "-" : "+"}</div>
      </div>
      {clickedBot && (
        <div className="askedQuestions_block_bottom">{underTxt}</div>
      )}
    </div>
  );
}

export default AskedQline;
