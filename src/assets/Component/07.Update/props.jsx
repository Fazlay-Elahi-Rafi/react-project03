import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";

export default function Props(props) {
  return (
    <div class="row">
      <div class="col-lg-4">
        <div class="row">
          <div class="col-12">
            <div class="update__text2" id="left">
              <div class="update__body mt-3">
                <div class={props.btnO}>
                  <a class="btn text-uppercase" href="#">
                    {props.btnTx1}
                  </a>
                </div>
                <a href="#">{props.text1}</a>
                <div class="date_time mt-2">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                  <span class="time">{props.time}</span>
                </div>
              </div>
              <div class="update__img2">
                <div class={props.imgO}></div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="update__text2" id="left">
              <div class="update__body mt-3">
                <div class={props.btnT}>
                  <a class="btn text-uppercase" href="#">
                    {props.btnTx2}
                  </a>
                </div>
                <a href="#">{props.text2}</a>
                <div class="date_time mt-2">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                  <span class="time">{props.time}</span>
                </div>
              </div>
              <div class="update__img2">
                <div class={props.imgT}></div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="update__text2" id="left">
              <div class="update__body mt-3">
                <div class={props.btnTh}>
                  <a class="btn text-uppercase" href="#">
                    {props.btnTx3}
                  </a>
                </div>
                <a href="#">{props.text3}</a>
                <div class="date_time mt-2">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                  <span class="time">{props.time}</span>
                </div>
              </div>
              <div class="update__img2">
                <div class={props.imgTh}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-5">
        <div class="row">
          <div class="col-12">
            <div class="update__details">
              <div class="card">
                <div class="update__img">
                  <div class={props.image}></div>
                </div>
                <div class="card-img-overlay">
                  <div class="update__text">
                    <a class="btn text-uppercase btn-one" href=" #">
                      {props.buttonT}
                    </a>
                    <span class="mr-2 mr-md-3">
                      <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} />
                      25 octobor
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                      10 min Read
                    </span>
                  </div>
                  <a href="#" class="update__text-link text-capitalize mt-3">
                    {props.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="row">
          <div class="col-12">
            <div class="update__text2">
              <div class="update__img3">
                <div class={props.img1}></div>
              </div>
              <div class="update__body2 mt-3">
                <div class={props.btnC1}>
                  <a class="btn text-uppercase" href="#">
                    {props.btnTxt1}
                  </a>
                </div>
                <a href="#">{props.txt1}</a>
                <div class="date_time mt-2">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                  <span class="time">{props.time}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="update__text2">
              <div class="update__img3">
                <div class={props.img2}></div>
              </div>
              <div class="update__body2 mt-3">
                <div class={props.btnC2}>
                  <a class="btn text-uppercase" href="#">
                    {props.btnTxt2}
                  </a>
                </div>
                <a href="#">{props.txt2}</a>
                <div class="date_time mt-2">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                  <span class="time">{props.time}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="update__text2">
              <div class="update__img3">
                <div class={props.img3}></div>
              </div>
              <div class="update__body2 mt-3">
                <div class={props.btnC3}>
                  <a class="btn text-uppercase" href="#">
                    {props.btnTxt3}
                  </a>
                </div>
                <a href="#">{props.txt3}</a>
                <div class="date_time mt-2">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                  <span class="time">{props.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
