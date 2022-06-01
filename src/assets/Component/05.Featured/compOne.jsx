import React from "react";


import img1 from "../../img/img-27.jpg";
import img2 from "../../img/img-28.jpg";
import img3 from "../../img/img-18.jpg";
import img4 from "../../img/img-17.jpg";
import img5 from "../../img/img-16.jpg";

import Props from "./props";

export default function CompOne() {
  return (
    <div className='col-lg-9'>
      <div class="one">
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
      
      {/* <div class="two" style={{ display: "none" }}>
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
      </div> */}
    </div>
  );
}
