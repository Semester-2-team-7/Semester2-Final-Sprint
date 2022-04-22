import React, {useEffect} from 'react'
import classes from "./Portfolio.module.css"
import garyBlues2 from "../images/GaryBluesDiner-Semester2-Sprint2.jpeg"
import garyBlues1 from "../images/GaryBluesDiner-Semester2-Sprint1.jpeg"
import responsiveWebDesignCert from "../images/ResponsiveWebDesign-FreeCodeCamp.jpeg"
import pythonForEverybody from "../images/PythonForEverybody.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {


    useEffect(() => {

        document.getElementById("exampleModal").addEventListener('show.bs.modal', (e) => {

    if (e.relatedTarget.id === "S2S2") {
        document.getElementById("exampleModalLabel").innerHTML = "Gary Blues Diner - Sprint 2";
        document.getElementById("modalContent").innerHTML = "<p>A group of three decided to take an earlier project to the next level. We redesigned the website using Figma and built it from scratch using ReactJS. I was primarily responsible for the Home page and creating the Style.scss page.<p/><p>Project Requirements were:</p><ul> <li>Have a Figma design done up for your project following the design principles that Levin taught you in UI/UX.</li> <li>Implement the project in React.</li> <li>Use proper Semantic HTML tags where applicable.</li> <li>Comment your code for clear representation of its purpose.</li> <li>CSS and React code that approximates the design in the Figma mockup.</li> <li>Must use React Router (A minimum of 3 pages).</li> <li>Upload the finished project to GitHub.</li> </ul>";

    }

    if (e.relatedTarget.id === "S2S1") {
        document.getElementById("exampleModalLabel").innerHTML = "Gary Blues Diner - Sprint 1";
        document.getElementById("modalContent").innerHTML = "<p>In a group of three we designed a restaurant website in Figma. We then built the website using HTML and CSS.</p><p>The basic requirements for the Sprint are as follows:</p><ul><li>The website must have at least 3 separate pages it links between.</li> <li>Each page must implement styling using CSS.</li> <li>It is required that your styling implements either CSS Grid and/or Flexbox.</li> <li>There must be manipulation of the DOM with JavaScript.</li> <li>You must submit a Figma mock-up for your designs.</li> </ul><p>Some key notes to keep in mind for this project is a good use of HTML5 semantic tags (Which is pivotal for accessibility purposes), organization of your code (as it should be easy to tell what is where), and layout/colour choice of the pages (A pleasant design is an important aspect. A simple colour wheel or hex picker can be a powerful tool!). </p>";
    }

    if (e.relatedTarget.id === "ResponsiveWeb") {
        document.getElementById("exampleModalLabel").innerHTML = "Responsive Web Design - FreeCodeCamp";
        document.getElementById("modalContent").innerHTML = "<p>In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.</p><p>First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a web form.</p><p>Finally, you'll learn how to make webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.</p>"
    }

    if (e.relatedTarget.id === "PythonForEverybody") {
        document.getElementById("exampleModalLabel").innerHTML = "Python for Everybody - Coursera";
        document.getElementById("modalContent").innerHTML = "<p>This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own  applications for data retrieval, processing, and visualization.</p>"
    }
    })

    });
 

    
    return (
    <div className={classes.portfolioPage}>      
        <h2 className={classes.headingTwo}>My Portfolio</h2>
        <h3 id="SchoolProject" className={classes.headingThree}>School Projects</h3>
        <div className={classes.containerPortfolioSchool}>
            <button className={classes.projectBox} id="S2S2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className={classes.schoolProject1}>
                        <img src={garyBlues2} alt="Gary Blues Website" className={classes.ProjectImage}/>
                    </div>
                    <div className={classes.projectText}>
                        <span>Gary's Blues Restaurant Page</span>
                        <span>| Semester 2 | Sprint 2 |</span>
                    </div>
                </button>
                <button className={classes.projectBox} id="S2S1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className={classes.schoolProject1}>
                        <img src={garyBlues1} alt="Gary Blues Website" className={classes.ProjectImage}/>
                    </div>
                    <div className={classes.projectTextBox}>
                        <span className={classes.projectText}>Gary's Blues Restaurant Page</span>
                        <span>| Semester 2 | Sprint 1 |</span>
                    </div>
                </button>
        </div>
            

        <hr style={{height: "4px", color: "#c00e0e", backgroundColor: "#c00e0e"}}/>
        <h3 id="OtherProject" className={classes.headingThree}>Other Projects</h3>    
        
 

            
        <div className={classes.containerPortfolioOther}>
            <button className={classes.projectBox} id="ResponsiveWeb" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className={classes.schoolProject1}>
                        <img src={responsiveWebDesignCert} alt="Responsive Web Design Certificate - FreeCodeCamps" className={classes.ProjectImage}/>
                    </div>
                    <div className={classes.projectText}>
                        <span>Reponsive Web Design Certificate</span>
                        <span>FreeCodeCamp</span>
                </div>        
            </button>
            <button className={classes.projectBox} id="PythonForEverybody" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className={classes.schoolProject1}>
                        <img src={pythonForEverybody} alt="Python for Everybody Certificate - Coursera" className={classes.ProjectImage}/>
                    </div>
                    <div className={classes.projectText}>
                        <span>Python for Everybody Certificate</span>
                        <span>Coursera</span>
                </div>        
            </button>
        </div>
            {/* Modal Starts Here */}
                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button> */}

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                            <h5 className={`modal-title ${classes.modalTitle}`} id="exampleModalLabel">Heading</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={`modal-body ${classes.modalText}`} id="modalContent" > Content
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                            </div>
    {/* Modal ends here */}

    </div>

    
  )
}