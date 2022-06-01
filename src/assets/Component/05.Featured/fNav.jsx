import React from "react";

import { NavLink } from "react-router-dom";

export default function FNav() {
  return (
    <div class="col-lg-9 mb-5">
      <div class="featured__border">
        <div class="row">
          <div class="col-3">
            <div class="featured__header">
              <h3 class="text-uppercase">featured</h3>
            </div>
          </div>

          <nav class="navbar navbar-expand-md navbar-md-dark navbar-light ml-auto ml-md-0 py-0">
            <button
              class="navbar-toggler featured__nav-btn"
              type="button"
              data-toggle="collapse"
              data-target="#Fnav"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse featured__nav-link" id="Fnav">
              <ul class="navbar-nav ml-auto text-uppercase">
                <li class="nav-item">
                  <NavLink to="/compOne" href="#">
                    all
                  </NavLink>
                </li>
                <li class="nav-item my-3 my-md-0">
                  <NavLink to="/compTwo" href="#">
                    lifestyle
                  </NavLink>
                </li>
                <li class="nav-item my-3 my-md-0">
                  <NavLink to="/compThree" href="#">
                    travel
                  </NavLink>
                </li>
                <li class="nav-item my-3 my-md-0">
                  <NavLink to="/compFour" href="#">
                    tech
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
