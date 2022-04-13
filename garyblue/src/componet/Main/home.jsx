import React, { useEffect } from "react";
import { useState } from "react";
import Banner1 from "../../Images/BannerScroll/Garycombo.webp";
import Banner2 from "../../Images/BannerScroll/BigGaryTuesday.webp";
import Banner3 from "../../Images/BannerScroll/OnlineOrdering.webp";
import Banner4 from "../../Images/BannerScroll/StrawberrySquash.webp";


const Home = () => {
  const [bannerScroll, setBannerScroll] = useState([]);
  const [currentImage, setCurrentImage] = useState();

  // Time for banner scroll
  useEffect(() => {
    setBannerScroll([Banner1, Banner2, Banner3, Banner4]);

    setCurrentImage([bannerScroll[0], 0]);


    //end of brackets
  }, [])

  // setInterval(() => {
  //   let currentIndex = currentImage[1] + 1;

  //   // Making sure index is still in range
  //   if (currentImage[1] > bannerScroll.length) {
  //     setCurrentImage([bannerScroll[0], 0]);
  //   } else {
  //     setCurrentImage(bannerScroll[currentIndex])
  //   }
  //   return currentImage;
  // },
  return (
    <div>
      <h1 className="tagLine">Come on in, relax , eat and smile</h1>
      <div class="container">
        <div class="row">
          {/* Banner Scroll goes below */}
          <div class="col-lg"> <img
            src={bannerScroll[0]}
            alt=""
            className="img-fluid"
          /></div>
        </div>

        <div class="row">
          {/* Review scroll goes below */}
          <div class="col-lg-8 g-col-4 box2">
            <p class="lead align-left" >Feedback from out Customers...</p>
            <div class="reviews">
              <span style={{ float: "left" }}> 5/5 <br />stars</span>
              <span>J. Smith, Apr 2022 <br />
              "Customer Service was Excellent! The Staff was friendly and the food tasted great, Definitely would go again</span>
            </div>
          </div>

          {/* Service Awards goes below */}
          <div class="col-lg-4 g-col-4 box3">
            <div className="awards">
              <p>"Top Service Award" 2021</p>
              <p>"Voted Best Burger" 2021</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
