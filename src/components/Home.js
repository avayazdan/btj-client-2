import React from 'react'
// import { Link } from 'react-router-dom'
import "../App.css"


<link rel="stylesheet" href="App.css"></link>

function Home() {
  return (
    <>
      <div className='starting-container'>
        <div className='heading-banner'></div>
        <div className='hot'>
          <h1>Hot this month</h1>
        </div>
      </div>
      <h2>
        "Man's capacity for justice makes democracy possible, <br></br>
        but man's inclination to injustice makes democracy necessary"
      </h2>
      <div className="all-squares">
          <div className="row">
            <div className="square-1">projecting politics: the grapes of wrath</div>
            <div className="square-2">goodnight great britain: an essay by Tom Doubtfire</div>
            <div className="square-3">on the importance of Seneca</div>
              <div className="square-4">Sitting Bull's fight for indigenous land</div>
              <div className="square-5"></div>
              <div className="square-6">a look through Rumi's legacy</div>
            </div>
          </div>
        <section>
        </section>
        {/* <div class='home-photo-container'>

        </div> */}
      </>
      )
}

      export default Home