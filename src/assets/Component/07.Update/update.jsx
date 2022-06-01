import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./router";

export default function Update() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}
