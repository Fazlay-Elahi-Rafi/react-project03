import React from "react";
import Slider from "react-slick";

import "../../scss/02-module/_top-news.scss";

import img1 from "../../img/img-12.jpg";
import img2 from "../../img/img-13.jpg";
import img3 from "../../img/img-11.jpg";
import img4 from "../../img/img-9.jpg";
import img5 from "../../img/img-10.jpg";

import Props from "./props";

export default function TopSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 4,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Props
        btnS="btn"
        img={img1}
        text="This tutorial will teach you JavaScript from basic"
        btn="tech"
      />

      <Props
        btnS="btn-two"
        img={img2}
        text="This tutorial will teach you JavaScript from basic"
        btn="sport"
      />

      <Props
        btnS="btn-three"
        img={img3}
        text="This tutorial will teach you JavaScript from basic"
        btn="travel"
      />

      <Props
        btnS="btn-four"
        img={img4}
        text="This tutorial will teach you JavaScript from basic"
        btn="lifestyle"
      />

      <Props
        btnS="btn-three"
        img={img5}
        text="This tutorial will teach you JavaScript from basic"
        btn="fashion"
      />
    </Slider>
  );
}
