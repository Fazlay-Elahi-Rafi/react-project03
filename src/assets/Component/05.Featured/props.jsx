import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";

export default function Props(props) {
  return (
    <div class="row">
      <div class="col-lg-5">
        <div class="row">
          <div class="col-12">
            <div class="featured__details">
              <div class="card">
                <div class="featured__img">
                  <img class="img-fluid w-100" src={props.img} alt="img" />
                </div>
                <div class="card-img-overlay">
                  <div class="featured__text">
                    <a class="btn text-uppercase btn_one" href="#">
                      {props.btnO}
                    </a>
                    <span>
                      <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                      25 octobor
                    </span>
                  </div>
                  <a href="#" class="featured__text-link mt-3">
                    {props.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="featured__details">
              <div class="card">
                <div class="featured__img">
                  <img class="img-fluid w-100" src={props.img2} alt="img" />
                </div>
                <div class="card-img-overlay">
                  <div class="featured__text">
                    <a class="btn text-uppercase btn_two" href="#">
                      {props.btnT}
                    </a>
                    <span>
                      <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                      25 octobor
                    </span>
                  </div>
                  <a href="#" class="featured__text-link mt-3">
                    {props.text2}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-7 mt-5 mt-lg-0">
        <div class="featured__text2">
          <div class="featured__img2">
            <img class="img-fluid w-100" src={props.img5} alt="img" />
          </div>
          <div class="featured__body mt-3">
            <div class="btn-one">
              <a class="btn text-uppercase" href="#">
                {props.btnTh}
              </a>
            </div>
            <a href="#">{props.text3}</a>
            <div class="date_time mt-2">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              <span class="time">10min Read</span>
            </div>
          </div>
        </div>
        <div class="featured__text2">
          <div class="featured__img2">
            <img class="img-fluid w-100" src={props.img3} alt="img" />
          </div>
          <div class="featured__body mt-3">
            <div class="btn-two">
              <a class="btn text-uppercase" href="#">
                {props.btnF}
              </a>
            </div>
            <a href="#">{props.text4}</a>
            <div class="date_time mt-2">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              <span class="time">10min Read</span>
            </div>
          </div>
        </div>
        <div class="featured__text2">
          <div class="featured__img2">
            <img class="img-fluid w-100" src={props.img4} alt="img" />
          </div>
          <div class="featured__body mt-3">
            <div class="btn-three">
              <a class="btn text-uppercase" href="#">
                {props.btnS}
              </a>
            </div>
            <a href="#">{props.text5}</a>
            <div class="date_time mt-2">
              <FontAwesomeIcon className="mr-2" icon={faClock} />
              <span class="time">10min Read</span>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}
