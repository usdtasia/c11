import React from "react";

import arrRight from "../../assets/img/arrRight.svg";
import arrowUpDown from "../../assets/img/arrowUpDown.svg";
import infoSuccess from "../../assets/img/infoSuccess.svg";

import { formatDistanceToNow } from "date-fns";
function RecentLine({ img1, img2, blue, from, to, createdAt }) {
  const formattedTime = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });
  return (
    <div className={`recent__block_line ${blue}`}>
      <div className="recent__block_line_side_container">
        <div className="recent__block_line_side_container_left">
          <img
            src={arrowUpDown}
            alt=""
            className="recent__block_line_side_container_left_arrUpDown"
          />
          <p className="recent__block_line_side_container_left_time">
            {formattedTime}
          </p>
        </div>
        <div className="recent__block_line_side_container_left">
          <div className="recent__block_line_side_container_left_mob_text">
            <p className="recent__block_line_side_container_right_value">
              {from.value} {from.name}
            </p>
            <p className="recent__block_line_side_container_right_value_under_mob">
              {formattedTime}
            </p>
          </div>
          <img
            src={img1}
            alt=""
            className="recent__block_line_side_container_right_crypto"
          />
        </div>
      </div>
      <img src={arrRight} alt="" className="recent__block_line_arr" />
      <div className="recent__block_line_side_container">
        <div className="recent__block_line_side_container_left">
          <img
            src={img2}
            alt=""
            className="recent__block_line_side_container_right_crypto"
          />
          <div className="recent__block_line_side_container_left_mob_text recent__block_line_side_container_left_mob_text_right">
            <p className="recent__block_line_side_container_right_value">
              {to.value.toFixed(2)} {to.name}
            </p>
          </div>
        </div>
        <div className="recent__block_line_side_container_left">
          <img
            src={infoSuccess}
            alt=""
            className="recent__block_line_side_container_right_success"
          />
        </div>
      </div>
    </div>
  );
}

export default RecentLine;
