import React from "react";
import "../App.css"
import Backdrop from "../components/logo2.png"

<link rel="stylesheet" href="App.css"></link>

function About() {

    return (
        <>
        <img className="backdrop" src={Backdrop} alt="plague-doctor-backdrop"></img>
          <h1 className="about-h1">Fight the good fight</h1>
          <p className="about">bite the jaw is a space where anybody and anyone can share their voice with thousands of users.<br></br>
          this is a space run by the people, <span>for the people. </span>BTJ prides itself on having "published" notable works on history, feminism, marxism, as well as
          insider information from credible sources that's broken international news in the past...yeah, you heard that right, if you didn't already know that is. <br></br>
          you can share your work, evidence or insights anonymously or proudly, and one of our investigators, reporters or moderators behind the scenes will work together to get
          your work approved, depending on the nature of your submission. either way, your words are safe with us. <br></br><br></br>
          <span>no need to bite your tongue here.</span></p>
        </>
    )
}

export default About
