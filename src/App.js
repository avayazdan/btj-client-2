import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from './components/About.js'
import Categories from './components/Categories.js'
import Home from './components/Home.js'
import Nav from './components/Nav';
import Register from './components/Register.js'
import Submissions from './components/Submissions.js'
import Submit from './components/Submit.js'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/about" element={<About />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/login" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
