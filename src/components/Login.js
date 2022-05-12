
import '../App.css'
import React from 'react'

<link rel="stylesheet" href="App.css"></link>

function Register() {

    return (
        <>
        <div>
          <h1 className='Register'>Registration</h1>
        </div>
        <div className="form">
        <div className="username">
          <label className="form__label" for="username">Username</label>
          <input className="form__input" type="text" id="username" placeholder="Choose a username" />
        </div>
        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input type="email" id="email" className="form__input" placeholder="Email" />
        </div>
        <div className="bio">
          <label className="form__label" for="bio">Bio</label>
          <input type="text" name="" id="lastName" className="form__input" placeholder="Enter a short bio" />
        </div>
        <div className="displaypic">
          <label className="form__label" for="displaypic">Display picture</label>
          <input type="text" name="" id="lastName" className="form__input" placeholder="Paste a display picture (URL)" />
        </div>
        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" type="password" id="password" placeholder="Password" />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">Confirm Password </label>
          <input className="form__input" type="password" id="confirmPassword" placeholder="Repeat Password" />
        </div>
      </div><div class="footer">
          <button type="submit" class="btn-reg">Register</button>
        </div></>  
    )       
}

export default Register