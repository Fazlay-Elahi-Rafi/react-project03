import React from "react";

import "../../scss/02-module/_choise.scss";

import Props from "./props";

import PropsTwo from "./propsTwo";

export default function Chose() {
  return (
    <section class="chose">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-5">
            <div class="chose__border">
              <div class="chose__header">
                <h3>editor's choise</h3>
              </div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-12 col-md-6 mb-3 mb-md-0">
            <Props
              imgC="img-one"
              btnC="btn text-uppercase btn-one"
              btn="tavel"
              text="This is a demonstration of how different stylesheets can change the layout"
              date="25 octobor"
              time="10 min Read"
            />
          </div>

          <div class="col-12 col-md-6">
            <Props
              imgC="img-two"
              btnC="btn text-uppercase btn-two"
              btn="style"
              date="25 octobor"
              time="10 min Read"
              text="This page uses DIV elements to group different sections of the HTML page"
            />
          </div>
        </div>

        <div class="row mt-4">

          <PropsTwo
            imgClass="img__one"
            btnClass="btn__one"
            btn="sport"
            time="10min Read"
            text="This tutorial will teach you JavaScript from basic"
          />

          <PropsTwo
            imgClass="img__two"
            btnClass="btn__two"
            btn="style"
            time="10min Read"
            text="This tutorial will teach you Html from basic"
          />

          <PropsTwo
            imgClass="img__three"
            btnClass="btn__three"
            btn="travel"
            time="10min Read"
            text="This tutorial will teach you Css from basic"
          />

          <PropsTwo
            imgClass="img__four"
            btnClass="btn__four"
            btn="tech"
            time="10min Read"
            text="This tutorial will teach you Scss from basic"
          />
        </div>
      </div>
    </section>
  );
}
