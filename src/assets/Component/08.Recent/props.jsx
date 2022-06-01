import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Props(props) {
  return (
    <div class="recent__details">
      <div class="card">
        <div class="recent__img">
          <div class={props.img1}></div>
        </div>
        <div class="card-img-overlay">
          <div class="recent__text">
            <a class={props.btnClass} href=" #">
              {props.btnTx}
            </a>
            <span class="mr-2 mr-md-3">
             <FontAwesomeIcon className='mr-2' icon={faCalendarAlt}/>
             {props.date}
            </span>
            <span>
              <FontAwesomeIcon className='mr-2' icon={faClock}/>
              {props.time}
            </span>
          </div>
          <a href="#" class="recent__text-link text-capitalize mt-3">
            {props.text}
          </a>
        </div>
      </div>
    </div>
  );
}
