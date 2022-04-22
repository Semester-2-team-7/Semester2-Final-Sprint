import React from 'react'
import classes from "./Home.module.css"

export default function Home() {
  return (
    <div>
      <div id="About" className={classes.homeContainer}>
        <div>
          <div className={classes.box1}>
            <span className={classes.hello}>Hello I'm</span>
            <span className={classes.name}>Chris Doucette</span>
          </div>
        </div>
        <div >
          <div className={classes.box2}>
            <div className={classes.education}>
              <span className={classes.software}>Software Developer</span>
              <span className={classes.keyin}>Keyin College December 2022 Graduate</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
