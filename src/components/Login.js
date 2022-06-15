import React, { useState } from 'react'  
import axios from 'axios'; 
import '../App.css'
import loginpic from "../components/login.png"

<link rel="stylesheet" href="App.css"></link>


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");

  axios.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
      errorMessage()
    }
  return error;
});

  const handleusername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
    setError(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    setError(false);
    console.log(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);


      axios({
        method: "post",
        url: "https://bite-the-jaw.herokuapp.com/api/token/",
        data: {
          username: "PunkPlanet",
          password: "ilovetwitch123",
        },
      })
        .then((response) => {
          console.log(`api key: ${response.data.access}`);
          localStorage.setItem("access", response.data.access);
          console.log(`api key: ${localStorage.access}`);
        })
        .catch((error) => {
          console.log(error);
        });

    }
  };

  const successMessage = () => {
    return (
      <div style={{ display: submitted ? "" : "none" }}>
        <h3>Login Successful</h3>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div style={{ display: error ? "" : "none" }}>
        <h2>There was an error. Please check your fields and try again.</h2>
      </div>
    );
  };

  return (
    <><h1 className="about-h1-login">Fight the good fight</h1><section>
      <div className='about-background'>
      <div className='submit-container'>
      <img className='submit-head' src={loginpic} alt="login-text"></img>
      </div>
      <div className="form">
        <div className="form">
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
          <section>
            <form className='login'>
              <label className="label" htmlFor="username">
                Username:
              </label>
              <br></br>
              <input
                className="input"
                onChange={handleusername}
                type="text"
                id="username"
                name="username"
              ></input>
              <br></br>

              <label className="label" htmlFor="password">
                Password:
              </label>
              <br></br>
              <input
                className="input"
                onChange={handlePassword}
                type="password"
                id="password"
                name="password"
                ></input>
              <br></br>
              <div className='button-holder'>
              <button className="button" onClick={handleSubmit} type="submit">
                Login
              </button>
              </div>
            </form>
          </section>
                </div>
        </div>
      </div>
    </section></>
  );
}

export default Login;
