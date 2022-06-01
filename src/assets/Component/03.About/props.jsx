import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export default function Props(props) {
  return (
    <div class="about__details">
      <div class="card">
        <div class="about__img">
          <div class={props.img}></div>
        </div>
        <div class="card-img-overlay">
          <div class="about__text">
            <a class={props.btnC} href="#">
              {props.btn}
            </a>
            <span>
              <FontAwesomeIcon className='mr-2' icon={faCalendar} />
              {props.date}
            </span>
          </div>
          <a href="#" class="about__text-link mt-3">
            {props.text}
          </a>
        </div>
      </div>
    </div>
  );
}
