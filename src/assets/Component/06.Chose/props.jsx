import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";

export default function Props(props) {
  return (
    <div className="chose__details">
      <div className="card">
        <div class="chose__img">
          <div class={props.imgC}></div>
        </div>
        <div class="card-img-overlay">
          <div class="chose__text">
            <a class={props.btnC} href="#">
              {props.btn}
            </a>
            <span class="mr-2 mr-md-3">
              <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />
              {props.date}
            </span>
            <span>
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              {props.time}
            </span>
          </div>
          <a href="#" class="chose__text-link text-capitalize mt-3">
            {props.text}
          </a>
        </div>
      </div>
    </div>
  );
}
