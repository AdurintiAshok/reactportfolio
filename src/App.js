
import './App.css';
import React from 'react'
import {BrowserRouter as Router,Routes,Route,HashRouter} from "react-router-dom";
import AboutMe from './Pages/AboutMe/AboutMe';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/contact';
import NavBar from './Pages/Navbar/nav';
import Getintouch from './Pages/GetInTouch/getintouch';
import Project from './Pages/Projects/Project';
import Load from './Load/load';
function App() {
  
  return (
<>
<HashRouter>
      <Routes>
        <Route path="/" element={<Load />} />
        <Route path="/Contact" element={<Getintouch />} />
        <Route path="/home" element={<NavBar />} />


      </Routes>
    </HashRouter>
      
</>

  )
}

export default App