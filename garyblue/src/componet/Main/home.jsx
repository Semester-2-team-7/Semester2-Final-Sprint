import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faAward } from '@fortawesome/free-solid-svg-icons';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselReviews from "./CarouselReviews";

const Home = () => {
  // Icons used on page
  const starIcon = <FontAwesomeIcon icon={faStar} />;
  const starHalfIcon = <FontAwesomeIcon icon={faStarHalf} />;
  const awardIcon = <FontAwesomeIcon icon={faAward} />
  
 return (

    <div>
      <h1 className={classes.tagLine}>Come on in, relax , eat and smile</h1>
      <div className="container">
        <div className="row">
          {/* Banner Scroll goes below */}
        <div className="col-lg"> 
            {/* Adding trial carousle here */}

              <Carousel />

          </div>
        </div>

        <div className={`row ${classes.homeBottom}`}>
          {/* Review scroll goes below */}
          <div className={`col-lg-8 g-col-4 ${classes.box2}`}>

          <div className={classes.feedback} >Feedback from our Customers...</div>
          <div className={classes.totalReviews}>400+ reviews <span className={classes.primColor}>{starIcon}{starIcon}{starIcon}{starIcon}{starHalfIcon}</span></div>
          <button className={classes.btnLeaveReview}>Leave Your Review! </button>

           <CarouselReviews />

                   
          </div>

          {/* Service Awards goes below */}
          <div className={`col-lg-4 g-col-4 ${classes.box3}`}>
            <div className={classes.awards}>
              <span className={classes.awardImage}>{awardIcon}</span> 2022 Best
              Hamburgers in the City
            </div>
            <div className={classes.awards}>
              <span className={classes.awardImage}>{awardIcon}</span> 2021 Top
              Service Award
            </div>
            <div className={classes.awards}>
              <span className={classes.awardImage}>{awardIcon}</span> 2021 Best
              Hamburgers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
