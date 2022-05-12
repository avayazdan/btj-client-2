
import '../App.css'
import React from 'react'
import axios from "axios";


<link rel="stylesheet" href="App.css"></link>

const Submit = () => {


  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [formData, setFormData] = React.useState({})


  // Handling onChange
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // setSubmitted(false);
  }

  // Handling the form submission
  const onSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try {
      const config = {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}}
      const resp = await axios.post('localhost:8000/submissions/', formData, config)
      console.log(resp)
      setSubmitted(true);
      setError(false);
    }
    catch (e) {
      setError(e.response.data.message)
    }
  }

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User created </h1>
      </div>
    );
  };

  // Showing error message if error is true
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
          <h1 className='Register'>Submit your work</h1>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
        <form className="form" onSubmit={{onSubmit}}>
        <div className="title">
          <label className="form__label">Title</label>
          <input type="text" id="title" name="title" placeholder="Enter the title of your piece" onChange={onChange} />
        </div>
        <div className="image">
          <label className="form__label">Text field</label>
          <input type="text" id="text" name="text" className="form__input" placeholder="Copy and paste or enter your submission here (text)" onChange={onChange} />
        </div>
        <div className="image">
          <label className="form__label">Image</label>
          <input type="text" name="image" id="image" className="form__input" placeholder="Paste your piece image here (URL)" onChange={onChange}/>
        </div>
        <div className="category">
          <label className="form__label" for="displaypic">Category</label>
          {/* <input type="radio" name="" id="category" className="form__input" placeholder="Choose a category" /> */}
          <select name="category" id="category" onChange={onChange}>
          <option value="art">Art</option>
          <option value="politics">Politics</option>
          <option value="philosophy">Philosophy</option>
          <option value="history">History</option>
          <option value="film">Film Studies</option>
          <option value="current">Current Affairs</option>
          </select>
        </div>
      </form><div className="footer">
          <button onSubmit={Submit} type="submit" className="btn-reg">Submit</button>
          {successMessage()}
        </div></>  
    )       
}

export default Submit