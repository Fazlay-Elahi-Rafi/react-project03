import React from "react";
import Slider from "react-slick";

import Props from "./props";

export default function RecentSlider() {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
    speed: 1000,
    dots: true,
    autoplaySpeed: 3000,
  };

  return (
      <div className="col-12 col-md-6">
        <Slider {...settings}>
          <Props
            img1="img-one"
            btnClass="btn text-uppercase btn-one"
            btnTx="style"
            date="25 octobor"
            time="10min Read"
            text="This page uses DIV elements to group different sections of the HTML page"
          />
          <Props
            img1="img-two"
            btnClass="btn text-uppercase btn-two"
            btnTx="shop"
            date="25 octobor"
            time="10min Read"
            text="This page uses DIV elements to group different sections of the HTML page"
          />
          <Props
            img1="img-three"
            btnClass="btn text-uppercase btn-three"
            btnTx="travel"
            date="25 octobor"
            time="10min Read"
            text="This page uses DIV elements to group different sections of the HTML page"
          />
        </Slider>
      </div>
  );
}
