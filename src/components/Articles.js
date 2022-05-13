import React from "react";
import '../App.css'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
<link rel="stylesheet" href="App.css"></link>


function Article() {
  const [submissions, setSubmissions] = React.useState(undefined);
  const { submissionsId } = useParams();

  React.useEffect(() => {
    console.log("hello ", submissionsId);
    axios({
      method: "get",
      url: `http://localhost:8000/submissions/${submissionsId}`,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((response) => {
        // Console logging the data
        console.log(response.data);

        setSubmissions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [submissionsId]);
  console.log()
  return (
    <>

      {submissions ? submissions.map(x => <div className="articles">
        <img className="submission-image" alt="article-photograph" src={x.image}></img>
        <h1>{x.title}</h1>
        <h2>Category {x.category}</h2>
        <h4>{x.text_field}</h4>
        <h2>Submitted by: {x.submitted_by}</h2>
          <Link to={`/user/`}> 
        </Link> 
      </div>) : <p>Loading...</p>}


    </>
  );
}

export default Article;