import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/logo.png";
import add from "../../img/ad-sm.jpg";

export default function HeaderBottom() {
  return (
    <header class="header__bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="logo">
              <a href="#">
                <img class="img-fluid w-100" src={logo} alt="logo" />
              </a>
            </div>
          </div>

          <div class="col-md-5 col-lg-6">
            <div class="add">
              <a href="#">
                <img class="img-fluid" src={add} alt="add" />
              </a>
            </div>
          </div>

          <div class="col-md-4 col-lg-3">
            <div class="search">
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <div class="input-group-prepend">
                  <span class="input-group-text btn">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
