import React from 'react'

import '../../scss/02-module/_navbar.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return (
      <section class="nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-md-dark navbar-light">
            <button
              class="navbar-toggler nav__btn"
              type="button"
              data-toggle="collapse"
              data-target="#nav"
            >
              <span>
                <FontAwesomeIcon className="nav__icon" icon={faMobile} />
              </span>
            </button>

            <div class="collapse navbar-collapse nav__link" id="nav">
              <ul class="navbar-nav mr-auto text-uppercase">
                <li class="nav-item mr-4 mr-lg-5 dropdown nav__link-active">
                  <a
                    class="nav-link dropdown-toggle d-inline-block"
                    data-toggle="dropdown"
                    href="#"
                  >
                    home
                  </a>
                  <div class="dropdown-menu drop-bg">
                    <a class="dropdown-item" href="#">
                      home 1
                    </a>
                    <a class="dropdown-item" href="#">
                      home 2
                    </a>
                    <a class="dropdown-item" href="#">
                      home 3
                    </a>
                  </div>
                </li>
                <li class="nav-item mr-4 mr-lg-5 dropdown">
                  <a
                    class="nav-link dropdown-toggle d-inline-block"
                    data-toggle="dropdown"
                    href="#"
                  >
                    category
                  </a>
                  <div class="dropdown-menu drop-bg">
                    <a class="dropdown-item" href="#">
                      lifestyle
                    </a>
                    <a class="dropdown-item" href="#">
                      business
                    </a>
                    <a class="dropdown-item" href="#">
                      travel
                    </a>
                  </div>
                </li>
                <li class="nav-item mr-4 mr-lg-5">
                  <a class="nav-link" href="#">
                    page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    contact us
                  </a>
                </li>
              </ul>
              <div class="nav__social">
                <FontAwesomeIcon className="nav__social-icon mr-md-4 mr-5" icon={faFacebook} />
                <FontAwesomeIcon className="nav__social-icon mr-md-4 mr-5" icon={faTwitter} />
                <FontAwesomeIcon className='nav__social-icon ' icon={faInstagram} />
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
}
