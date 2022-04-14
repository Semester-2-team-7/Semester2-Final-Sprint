import React, { useEffect } from "react";
import { useState } from "react";
import Banner1 from "../../Images/BannerScroll/Garycombo.webp";
import Banner2 from "../../Images/BannerScroll/BigGaryTuesday.webp";
import Banner3 from "../../Images/BannerScroll/OnlineOrdering.webp";
import Banner4 from "../../Images/BannerScroll/StrawberrySquash.webp";
// import { FontAwesomeIcon } from '../@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [bannerScroll, setBannerScroll] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrayLength, setArrayLength] = useState(4);

  // Time for banner scroll
  useEffect(() => {
    setBannerScroll([Banner1, Banner2, Banner3, Banner4]);

    if (arrayLength == 0) {
      setArrayLength(bannerScroll.length);
      console.log(`Array Length: ${bannerScroll.length}`);
    }

    // console.log("useEffect ran!!");
    // console.log(`Current Index useEffect: ${currentIndex}`);
    // console.log(`Array Length is: ${arrayLength}`)

    setInterval(switchImage, 5000);
  }, [])

  function switchImage(currentIndex) {
    console.log(`Current Index before IF: ${currentIndex}`)
    if (currentIndex > arrayLength - 1) {
      setCurrentIndex(0);
      console.log("Before If");
      console.log(currentIndex);
  
    }
    else {
      setCurrentIndex(currentIndex + 1);
      console.log("After If");
      console.log(currentIndex);
  
    }
    return currentIndex;

  }

  return (
    <div>
      <h1 className="tagLine">Come on in, relax , eat and smile</h1>
      <div className="container">
        <div className="row">
          {/* Banner Scroll goes below */}
          {console.log(`Current Index before Image: ${currentIndex}`)}
          <div className="col-lg"> <img
            src={bannerScroll[currentIndex]}
            alt=""
            className="img-fluid"
          /></div>
        </div>

        <div className="row">
          {/* Review scroll goes below */}
          <div className="col-lg-8 g-col-4 box2">
            <p className="lead align-left" >Feedback from out Customers...</p>
            <div className="reviews">
              <span style={{ float: "left" }}> 5/5 <br />stars</span>
              <span>J. Smith, Apr 2022 <br />
              "Customer Service was Excellent! The Staff was friendly and the food tasted great, Definitely would go again</span>
            </div>
          </div>

          {/* Service Awards goes below */}
          <div className="col-lg-4 g-col-4 box3">
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
