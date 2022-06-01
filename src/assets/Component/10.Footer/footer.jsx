import React from "react";

import "../../scss/02-module/_footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../img/logo-w.png";
import img1 from "../../img/g-play.png";
import img2 from "../../img/i-store.png";

import {
  faBehance,
  faFacebookF,
  faInstagram,
  faInternetExplorer,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <section class="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="footer__top d-md-flex">
              <div class="col-12 col-md-4 d-flex justify-content-center">
                <div class="footer__logo mr-md-auto">
                  <a href="#">
                    <img class="img-fluid w-100" src={logo} alt="footer-logo" />
                  </a>
                </div>
              </div>
              <div class="col-12 col-md-6 ml-md-auto">
                <div class="footer__service float-md-right mt-4 mt-md-0 text-center">
                  <FontAwesomeIcon
                    className="footer__service-headphn"
                    icon={faHeadphonesAlt}
                  />
                  <div class="footer__service-help">
                    <span class="center">24/7 Help Center</span>
                    <span class="num">+12-2345678966</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__links">
          <div class="row">
            <div class="col-sm-4 col-lg-2">
              <h5 class="font-h5">quick links</h5>
              <ul class="footer__list text-capitalize">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">latest news</a>
                </li>
                <li>
                  <a href="#">popular news</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-lg-2 mt-5 mt-sm-0">
              <h5 class="font-h5">entertainment</h5>
              <ul class="footer__list text-capitalize">
                <li>
                  <a href="#">celebrity</a>
                </li>
                <li>
                  <a href="#">movies</a>
                </li>
                <li>
                  <a href="#">tv news</a>
                </li>
                <li>
                  <a href="#">music</a>
                </li>
                <li>
                  <a href="#">sports</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-lg-2 mt-5 mt-sm-0">
              <h5 class="font-h5">business</h5>
              <ul class="footer__list text-capitalize">
                <li>
                  <a href="#">markets</a>
                </li>
                <li>
                  <a href="#">politics</a>
                </li>
                <li>
                  <a href="#">technology</a>
                </li>
                <li>
                  <a href="#">featured</a>
                </li>
                <li>
                  <a href="#">enterprice</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-3 mt-5 mt-lg-0">
              <h5 class="font-h5">get in touch</h5>
              <p class="text-light">
                1313 Broadway, New York NY-10001 United States of America
              </p>
              <p class="text-light">+12-2345687966 (For Ads)</p>
              <p class="text-light">info@example.com</p>
            </div>
            <div class="col-md-6 col-lg-3 mt-5 mt-lg-0">
              <h5 class="font-h5">follow us</h5>
              <ul class="social row">
                <li>
                  <a class="social__fb" href="#">
                    <FontAwesomeIcon className="social__icon" icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a class="social__tw" href="#">
                    <FontAwesomeIcon
                      className="social__icon"
                      icon={faInternetExplorer}
                    />
                  </a>
                </li>
                <li>
                  <a class="social__ins" href="#">
                    <FontAwesomeIcon className="social__icon" icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a class="social__be" href="#">
                    <FontAwesomeIcon className="social__icon" icon={faBehance} />
                  </a>
                </li>
                <li>
                  <a class="social__in" href="#">
                    <FontAwesomeIcon className="social__icon" icon={faLinkedinIn} />
                  </a>
                </li>
              </ul>
              <div class="download">
                <h5 class="font-h5 mb-2">download app</h5>
                <ul class="row m-0 p-0">
                  <li class="mr-4 mb-3 mb-xl-0">
                    <a href="#">
                      <img src={img1} alt="google play" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={img2} alt="i store" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom pt-5">
          <div class="col-12 text-center">
            <span class="text-capitalize text-light">
              this website design by{" "}
              <span class="text-uppercase text-info">md.rafi</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
