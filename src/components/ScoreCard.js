import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../style/ScoreCard.css';
function Scores() {
  return (
    <>
      <div className="background">
        <div className="heading">
          <ul>
            <li>
              <a>IND VS NZL</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Scores;
