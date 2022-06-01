import React from "react";
import Slider from "react-slick";

import "../../scss/02-module/_about.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

export default function AboutSlider() {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    fade: true,
    dots: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 300,
  };

  return (
    <Slider {...settings}>
      <div class="about__details">
        <div class="card">
          <div class="about__slider">
            <div class="about__slider-imgOne"></div>
          </div>
          <div class="card-img-overlay">
            <div class="about__text2">
              <a class="btn text-uppercase btns" href="#">
                tech
              </a>
              <span class="mr-3">
                <FontAwesomeIcon className='mr-2' icon={faCalendar} />
                25 octobor
              </span>
              <span>
                <FontAwesomeIcon className='mr-2' icon={faClock} />
                10 min read
              </span>
            </div>
            <a href="#" class="about__text2-link2">
              The Tremendous improtance of Owning a perfect piece
            </a>
          </div>
        </div>
      </div>
      <div class="about__details">
        <div class="card">
          <div class="about__slider">
            <div class="about__slider-imgTwo"></div>
          </div>
          <div class="card-img-overlay">
            <div class="about__text2">
              <a class="btn text-uppercase btns-two" href="#">
                local
              </a>
              <span class="mr-3">
                <FontAwesomeIcon className='mr-2' icon={faCalendar} />
                25 octobor
              </span>
              <span>
                <FontAwesomeIcon className='mr-2' icon={faClock} />
                10 min read
              </span>
            </div>
            <a href="#" class="about__text2-link3">
              The Tremendous improtance of Owning a perfect piece
            </a>
          </div>
        </div>
      </div>
      <div class="about__details">
        <div class="card">
          <div class="about__slider">
            <div class="about__slider-imgThree"></div>
          </div>
          <div class="card-img-overlay">
            <div class="about__text2">
              <a class="btn text-uppercase btns-three" href="#">
                business
              </a>
              <span class="mr-3">
                <FontAwesomeIcon className='mr-2' icon={faCalendar} />
                25 octobor
              </span>
              <span>
                <FontAwesomeIcon className='mr-2' icon={faCalendar} />
                10 min read
              </span>
            </div>
            <a href="#" class="about__text2-link4">
              The Tremendous improtance of Owning a perfect piece
            </a>
          </div>
        </div>
      </div>
    </Slider>
  );
}
