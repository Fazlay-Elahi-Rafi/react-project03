import React from "react";

import "../../scss/02-module/_other.scss";

import img1 from "../../img/img-26.jpg";
import img2 from "../../img/img-25.jpg";
import img3 from "../../img/img-24.jpg";
import img4 from "../../img/img-23.jpg";
import add1 from "../../img/ad-hr.jpg";
import add2 from "../../img/ad-sqr.jpg";

import Props from "./props";

export default function Other() {
  return (
    <section className="other">
      <div className="container">
        <div class="row">
          <div class="col-12 mb-5">
            <div class="other__border">
              <div class="other__header">
                <h3 class="text-uppercase">other</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9">

            <Props
              mainC="other__details"
              img={img1}
              btnC="btn text-uppercase button__one"
              btnTx="travel"
              time="10min Raed"
              date="25 octobor"
              title="The style rule below will be applied"
              text="These eight shots crystallize the hard work moms put into keeping their kids alive happy and healthy. They might give you the inspiration you need. For those of us who want to say thank you to our moms"
            />

            <Props
              mainC="other__details mt-5"
              img={img2}
              btnC="btn text-uppercase button__two"
              btnTx="style"
              time="10min Raed"
              date="25 octobor"
              title="The style rule below will be applied"
              text="These eight shots crystallize the hard work moms put into keeping their kids alive happy and healthy. They might give you the inspiration you need. For those of us who want to say thank you to our moms"
            />

            <Props
              mainC="other__details mt-5"
              img={img3}
              btnC="btn text-uppercase button__three"
              btnTx="fasion"
              time="10min Raed"
              date="25 octobor"
              title="The style rule below will be applied"
              text="These eight shots crystallize the hard work moms put into keeping their kids alive happy and healthy. They might give you the inspiration you need. For those of us who want to say thank you to our moms"
            />

            <Props
              mainC="other__details mt-5"
              img={img4}
              btnC="btn text-uppercase button__four"
              btnTx="tech"
              time="10min Raed"
              date="25 octobor"
              title="The style rule below will be applied"
              text="These eight shots crystallize the hard work moms put into keeping their kids alive happy and healthy. They might give you the inspiration you need. For those of us who want to say thank you to our moms"
            />
            
          </div>

          <div class="col-lg-3 d-none d-lg-block">
            <a href="#">
              <img
                class="img-fluid w-100"
                src={add1}
                alt="add"
              />
            </a>
            <a href="#">
              <img
                class="img-fluid w-100 mt-5"
                src={add2}
                alt="add"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
