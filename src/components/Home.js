import React from 'react'
// import { Link } from 'react-router-dom'
import "../App.css"
import Homepagegif from "../components/medievalhome.jpg"
import { Link } from 'react-router-dom'
import axios from "axios"
import Backdrop from "../components/logo2.png"

<link rel="stylesheet" href="App.css"></link>

function Home() {

  const [submissions, setSubmissions] = React.useState([])
  const [user, setUser] = React.useState([])


  React.useEffect(() => {
    console.log("running useEffect")


    axios({
      method: 'get',
      url: 'https://bite-the-jaw.herokuapp.com/submissions/'
      

    })
  .then(response => {
    console.log(`submissions data: `)
    console.log(response.data)

    setSubmissions(response.data)
    console.log("fetching data...")
  })
.catch(error => {
  console.log(error)
})
}, [])

React.useEffect(() => {
  console.log("running useEffect")


  axios({
    method: 'get',
    url: 'https://bite-the-jaw.herokuapp.com/users/'
    

  })
.then(response => {
  console.log(`submissions data: `)
  console.log(response.data)

  setSubmissions(response.data)
  console.log("fetching user data...")
})
.catch(error => {
console.log(error)
})
}, [])

  return (
    <>
      <div className='starting-container'>
        <div className='heading-banner'></div>
      </div>
      <h2>
        "Man's capacity for justice makes democracy possible, <br></br>
        but man's inclination to injustice makes democracy necessary"
      </h2>
      <img className="backdrop" src={Backdrop} alt="plague-doctor-backdrop"></img>
      <div className='hot'>
          <h1>Hot this month</h1>
        </div>
      <div className='home-photo-container'>
        <img className="gif" src={Homepagegif} alt="BTJ Logo"></img>
        </div>
        <div className="all-squares">
      {/* {submissions.map(x =>  */}
      <div className="row">
      <Link to={'/submissions/4/'} id="1" className="square-1"> <span className='highlight'>projecting politics: the grapes of wrath </span></Link>
          <Link to={'/submissions/2/'} className="square-2"><span className='highlight'>goodnight great britain: an essay by Tom Doubtfire</span></Link>
          <Link to={'/submissions/5/'} className="square-3"><span className='highlight'>on the importance of Seneca</span></Link>
          <Link to={'/submissions/1/'} className="square-4"><span className='highlight'>Sitting Bull's fight for indigenous land</span></Link>
          <Link to={'/submissions/7/'} className="square-5"></Link>
          <Link to={'/submissions/6/'} className="square-6"><span className='highlight'>a look through Rumi's legacy</span></Link>
      </div>) 
      {/* } */}
    </div>
      </>
      )
    }

    export default Home
    
  