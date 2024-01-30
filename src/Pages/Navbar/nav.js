import Home from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import './nav.css';
import Project from '../Projects/Project';
import Contact from '../Contact/contact'
import {TbCircleLetterA} from    "react-icons/tb"
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import Resume from '../../assets/Ashok-Resume.pdf'
import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import React from 'react';
function NavBar() {
 

  return (

 <div class="maindiv">

 <nav className="navbar navbar-expand-lg">
<TbCircleLetterA size={30} color="#64ffda"/>
<button
style={{color:'white'}}
 className="navbar-toggler "
 type="button"
 data-toggle="collapse"
 data-target="#navbarSupportedContent"
 aria-controls="navbarSupportedContent"
 aria-expanded="false"
 aria-label="Toggle navigation"

>
 <span className="navbar-toggler-icon" style={{backgroundColor:'white',borderRadius:'3px'}} />
</button>
   <div className=" items collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
     <ul className="navbar-nav ms-auto flex-wrap">
       <li className="nav-item">
       <HashLink className="nav-link" to="#aboutme">1. AboutMe</HashLink>
       </li>
      
       <li className="nav-item">
       <HashLink className="nav-link" to="#work">2. Work</HashLink>
       </li>
       <li className="nav-item">
       <HashLink className="nav-link" to="#contact">3. Contact</HashLink>
       </li>
       <li className="nav-item">
       <HashLink className="nav-link" to="https://medium.com/@codewithadurintiashok">4. Blogs</HashLink>
       </li>
       <li className="nav-item">
         <a href={Resume} download>
         <button type="button" className="btn border-2"  >Resume</button></a>
       </li>
     </ul>
   </div>

 </nav>
 <div id="home">
   <Home />
 </div>
 <div id="aboutme">
   <AboutMe />
 </div>
 <div id="work">
   <Project />
 </div>
 <div id="contact">
   <Contact />
 </div>



<footer id="contactme">
<div class="footericons">
<a href="https://instagram.com/adurinti.ashok?igshid=ZDc4ODBmNjlmNQ" target="_blank">
<FaInstagramSquare size={23} color="#e6f1ff"/></a>
<a href="https://www.linkedin.com/in/ashok-adurinti/" target="_blank">
 <BsLinkedin size={23} color="#e6f1ff"/></a>
 <a href="https://www.youtube.com/c/AACREATIONS2000" target="_blank">
 <BsYoutube size={24} color="#e6f1ff"/></a>

</div>

<div class="text-center text-white p-3" >

 <a class="text-white" className="emailtext">codewithadurintiashok@gmail.com</a>
</div>

</footer>

</div>





  );
}

export default NavBar;
