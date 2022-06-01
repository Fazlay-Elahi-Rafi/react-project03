import React from 'react'
import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
      <nav class="navbar navbar-expand-md navbar-md-dark navbar-dark ml-auto ml-md-0 py-0">
        <button
          class="navbar-toggler update__nav-btn"
          type="button"
          data-toggle="collapse"
          data-target="#Nav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse update__nav-link" id="Nav">
          <ul class="navbar-nav mr-auto text-uppercase">
            <li class="nav-item my-2 my-md-0">
              <NavLink to='/compOne' href="#">
                all
              </NavLink>
            </li>
            <li class="nav-item my-2 my-md-0">
              <NavLink to='/compTwo' href="#">
                lifestyle
              </NavLink>
            </li>
            <li class="nav-item my-2 my-md-0">
              <NavLink to='/compThree' href="#">
                travel
              </NavLink>
            </li>
            <li class="nav-item my-2 my-md-0">
              <NavLink to='/compFour' href="#">
                tech
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}
