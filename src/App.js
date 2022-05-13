import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from './components/About.js'
import Home from './components/Home.js'
import Nav from './components/Nav';
import Register from './components/Register.js'
import Submissions from './components/Submissions.js'
import Submit from './components/Submit.js'
import Login from './components/Login.js'
import Article from './components/Articles';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/about" element={<About />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/submissions/:submissionsId" element={<Article />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
