import React, { useState } from 'react'  
import axios from 'axios'; 
import '../App.css'

<link rel="stylesheet" href="App.css"></link>


function Login() {
  // States for login form
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

  // Handling input changes
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
        url: "http://localhost:8000/api/token/",
        data: {
          username: "punkplanet@tpp.com",
          password: "ilovetwitch123",
        },
      })
        .then((response) => {
          // console.log(`api key: ${response.data.token}`);
          localStorage.setItem("token", response.data.token);
          console.log(`api key: ${localStorage.token}`);
        })
        .catch((error) => {
          console.log(error);
        });

    }
  };

  const successMessage = () => {
    return (
      <div style={{ display: submitted ? "" : "none" }}>
        <h2>Login Successful</h2>
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
    <section>
      <div className="forms-and-photos">
        {/* <img src={dog2} alt="dog"></img> */}
        <div className="form">
          <h2>User Login 🐾</h2>
          {/* <h2>Login to your account here:</h2> */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
          <section>
            <form>
              <label className="label" htmlFor="username">
                username
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
                type="text"
                id="password"
                name="password"
              ></input>
              <br></br>

              <button className="button" onClick={handleSubmit} type="submit">
                Login
              </button>
            </form>
          </section>
        </div>
        {/* <img src={dog1} alt="dog"></img> */}
      </div>
    </section>
  );
}

export default Login;

// function Login1(props) {  
//     const [user, setUser] = useState({ username: '', Password: ''});  
//     const apiUrl = "http://localhost:8000/api/token/";    
//     const Login = (e) => {    
//             e.preventDefault();      
//             const data = { Email:user.Email, Password: user.Password };    
//             axios.post(apiUrl, data)    
//             .then((result) => {    
//                 console.log(result.data);   
//                 const serializedState = JSON.stringify(result.data.UserDetails);  
//                 const a = localStorage.setItem('myData', serializedState);   
//                 console.log("A:",a)  
//                 const user = result.data.UserDetails;  
//                 console.log(result.data.message);  
//                 if (result.data.status === '200')    
//                     props.history.push('/Dashboard')    
//                 else    
//                 alert('Invalid User');    
//             })        
//           };    
          
//           const onChange = (e) => {    
//                 e.persist();    
//                 // debugger;    
//                 setUser({...user, [e.target.name]: e.target.value});    
//               }    
//     return (  
        
//         <div class="container">  
//         <div class="row justify-content-center">  
//           <div class="col-xl-10 col-lg-12 col-md-9">  
//             <div class="card o-hidden border-0 shadow-lg my-5">  
//               <div class="card-body p-0">  
//                 <div class="row">  
//                   <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>  
//                   <div class="col-lg-6">  
//                     <div class="p-5">  
//                       <div class="text-center">  
//                         <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>  
//                       </div>  
//                       <form onSubmit={Login} class="user">  
//                         <div class="form-group">  
//                           <input type="email" class="form-control" value={user.Email} onChange={ onChange }  name="Email" id="Email" aria-describedby="emailHelp" placeholder="Enter Email"/>  
//                         </div>  
//                         <div class="form-group">  
//                           <input type="password" class="form-control" value={user.Password} onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Password"/>  
//                         </div>  
//                         {/* <div class="form-group">  
//                           <div class="custom-control custom-checkbox small">  
//                             <input type="checkbox" class="custom-control-input" id="customCheck"/>  
//                             <label class="custom-control-label" for="customCheck">Remember Me</label>  
//                           </div>  
//                         </div> */}  
//                         <button type="submit" className="btn btn-info mb-1" block><span>Login</span></button>    
//                         <hr/>  
//                       </form>  
//                       <hr/>  
//                     </div>  
//                   </div>  
//                 </div>  
//               </div>  
//             </div>  
//             </div>  
//           </div>  
//         </div>  
//     )  
// }  
  
// export default Login1  


// // import '../App.css'
// // import React, { useState } from 'react'  
// // import axios from 'axios';  
// // // import React from 'react'

// // <link rel="stylesheet" href="App.css"></link>

// // function Register(props) {  
// //   const [data, setdata] = useState({ Username: '', Email: '', Bio: '', DisplayPicture: '', Password: '', PasswordRepeat: ''})  
// //   const apiUrl = "http://localhost:8000/users/register/";  
// //   const Registration = (e) => {  
// //     e.preventDefault();  
// //     debugger;  
// //     const data1 = { Username: data.Username, Email: data.Email, Bio: data.Bio, DisplayPicture: data.DisplayPicture, Password: data.Password, PasswordRepeat: data.PasswordRepeat };  
// //     axios.post(apiUrl, data1)  
// //       .then((result) => {  
// //         debugger;  
// //         console.log(result.data);  
// //         if (result.data.Status === 'Invalid')  
// //           return <div
// //                   className='error-message'><h1>Woops! Please try again...</h1></div>
// //         else 
// //             return <div className='success-message'><h1>User registered successfully. </h1></div>
// //           // props.history.push('/Dashboard')  
// //       })  
// //   }  
// //   const onChange = (e) => {  
// //     e.persist();  
// //     debugger;  
// //     setdata({ ...data, [e.target.name]: e.target.value });  
// //   }  
// //   return (
// //             <>
// //         <div>
// //           <h1 className='Register'>Registration</h1>
// //         </div>
// //         <div onSubmit={Registration} className="form">
// //         <div className="username">
// //         {/* <form onSubmit={Registration} class="user">   */}
// //           <label className="form__label" for="username">Username</label>
// //           <input className="form__input" name="username" type="text" onChange={onChange} id="username" placeholder="Choose a username" />
// //         </div>
// //         <div className="email">
// //           <label className="form__label" for="email">Email </label>
// //           <input type="email" name="email" onChange={onChange} value={data.Email} id="email" className="form__input" placeholder="Email" />
// //         </div>
// //         <div className="bio">
// //           <label className="form__label" for="bio">Bio</label>
// //           <input type="text" name="bio" onChange={onChange} value={data.Bio} id="bio" className="form__input" placeholder="Enter a short bio" />
// //         </div>
// //         <div className="displaypic">
// //           <label className="form__label" for="displaypic">Display picture</label>
// //           <input type="text" name="displaypic" onChange={onChange} value={data.DisplayPicture} id="display-pic" className="form__input" placeholder="Paste a display picture (URL)" />
// //         </div>
// //         <div className="password">
// //           <label className="form__label" for="password">Password </label>
// //           <input className="form__input" type="password" name="password" onChange={onChange} value={data.Password} id="password" placeholder="Password" />
// //         </div>
// //         <div className="confirm-password">
// //           <label className="form__label" for="confirmPassword">Confirm Password </label>
// //           <input className="form__input" type="password" name="password-repeat" onChange={onChange} value={data.PasswordRepeat} id="confirmPassword" placeholder="Repeat Password" />
// //         </div>
// //       </div><div class="footer">
// //           <button type="submit" class="btn-reg">Register</button>
// //         </div></>  
// //     )
// //   }
// //     export default Register  

// //     // <div class="container">  
// //     //   <div class="row">  
// //     //     <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
// //     //       Add New Contact  
// //     //   </div>  
// //     //   </div>  
// //     //   <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
// //     //     <div class="card-body p-0">  
// //     //       <div class="row">  
// //     //         <div class="col-lg-12">  
// //     //           <div class="p-5">  
// //     //             <div class="text-center">  
// //     //               <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>  
// //     //             </div>  
// //     //             <form onSubmit={Registration} class="user">  
// //     //               <div class="form-group row">  
// //     //                 <div class="col-sm-6 mb-3 mb-sm-0">  
// //     //                   <input type="text" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleFirstName" placeholder="Email" />  
// //     //                 </div>  
// //     //                 <div class="col-sm-6">  
// //     //                   <input type="Password" name="Password" onChange={onChange} value={data.Password} class="form-control" id="exampleLastName" placeholder="Password" />  
// //     //                 </div>  
// //     //               </div>  
// //     //               <div class="form-group">  
// //     //                 <input type="text" name="EmployeeName" onChange={onChange} value={data.EmployeeName} class="form-control" id="exampleInputEmail" placeholder="EmployeeName" />  
// //     //               </div>  
// //     //               <div class="form-group row">  
// //     //                 <div class="col-sm-6 mb-3 mb-sm-0">  
// //     //                   <input type="text" name="City" onChange={onChange} value={data.City} class="form-control" id="exampleInputPassword" placeholder="City" />  
// //     //                 </div>  
// //     //                 <div class="col-sm-6">  
// //     //                   <input type="text" name="Department" onChange={onChange} value={data.Department} class="form-control" id="exampleRepeatPassword" placeholder="Department" />  
// //     //                 </div>  
// //     //               </div>  
// //     //               <button type="submit" class="btn btn-primary  btn-block">  
// //     //                 Create User  
// //     //             </button>  
// //     //               <hr />  
// //     //             </form>  
// //     //             <hr />  
// //     //           </div>  
// //     //         </div>  
// //     //       </div>  
// //     //     </div>  
// //     //   </div>  
// //     // </div>  
// // //   )  
// // // }  

// // // import '../App.css'
// // // import React from 'react'

// // // <link rel="stylesheet" href="App.css"></link>

// // // function Register() {

// // //     return (
// // //         <>
// // //         <div>
// // //           <h1 className='Register'>Registration</h1>
// // //         </div>
// // //         <div className="form">
// // //         <div className="username">
// // //           <label className="form__label" for="username">Username</label>
// // //           <input className="form__input" type="text" id="username" placeholder="Choose a username" />
// // //         </div>
// // //         <div className="email">
// // //           <label className="form__label" for="email">Email </label>
// // //           <input type="email" id="email" className="form__input" placeholder="Email" />
// // //         </div>
// // //         <div className="bio">
// // //           <label className="form__label" for="bio">Bio</label>
// // //           <input type="text" name="" id="lastName" className="form__input" placeholder="Enter a short bio" />
// // //         </div>
// // //         <div className="displaypic">
// // //           <label className="form__label" for="displaypic">Display picture</label>
// // //           <input type="text" name="" id="lastName" className="form__input" placeholder="Paste a display picture (URL)" />
// // //         </div>
// // //         <div className="password">
// // //           <label className="form__label" for="password">Password </label>
// // //           <input className="form__input" type="password" id="password" placeholder="Password" />
// // //         </div>
// // //         <div className="confirm-password">
// // //           <label className="form__label" for="confirmPassword">Confirm Password </label>
// // //           <input className="form__input" type="password" id="confirmPassword" placeholder="Repeat Password" />
// // //         </div>
// // //       </div><div class="footer">
// // //           <button type="submit" class="btn-reg">Register</button>
// // //         </div></>  
// // //     )       
// // // }

// // // export default Register
