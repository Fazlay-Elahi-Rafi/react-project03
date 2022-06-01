import React from "react";

import "../../scss/02-module/_top-news.scss";
import TopSlider from "./topSlider";

export default function Topnews() {
  return (
    <section className="topnews">
      <div className="container">
        <div class="row">
          <div class="col-12 mb-5">
            <div class="topnews__border">
              <div class="topnews__header">
                <h3>popular news</h3>
              </div>
            </div>
          </div>
        </div>

        <TopSlider />
      </div>
    </section>
  );
}
