import React, { useEffect } from "react";
import { useState } from "react";
import Banner1 from "../../Images/BannerScroll/Garycombo.webp";
import Banner2 from "../../Images/BannerScroll/BigGaryTuesday.webp";
import Banner3 from "../../Images/BannerScroll/OnlineOrdering.webp";
import Banner4 from "../../Images/BannerScroll/StrawberrySquash.webp";
// import { FontAwesomeIcon } from '../@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  // Time for banner scroll
  const [bannerScroll, setBannerScroll] = useState([]);
  let [currentIndex, setCurrentIndex] = useState(0);
  const [arrayLength, setArrayLength] = useState(4);
  

  useEffect(() => {
  
    setBannerScroll([Banner1, Banner2, Banner3, Banner4]);

    // setCurrentIndex(0);
    // setArrayLength(bannerScroll.length);

    console.log(`UseEffect CurrentIndex: ${currentIndex}`);
    // console.log(`UseEffect ArrayLength: ${arrayLength}`);

    setInterval(() => {

      console.log(`Before if currentIndex: ${currentIndex}`);
      if (currentIndex < arrayLength) {
        setCurrentIndex(currentIndex++);  
        console.log(`Before else CurrentIndex ${currentIndex}`);
      } else {
        setCurrentIndex(currentIndex = 0);
        console.log(`After else CurrentIndex ${currentIndex}`);
      }
    }, 5000)


  }, [])

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
