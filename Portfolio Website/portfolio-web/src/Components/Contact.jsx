import React from 'react'
import classes from "./Contact.module.css"
import GitHubLogoLrg from "../images/GitHub-Mark-Light-120px-plus.png"
import LinkedInLogo from "../images/LinkedInLogoWhite.png"
import EmailLogo from "../images/email-128.png"

export default function 
() {
  return (
    <div className="container">
    <div className="row">
        <div className={`col ${classes.titleBox}`}>
                  <h2 className={classes.heading}>Let's Connect...</h2>
        <div className={`col ${classes.socialContacts}`}>
      
         <a href="https://github.com/csdouce?tab=repositories" target="_blank"><img src={GitHubLogoLrg} alt="GitHub Logo" className={`${classes.socialImages}`}/> <span className={classes.socialText}> GitHub </span></a>
      
        {/* LinkedIn is currently a placeholder for when account is created */}
         <a href="#"><img src={LinkedInLogo} alt="LinkedIn Logo" className={`${classes.socialImages}`}/> <span className={classes.socialText}>LinkedIn</span></a>
      
        <a href="mailto:chris.doucette@keyin.com" target="_blank"><img src={EmailLogo} alt="Email Icon" className={`${classes.socialImages}`}/> <span className={classes.socialText}>Email Me </span></a>
        
</div>                  
        </div>
    </div>
    <div className="row">

    </div>
    </div>
  )
}
