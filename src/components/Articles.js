import React from "react";
import '../App.css'
import axios from "axios";
import { useParams } from "react-router-dom";
<link rel="stylesheet" href="App.css"></link>


function Article() {
  const [submission, setSubmission] = React.useState(null)
  const { submissionsId } = useParams();
  const [user, setUser] = React.useState(null)
  const { usersId } = useParams();

  React.useEffect(() => {
    console.log("hello ", submissionsId);
    axios({
      method: 'get',
      url: `https://bite-the-jaw.herokuapp.com/submissions/${submissionsId}`, 
    })
    .then((response) => {
      console.log(`submissions data: `)
      console.log(response.data);

        setSubmission(response.data);
        console.log("fetching submissions data...")
    })
    .catch((error) => {
      console.log(error);
    })
  }, [submissionsId]);
  console.log()

  React.useEffect(() => {
  axios({
    method: 'get',
    url: `https://bite-the-jaw.herokuapp.com/users/1/`,
  })
  .then((response) => {
    console.log(`users data: `)
    console.log(response.data);

      setUser(response.data);
      console.log("fetching user data...")
  })
  .catch((error) => {
    console.log(error);
  })
}, [usersId]);


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
        {/* <h2>Submitted by: {user.username}</h2> */}
        {/* <h3>{user.username}</h3>
        <h3>{user.bio}</h3>
        <img className="user-image" alt="article-photograph" src={user.display_picture}></img>
        <h3>{user.date_joined}</h3> */}
      </div> : <p>Loading...</p>}


    </>
  );
}

export default Article;