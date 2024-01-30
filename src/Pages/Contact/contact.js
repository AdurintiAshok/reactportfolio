import React from 'react'
import './contact.css'
import {useNavigate} from 'react-router-dom'
import {BsEmojiSmileUpsideDownFill} from 'react-icons/bs'
import {SiHellofresh} from 'react-icons/si'
function Contact() {
  const usenavigate=useNavigate();
  return (
<div class="maindiv">

    <p className="next">What is Next?</p>
    <h1 className="getin">Get In Touch</h1>
    <p className="bigtext">
     My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you <BsEmojiSmileUpsideDownFill color='white'/>.
    </p>

  <div class="hello-button-container">
    <button class="hello-button" onClick={()=>
    {
      usenavigate('/Contact')
    }}>
      <span class="hello-button-text">Say Hello <SiHellofresh size={30}/></span>
    </button>
  </div>
</div>

  )
}

export default Contact