import React from "react";

import "../../scss/02-module/_recent-news.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RecentSlider from "./recentSlider";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Recent() {
  return (
    <section className="recent">
      <div className="container">
        <div class="row">
          <div class="col-12 mb-5">
            <div class="recent__border">
              <div class="recent__header">
                <h3 class="text-uppercase">recent news</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <RecentSlider /> {/* Slider */}
          <div class="col-md-6">
            <div class="row">
              <div class="col-12 mt-4 mt-md-0">
                <div class="recent__text2">
                  <div class="recent__img2">
                    <div class="img__one"></div>
                  </div>
                  <div class="recent__body mt-2 mt-lg-4">
                    <div class="btn__one">
                      <a class="btn text-uppercase" href="#">
                        tech
                      </a>
                    </div>
                    <div class="date_time mt-2">
                      <FontAwesomeIcon className="mr-1" icon={faClock} />
                      <span class="time">10min Read</span>
                    </div>
                    <div className="mt-3">
                      <a class="recent__body-title" href="#">
                        This tutorial will teach you JavaScript from basic
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="recent__text2">
                  <div class="recent__img2">
                    <div class="img__two"></div>
                  </div>
                  <div class="recent__body mt-2 mt-lg-4">
                    <div class="btn__two">
                      <a class="btn text-uppercase" href="#">
                        travel
                      </a>
                    </div>
                    <div class="date_time mt-2">
                      <FontAwesomeIcon className="mr-1" icon={faClock} />
                      <span class="time">10min Read</span>
                    </div>
                    <div className="mt-3">
                      <a class="recent__body-title" href="#">
                        This tutorial will teach you JavaScript from basic
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="recent__text2">
                  <div class="recent__img2">
                    <div class="img__three"></div>
                  </div>
                  <div class="recent__body mt-2 mt-lg-4">
                    <div class="btn__three">
                      <a class="btn text-uppercase" href="#">
                        news
                      </a>
                    </div>
                    <div class="date_time mt-2">
                      <FontAwesomeIcon className="mr-1" icon={faClock} />
                      <span class="time">10min Read</span>
                    </div>
                    <div className="mt-3">
                      <a class="recent__body-title" href="#">
                        This tutorial will teach you JavaScript from basic
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
