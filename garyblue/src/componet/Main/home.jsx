import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./Home.module.css";

// import Banner1 from "../../Images/BannerScroll/Garycombo.webp";
// import Banner2 from "../../Images/BannerScroll/BigGaryTuesday.webp";
// import Banner3 from "../../Images/BannerScroll/OnlineOrdering.webp";
// import Banner4 from "../../Images/BannerScroll/StrawberrySquash.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faAward } from '@fortawesome/free-solid-svg-icons';


import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  // Icons used on page
  const starIcon = <FontAwesomeIcon icon={faStar} />;
  const starHalfIcon = <FontAwesomeIcon icon={faStarHalf} />;

  const awardIcon = <FontAwesomeIcon icon={faAward} />
  
  
   return (

    <div>
      {console.log("Page Rendered")}
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

            <div className={classes.feedback} >Feedback from out Customers...</div><div className={classes.totalReviews}> 400+ reviews <span className={classes.starColor}>{starIcon}{starIcon}{starIcon}{starIcon}{starHalfIcon}</span></div>

            <div className={classes.reviews}>
              <div className={`${classes.bold} ${classes.reviewStars}`}>
                {" "}
                5/5 <br />{" "}
                <span className={classes.starColor}>
                  {starIcon}
                  {starIcon}
                  {starIcon}
                  {starIcon}
                  {starIcon}
                </span>{" "}
              </div>
              <div className={classes.currentReview}>
                <div className={classes.bold}> J. Smith, Apr 2022 </div>
                <div>
                  "Customer Service was Excellent! The Staff was friendly and
                  the food tasted great, Definitely would go again
                </div>
              </div>
            </div>
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
};

export default Home;
