import React from "react";

import "../../scss/02-module/_about.scss";

import AboutSlider from "./aboutSlider";

import Props from "./props";



export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div class="col-lg-3">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <Props
                  btnC="btn text-uppercase btn_one"
                  img="img"
                  btn="fashion"
                  date="25 octobor"
                  text="The Tremendous improtance of Owning a perfect piece"
                />
              </div>
              <div className="col-md-6 col-lg-12 py-4 py-md-0 py-lg-4">
                <Props
                  btnC="btn text-uppercase btn_two"
                  img="img-two"
                  btn="spots"
                  date="25 octobor"
                  text="The Tremendous improtance of Owning a perfect piece"
                />
              </div>
              <div className="col-md-12 mt-md-4 mt-lg-0">
                <Props
                  btnC="btn text-uppercase btn_three"
                  img="img-three"
                  btn="tavel"
                  date="25 octobor"
                  text="The Tremendous improtance of Owning a perfect piece"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 my-4 my-lg-0">
            <AboutSlider />
          </div>

          <div class="col-lg-3">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <Props
                  btnC="btn text-uppercase btn_three"
                  img="imges"
                  btn="lifestyle"
                  date="25 octobor"
                  text="The Tremendous improtance of Owning a perfect piece"
                />
              </div>
              <div className="col-md-6 col-lg-12 py-4 py-md-0 py-lg-4">
                <Props
                  btnC="btn text-uppercase btn_one"
                  img="imges-two"
                  btn="shop"
                  date="25 octobor"
                  text="The Tremendous improtance of Owning a perfect piece"
                />
              </div>
              <div className="col-md-12 mt-md-4 mt-lg-0">
                <Props
                  btnC="btn text-uppercase btn_two"
                  img="imges-three"
                  btn="fashion"
                  date="25 octobor"
                  text="The Tremendous improtance of Owning a perfect piece"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
