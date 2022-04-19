import classes from "./Footer.module.css";


export default function Footer() {

    return (
        // fixed-bottom
        <footer>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
  <div className="container-fluid d-flex flex-row justify-content-evenly">
                    <span className="list-group-item list-group-item-action active" aria-current="true">
                        {/* Store Hours */}
      <h5 className="mb-1">Store Hours</h5>
            <p className="mb-1">Mon - Thur: 9am - 7pm</p>
            <p className="mb-1">Fri - Sat: 9am - 9pm</p>
            <p className="mb-1">Sun: 9am - 5pm</p>
    </span>

                        {/* Locations          */}
    <span className="list-group-item list-group-item-action active" aria-current="true">
                        <h5 className="mb-1">Locations</h5>
                        <div className={classes.spaceAdded}>
                        <p className="mb-1">St. John's: </p>
                            <small>123 Thisway Road</small>
                        </div>
                        <div>
                        <p className="mb-1">Clarenville: </p>
                            <small>456 Anyplace Lane</small>
                            </div>
                    </span>


                        {/* Follow Us */}
  <span className="list-group-item list-group-item-action active">
      <h5 className="mb-1">Follow Us</h5>
                        <p className="mb-1"> <a href="#">Twitter</a></p>
                        <p className="mb-1"> <a href="#">Facebook</a></p>
                        <p className="mb-1"> <a href="#">Instagram</a></p>
                    </span>
    
                    {/* Contact Us */}
                    <span className="list-group-item list-group-item-action active">
      <h5 className="mb-1">Contact Us</h5>
                        <p className="mb-1">Toll Free: 1-800-555-GARY</p>
                        <p className="mb-1"><a href="mailto:garyblues@garybluesdiner.ca" target="_blank">Email: garyblues@garybluesdiner.ca</a></p>
  </span>
</div>

    {/* </div> */}
            </nav>
            </footer>
  );
}
