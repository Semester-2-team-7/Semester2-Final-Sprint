import React from 'react'
import classes from "./Footer.module.css"
import GitHubLogo from "../images/GitHub-Mark-Light-32px.png"
import LinkedInLogo from "../images/LinkedInLogoWhite.png"
import EmailLogo from "../images/email-128.png"

export default function Footer() {
  return (
      
    <footer id="Contact" className={classes.footer}>
          <div className={classes.letsWork}>Let's work together...</div>
            <div className={classes.contacts}>
                <div className={classes.ContactSpacing}>
                    <a href="https://github.com/csdouce?tab=repositories" target="_blank"><img src={GitHubLogo} alt="GitHub Logo" /> <span className={classes.socialText}> GitHub </span></a>
                </div>
        <div className={classes.ContactSpacing}>
          
          {/* LinkedIn is currently a placeholder for when account is created */}

                    <a href="#"><img src={LinkedInLogo} alt="LinkedIn Logo" className={`${classes.SocialImage}`}/> <span className={classes.socialText}>LinkedIn</span></a>
                </div>
                <div>
                  <a href="mailto:chris.doucette@keyin.com" target="_blank"><img src={EmailLogo} alt="Email Icon" className={`${classes.SocialImage}`}/> <span className={classes.socialText}>Email Me </span></a>
            </div>
          </div>
          <div className={classes.FooterBottom}>
                  <hr style={{height: "4px", color: "#c00e0e", backgroundColor: "#c00e0e"}}/>
                  <div className={classes.CreatedBy}>
                      Created by Chris Doucette while at Keyin College
                  </div>
              </div>


    </footer>
  )
}
