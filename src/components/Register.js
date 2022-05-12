
import '../App.css'
import React, { useState } from 'react'  
import axios from 'axios';  
// import React from 'react'

<link rel="stylesheet" href="App.css"></link>

function Register(props) {  
  const [data, setdata] = useState({ Username: '', Email: '', Bio: '', DisplayPicture: '', Password: '', PasswordRepeat: ''})  
  const apiUrl = "http://localhost:8000/users/register/";  
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { Username: data.Username, Email: data.Email, Bio: data.Bio, DisplayPicture: data.DisplayPicture, Password: data.Password, PasswordRepeat: data.PasswordRepeat };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          return <div
                  className='error-message'><h1>Woops! Please try again...</h1></div>
        else 
            return <div className='success-message'><h1>User registered successfully. </h1></div>
          // props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (
            <>
        <div>
          <h1 className='Register'>Registration</h1>
        </div>
        <div onSubmit={Registration} className="form">
        <div className="username">
        {/* <form onSubmit={Registration} class="user">   */}
          <label className="form__label" for="username">Username</label>
          <input className="form__input" type="text" onChange={onChange} value={data.Username} id="username" placeholder="Choose a username" />
        </div>
        <div className="email">
          <label className="form__label" for="email">Email </label>
          <input type="email" onChange={onChange} value={data.Email} id="email" className="form__input" placeholder="Email" />
        </div>
        <div className="bio">
          <label className="form__label" for="bio">Bio</label>
          <input type="text" onChange={onChange} value={data.Bio} id="lastName" className="form__input" placeholder="Enter a short bio" />
        </div>
        <div className="displaypic">
          <label className="form__label" for="displaypic">Display picture</label>
          <input type="text" onChange={onChange} value={data.DisplayPicture} id="lastName" className="form__input" placeholder="Paste a display picture (URL)" />
        </div>
        <div className="password">
          <label className="form__label" for="password">Password </label>
          <input className="form__input" type="password" onChange={onChange} value={data.Password} id="password" placeholder="Password" />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">Confirm Password </label>
          <input className="form__input" type="password" onChange={onChange} value={data.PasswordRepeat} id="confirmPassword" placeholder="Repeat Password" />
        </div>
      </div><div class="footer">
          <button type="submit" class="btn-reg">Register</button>
        </div></>  
    )
  }
    export default Register  

    // <div class="container">  
    //   <div class="row">  
    //     <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
    //       Add New Contact  
    //   </div>  
    //   </div>  
    //   <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
    //     <div class="card-body p-0">  
    //       <div class="row">  
    //         <div class="col-lg-12">  
    //           <div class="p-5">  
    //             <div class="text-center">  
    //               <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>  
    //             </div>  
    //             <form onSubmit={Registration} class="user">  
    //               <div class="form-group row">  
    //                 <div class="col-sm-6 mb-3 mb-sm-0">  
    //                   <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleFirstName" placeholder="Email" />  
    //                 </div>  
    //                 <div class="col-sm-6">  
    //                   <input type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password" />  
    //                 </div>  
    //               </div>  
    //               <div class="form-group">  
    //                 <input type="text" name="EmployeeName" onChange={onChange} value={data.EmployeeName} class="form-control" id="exampleInputEmail" placeholder="EmployeeName" />  
    //               </div>  
    //               <div class="form-group row">  
    //                 <div class="col-sm-6 mb-3 mb-sm-0">  
    //                   <input type="text" name="City" onChange={onChange} value={data.City} class="form-control" id="exampleInputPassword" placeholder="City" />  
    //                 </div>  
    //                 <div class="col-sm-6">  
    //                   <input type="text" name="Department" onChange={onChange} value={data.Department} class="form-control" id="exampleRepeatPassword" placeholder="Department" />  
    //                 </div>  
    //               </div>  
    //               <button type="submit" class="btn btn-primary  btn-block">  
    //                 Create User  
    //             </button>  
    //               <hr />  
    //             </form>  
    //             <hr />  
    //           </div>  
    //         </div>  
    //       </div>  
    //     </div>  
    //   </div>  
    // </div>  
//   )  
// }  

