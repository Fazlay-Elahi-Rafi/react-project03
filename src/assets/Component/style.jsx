import React from "react";

import HeaderBottom from "./01.Header/headerBottom";
import HeaderTop from "./01.Header/headerTop";
import Nav from "./01.Header/nav";
import News from "./02.News/news";
import About from "./03.About/about";
import Topnews from "./04.Topnews/topnews";
import Add from "./05.Featured/add";
import Fhead from "./05.Featured/Fhead";
import Chose from "./06.Chose/chose";
import Update from "./07.Update/update";
import AddT from "./08.Recent/addT";
import Recent from "./08.Recent/recent";
import Other from "./09.Other/other";
import Footer from "./10.Footer/footer";

export default function Style() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <Nav />
      <News />
      <About />
      <Topnews />
      <Fhead />
      <Add />
      <Chose />
      <Update />
      <Recent />
      <AddT />
      <Other />
      <Footer />
    </>
  );
}
