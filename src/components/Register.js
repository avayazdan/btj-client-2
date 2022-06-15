
import '../App.css'
import React, { useState } from 'react'  
import axios from 'axios';
import register from "../components/register.png"

// import React from 'react'

<link rel="stylesheet" href="App.css"></link>

function Register(props) {  

  const [data, setdata] = useState({ username: '', email: '', bio: '', display_picture: '', password: '', password_repeat: ''})
  // const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('');
  const apiUrl = "https://bite-the-jaw.herokuapp.com/users/register/"

  const Registration = async (e) => {  
    e.preventDefault();  
    // debugger;  
    const data1 = { username: data.username, email: data.email, bio: data.bio, display_picture: data.display_picture, password: data.password, password_repeat: data.password_repeat };  
    
    try {
      const { data } = await axios.post(apiUrl, data1) 
      setSuccessMessage("User created successfully")
      console.log(data)
    } catch(e) {
      console.log(e.response.data)
    }
  }
    const onChange = (e) => {
      // setErrorMessage("Oops! Something went wrong...")
      e.persist();  
      // debugger;  
      setdata({ ...data, [e.target.name]: e.target.value });  
      console.log(data)
    }

    return (
      <>
        <div>
        <h1 className="about-h1-login">Fight the good fight</h1>
          {/* <h1 className='Register'>Registration&nbsp;</h1> */}
          <div className='submit-container'>
          <img className="submission-header" src={register} alt="register-text"></img>
          </div>
        </div>
        <h4 className='success-message'>{successMessage}</h4>
        <form className="form">
        <div className="username">
        {/* <form onSubmit={Registration} class="user">   */}
          {/* <label className="form__label" for="username">Username</label> */}
          <input type="text" name="username" onChange={onChange} value={data.username} id="username" placeholder="Choose a username" />
        </div>
        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input type="email" name="email" onChange={onChange} value={data.email} id="email" className="form__input" placeholder="Email" />
        </div>
        <div className="bio">
          <label className="form__label" for="bio">Bio</label>
          <input type="text" name="bio" onChange={onChange} value={data.bio} id="bio" className="form__input" placeholder="Enter a short bio" />
        </div>
        <div className="displaypic">
          <label className="form__label" for="displaypic">Display picture</label>
          <input type="text" name="display_picture" onChange={onChange} value={data.display_picture} id="displaypic" className="form__input" placeholder="Paste a display picture (URL)" />
        </div>
        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" type="password" name="password" onChange={onChange} value={data.password} id="password" placeholder="Password" />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">Confirm Password </label>
          <input className="form__input" type="password" name="password_repeat" onChange={onChange} value={data.password_repeat} id="confirmPassword" placeholder="Repeat Password" />
          <div className='button-holder'><button type="submit" className="btn-reg" onClick={Registration} >Register</button></div>
          <br></br></div>
      </form>
      </>  
    )
  }
  export default Register  
  
  