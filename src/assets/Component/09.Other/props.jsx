import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";

export default function Props(props) {
  return (
    <div class={props.mainC}>
      <div class="row no-gutters">
        <div class="col-md-5">
          <img src={props.img} class="img-fluid w-100" alt="card-img" />
        </div>
        <div class="col-md-7">
          <div class="card-body other-p mt-2 mt-xl-4">
            <div class="button d-inline-block">
              <a class={props.btnC} href="#">
                {props.btnTx}
              </a>
            </div>
            <small class="other__small text-muted ml-0 mr-2 mx-sm-3">
              <a href="#">
                <FontAwesomeIcon className="mr-2" icon={faClock} />
              </a>
              <a href="#">{props.time}</a>
            </small>
            <small class="other__small text-muted">
              <a href="#">
                <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />
              </a>
              <a href="#">{props.date}</a>
            </small>
            <a class="title text-uppercase d-inline-block" href="#">
              {props.title}
            </a>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
