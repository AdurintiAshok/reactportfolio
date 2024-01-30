import React from 'react'
import './AboutMe.css'
import { AiFillCaretRight } from 'react-icons/ai';
const AboutMe = () => {
  return (
    <div className="aboutmediv">
      <div className="row">
        <div className="col-md-6">
      <h1 className="heading">01. About-Me</h1>
    <p className="details">I had a strong focus on mobile application development and creating npm packages for both mobile and web applications. With expertise in Java, React Native, JavaScript, Reactjs, TypeScript, Firebase and MongoDB, I have successfully developed a variety of applications. With two years of experience in software development, I am skilled in delivering robust and user-friendly solutions. I am passionate about staying updated with the latest technologies and trends in the industry to ensure that my applications are innovative and efficient. I thrive in collaborative environments and enjoy working closely with cross-functional teams to deliver exceptional results.</p>
    <p>Here are a few technologies I’ve been working with recently:</p>
</div>

<div className="col-md-6 imagecontainer">
  <img src={require('../../assets/Ashok.png')} className="ashokimage" href="https:linkedin.com/in/ashok-adurinti" target="_blank"/>
  </div>

</div>
<div className="row">
<div className="two-column-list col-lg-4 col-md-12">
  <ul>
  <li>
          <AiFillCaretRight /> Java
        </li>
        <li>
          <AiFillCaretRight /> React Native
        </li>
        <li>
          <AiFillCaretRight /> Reactjs 
        </li>
        <li>
          <AiFillCaretRight /> JavaScript
        </li>
        <li>
          <AiFillCaretRight />  TypeScript
        </li>
        <li>
          <AiFillCaretRight /> Firebase
        </li>
        <li>
          <AiFillCaretRight /> MongoDB
        </li>
        <li>
          <AiFillCaretRight />NativeModules
        </li>
    
  </ul>
</div>

</div>
    </div>


    
  )
}

export default AboutMe;