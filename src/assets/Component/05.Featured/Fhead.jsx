import React from "react";
import { BrowserRouter } from "react-router-dom";
import Featured from "./featured";

export default function Fhead() {
  return (
    <>
      <BrowserRouter>
        <Featured />
      </BrowserRouter>
    </>
  );
}
