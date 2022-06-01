import React from "react";

import "../../scss/02-module/_featured.scss";
import FNav from "./fNav";

import { Redirect, Route, Switch } from "react-router-dom";
import compOne from "./compOne";
import compTwo from "./compTwo";
import compThree from "./compThree";
import compFour from "./compFour";

export default function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <FNav />
        <div className="row">
          <Switch>
            <Route exact path="/" component={compOne} />
            <Route exact path="/compTwo" component={compTwo} />
            <Route exact path="/compThree" component={compThree} />
            <Route exact path="/compFour" component={compFour} />
            <Redirect to="/" />
          </Switch>

          <div class="col-sm-12 col-lg-3">
            <div class="featured__input text-center">
              <span class="text-capitalize">get more news</span>
              <h2 class="text-uppercase">in your email inbox</h2>
              <form>
                <input
                  class="form-control"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <a class="btn text-uppercase" href="#">
                  sing up
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
