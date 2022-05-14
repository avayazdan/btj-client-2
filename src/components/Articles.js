import React from "react";
import '../App.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
<link rel="stylesheet" href="App.css"></link>


function Article() {
  const [submission, setSubmission] = React.useState(null)
  const { submissionsId } = useParams();

  React.useEffect(() => {
    console.log("hello ", submissionsId);


    axios({
      method: 'get',
      url: `http://localhost:8000/submissions/${submissionsId}`,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((response) => {
      console.log(`submissions data: `)
      console.log(response.data);

        setSubmission(response.data);
        console.log("fetching data...")
    })
    .catch((error) => {
      console.log(error);
    })
  }, [submissionsId]);
  console.log()
  return (
    <>
      {submission ? 
        <div className="articles">
        <h2>{submission.title}</h2>
        <h2 className="article-h2">Category: {submission.category}</h2>
        <div className="article-container">
        <h3 className="article-text">{submission.text_field}</h3>
        <img className="article-image" alt="article-photograph" src={submission.image}></img>
        </div>
        <h1>About the author:</h1>
        {/* <h2>Submitted by: {submission.submitted_by}</h2> */}
          {/* <Link to={`/user/`}> 
        </Link>  */}
      </div> : <p>Loading...</p>}


    </>
  );
}

export default Article;