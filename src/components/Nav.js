import React from "react";
import { Link, Outlet } from "react-router-dom";
import BTJLogo from "./logo1.png"
import BTJHeader from "./btjheader.png"
import "../Nav.css"

<link rel="stylesheet" href="Nav.css"></link>


function Nav() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                  <div className="logo-container">
                <Link to={'/'}><img src={BTJHeader} alt="BTJ Header"></img></Link>
                  <img className="plague-doctor" src={BTJLogo} alt="BTJ Logo"></img>
                  </div>
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/categories">Categories</Link>
                        </li> */}
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
                            <Link to="/register">Register</Link>
                        </li>
                        {/* <li>
                            <Link to="/article">Articles</Link>
                        </li> */}

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
              NW1 2DJ<br></br><br></br>
              This website was made for educational purposes only.</p>
              </div>
            </footer>
            {/* </div> */}
        </>
    );
}
export default Nav;
