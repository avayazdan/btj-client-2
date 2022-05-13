import React from 'react'
// import { Link } from 'react-router-dom'
import "../App.css"
import Homepagegif from "../components/medievalhome.jpg"
import { Link } from 'react-router-dom'
import axios from "axios"

<link rel="stylesheet" href="App.css"></link>

function Home() {

  const [submissions, setSubmissions] = React.useState([])

  React.useEffect(() => {
    console.log("running useEffect")


    axios({
      method: 'get',
      url: 'http://localhost:8000/submissions/'
      

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


  return (
    <>
      <div className='starting-container'>
        <div className='heading-banner'></div>
      </div>
      <h2>
        "Man's capacity for justice makes democracy possible, <br></br>
        but man's inclination to injustice makes democracy necessary"
      </h2>
      <div className='hot'>
          <h1>Hot this month</h1>
        </div>
      <div className='home-photo-container'>
        <img className="gif" src={Homepagegif} alt="BTJ Logo"></img>
        </div>
        <div className="all-squares">
      {submissions.map(x => <div className="row"> 
      <Link key={x.uniqueId}to={'/submissions/19/'} id="1" className="square-1"> projecting politics: the grapes of wrath</Link>
          <Link to={'/submissions/17/'} className="square-2">goodnight great britain: an essay by Tom Doubtfire</Link>
          <Link to={'/submissions/20/'} className="square-3">on the importance of Seneca</Link>
          <Link to={'/submissions/23/'} className="square-4">Sitting Bull's fight for indigenous land</Link>
          <Link to={'/submissions/16/'} className="square-5"></Link>
          <Link to={'/submissions/21/'} className="square-6">a look through Rumi's legacy</Link>
      </div>)}
    </div>
      </>
      )
    }

    export default Home
    
  