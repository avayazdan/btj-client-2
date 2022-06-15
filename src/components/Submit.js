import picture from "../components/submityour.png"
import '../App.css'
import React from 'react'
import axios from "axios";


<link rel="stylesheet" href="App.css"></link>

function Submit() {  


  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = React.useState({})

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // setSubmitted(false);
  }
  
  const onSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const config = {headers: {Authorization: `${localStorage.getItem("access")}`}}
      const resp = await axios.post('https://bite-the-jaw.herokuapp.com/submissions/', formData, config)
      console.log(resp)
      setSubmitted(true);
      setError(false);
    }
    catch (e) {
      setError(e.response.data.message)
    }
  }

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>Your submission has been sent. One of our team will be in touch with you if it is accepted to be an article. Keep fighting the good fight!</h1>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

    return (
        <>
        <div>
        <h2 className='submit-h2' >"It is better to change an opinion than to persist in a wrong one"</h2>
        <div className='submit-container'>
        <img className="submit-head" src={picture} alt="submit-your-work-text"></img>
        </div>
        <h3>You must register and login before you send a submission.</h3>
          {/* <h1 className='Register'>Submit your work&nbsp;&nbsp;&nbsp;&nbsp;</h1> */}
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
        <form className="form" onSubmit={{onSubmit}}>
        <div className="title">
          <label className="form__label">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter the title of your piece" onChange={onChange} />
        </div>
        <div className="image">
          <label className="form__label">Text field</label>
          <input type="text" id="text" name="text" className="text-box" placeholder="" onChange={onChange} />
        </div>
        <div className="image">
          <label className="form__label">Image</label>
          <input type="text" name="image" id="image" className="form__input" placeholder="Paste your piece image here (URL)" onChange={onChange}/>
        </div>
        <div className="category">
          <label className="form__label" for="displaypic">Category</label>
          <select name="category" id="category" onChange={onChange}>
          <option value="art">Art</option>
          <option value="politics">Politics</option>
          <option value="philosophy">Philosophy</option>
          <option value="history">History</option>
          <option value="film">Film Studies</option>
          <option value="current">Current Affairs</option>
          </select>
          <div class="button-holder">
          <button onClick={onSubmit} type="submit" className="btn-reg">Submit</button>
          </div>
        </div>
      </form>
          {successMessage()}
        </>  
    )       
}

export default Submit