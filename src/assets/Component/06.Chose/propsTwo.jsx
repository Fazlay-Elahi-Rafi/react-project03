import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function PropsTwo(props) {
  return (
    <div class="col-12 col-md-6 col-lg-3">
      <div class="chose__text2">
        <div class="chose__img2">
          <div class={props.imgClass}></div>
        </div>
        <div class="chose__body mt-3">
          <div className="chose__body-top mb-3">
            <div class={props.btnClass}>
              <a class="btn text-uppercase" href="#">
                {props.btn}
              </a>
            </div>
            <div class="date_time mt-2">
              <FontAwesomeIcon className="mr-2 text-danger" icon={faClock} />
              <span class="time">{props.time}</span>
            </div>
          </div>
          <a class="chose__body-title" href="#">
            {props.text}
          </a>
        </div>
      </div>
    </div>
  );
}
