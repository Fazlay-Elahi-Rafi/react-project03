import React from "react";

import "../../scss/02-module/header-top.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

export default function HeaderTop() {
  return (
    <section class="header__top pt-2 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5 col-lg-6 text-light">
            <a href="#" class="email">
              <FontAwesomeIcon className='mr-2' icon={faEnvelopeOpen} />
              <span>www.googleBaBa.com</span>
            </a>
          </div>
          <div class="col-md-7 col-lg-6 text-light">
            <div class="country">
              <span class="mr-md-2 mr-lg-4">London,United Kingdom </span>
              <span>Thursday 8 May 2020/21/20</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
