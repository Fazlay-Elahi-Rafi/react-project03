import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";

export default function Props(props) {
  return (
    <div class="col-12">
      <div class="topnews__text">
        <div class="news_img">
          <img class="w-100 img-fluid" src={props.img} alt="img" />
        </div>
        <div class="topnews__body mt-3">
          <a href="#">{props.text}</a>
        </div>
        <div class="date_time mt-2">
          <FontAwesomeIcon className='icon mr-2' icon={faCalendar}/>
          <span class="date mr-4">25 july</span>
          <FontAwesomeIcon className='icon mr-2' icon={faClock}/>
          <span class="time">10min</span>
        </div>
        <div class={props.btnS}>
          <a class="btn text-uppercase" href="#">
            {props.btn}
          </a>
        </div>
      </div>
    </div>
  );
}
