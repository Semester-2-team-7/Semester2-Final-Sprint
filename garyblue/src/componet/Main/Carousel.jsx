import React from "react";
// import { Carousel } from "react-responsive-carousel";

import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

import Banner1 from "../../Images/BannerScroll/Garycombo.webp";
import Banner2 from "../../Images/BannerScroll/BigGaryTuesday.webp";
import Banner3 from "../../Images/BannerScroll/OnlineOrdering.webp";
import Banner4 from "../../Images/BannerScroll/StrawberrySquash.webp";

export default () => (
  <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false} showStatus={false} transitionTime={500} animationHandler="fade">
    <div>
      <img alt="" src={Banner1} />
    </div>
    <div>
    <img alt="" src={Banner2} />
    </div>
    <div>
    <img alt="" src={Banner3} />
    </div>
    <div>
    <img alt="" src={Banner4} />
    </div>
  </Carousel>
);
