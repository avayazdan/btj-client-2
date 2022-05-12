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
        console.log(`doggo data: `);
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
        <img className="dog-image" alt="Dog" src={x.image}></img>
        <h1>{x.name}</h1>
        <h2>Breed: {x.title}</h2>
        <h2>Age: {x.text_field}</h2>
        <h2>Location: {x.category}</h2>
        <h2>About this Doggo: {x.submitted_by}</h2>
          <Link to={`/user/`}> 
            <button>Message me 🐾</button>
        </Link> 
      </div>) : <p>Loading</p>}


    </>
  );
}

export default Article;