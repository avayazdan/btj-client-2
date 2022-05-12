
import '../App.css'
import React from 'react'

<link rel="stylesheet" href="App.css"></link>

function Submit() {

    return (
        <>
        <div>
          <h1 className='Register'>Submit your work</h1>
        </div>
        <div className="form">
        <div className="title">
          <label className="form__label" for="title">Title</label>
          <input className="form__input" type="text" id="username" placeholder="Enter the title of your piece" />
        </div>
        <div className="image">
          <label className="form__label" for="text">Text field</label>
          <input type="text" id="text" className="form__input" placeholder="Copy and paste or enter your submission here (text)" />
        </div>
        <div className="image">
          <label className="form__label" for="bio">Image</label>
          <input type="text" name="" id="image" className="form__input" placeholder="Paste your piece image here (URL)"/>
        </div>
        <div className="category">
          <label className="form__label" for="displaypic">Category</label>
          {/* <input type="radio" name="" id="category" className="form__input" placeholder="Choose a category" /> */}
          <select name="category" id="category">
          <option value="art">Art</option>
          <option value="politics">Politics</option>
          <option value="philosophy">Philosophy</option>
          <option value="history">History</option>
          <option value="film">Film Studies</option>
          <option value="current">Current Affairs</option>
          </select>
        </div>
      </div><div class="footer">
          <button type="submit" class="btn-reg">Submit</button>
        </div></>  
    )       
}

export default Submit