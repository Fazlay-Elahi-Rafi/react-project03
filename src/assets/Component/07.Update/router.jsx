import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import "../../scss/02-module/_update.scss";
import Nav from "./nav";

import ComO from './compOne';
import CompT from './compTwo';
import compTh from './compThree';
import compFour from './compFour';

export default function Router() {
  return (
    <section className="update">
      <div className="container">
        <div className="col-12 mb-5">
          <div className="update__border">
            <div className="row">
              <div class="col-3">
                <div class="update__header">
                  <h3 class="text-uppercase">new vedio</h3>
                </div>
              </div>
              <Nav />
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={ComO} />
          <Route exact path="/compTwo" component={CompT} />
          <Route exact path="/compThree" component={compTh} />
          <Route exact path="/compFour" component={compFour} />
          <Redirect to="/" />
        </Switch>
      </div>
    </section>
  );
}
