import React from "react";

import img1 from "../../img/img-23.jpg";
import img2 from "../../img/img-29.jpg";
import img3 from "../../img/img-40.jpg";
import img4 from "../../img/img-41.jpg";
import img5 from "../../img/img-16.jpg";

import Props from "./props";

export default function CompTwo() {
  return (
    <div className="col-lg-9">
      <div class="two">
        <Props
          btnO="fashion"
          btnT="style"
          btnTh="fashion"
          btnS="travel"
          btnF="travel"
          img={img1}
          img2={img2}
          img5={img3}
          img3={img4}
          img4={img5}
          text2="The Tremendous improtance of Owning a perfect piece"
          text3="This tutorial will teach you JavaScript from basic"
          text="The Tremendous improtance of Owning a perfect piece"
          text4="This tutorial will teach you JavaScript from basic"
          text5="This tutorial will teach you JavaScript from basic"
        />
      </div>
    </div>
  );
}
