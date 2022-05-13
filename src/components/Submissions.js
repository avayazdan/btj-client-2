import React from "react";
import "../App.css"
import Gif from "../components/homepagegif.gif"


<link rel="stylesheet" href="App.css"></link>

function Submissions() {

    return (
        <>
        <div>
        <h1 className="about-h1-login">Fight the good fight</h1>
          <h1 className="submissions-h1">Your submissions</h1>
            <div>
              <h2 className="submissions-h2">Oops! Looks like you don't have any approved submissions yet.&nbsp; Try back again another time.</h2>
              <div className="submission-container">
              <img className= "submission-image" src ={Gif} alt="pyramid gif"></img>
              </div>
            </div>
        </div>
        </>
    )
}

export default Submissions
