import React from "react";
import Ticker from "react-ticker";

import "../../scss/02-module/_news.scss";

export default function News() {
  return (
    <section class="news">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="news__text">
              <h2 class="text-uppercase">breaking news</h2>
            </div>
          </div>

          <div class="col-md-8 text-slide">
              <Ticker>
                {() => (
                  <div className='ticker pt-3'>
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                )}
              </Ticker>
          </div>
        </div>
      </div>
    </section>
  );
}
