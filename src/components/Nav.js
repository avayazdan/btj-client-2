import React from "react";
import { Link, Outlet } from "react-router-dom";
// import "../Nav.css"
// import FacebookLogo from "../assets/facebook.png"
// import TwitterLogo from "../assets/twitter.png"
// import InstagramLogo from "../assets/instagram.png"
// import WalkiesLogo from "../assets/logo1.png"
import "../Nav.css"

<link rel="stylesheet" href="Nav.css"></link>


function Nav() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                  {/* <img src={} alt="Walkies logo"></img> */}
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/submit">Submit your work</Link>
                        </li>
                        <li>
                            <Link to="/about">About BTJ</Link>
                        </li>
                        <li>
                            <Link to="/submissions">My Submissions</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/login">Register</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            {/* <div className="footer-container">
              <div className="socials-container">
              <a href ="https://www.facebook.com" target="_blank" rel="noreferrer noopener"><img src ={FacebookLogo} alt ="facebook logo"></img></a>
              <a href ="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><img src ={TwitterLogo} alt ="twitter logo"></img></a>
              <a href ="https://www.instagram.com" target="_blank" rel="noreferrer noopener"><img src ={InstagramLogo} alt ="instagram logo"></img></a>
              </div> */}
            <footer>
              <p className="footer">&copy;BTJ 2022</p>
              <div className="contact-container">
              <p className="footer">Contact us:<br>
              </br><br></br>Phone: 0207 291 606<br>
              </br>Email: fighthegoodfight@btj.com<br>
              </br>Address: 777<br></br>
              North Camden Road<br></br>
              NW1 2DJ</p><br></br>
              <p>This website was made for educational purposes only.</p>
              </div>

            </footer>
            {/* </div> */}
        </>
    );
}
export default Nav;
