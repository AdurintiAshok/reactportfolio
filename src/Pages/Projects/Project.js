import React from 'react';
import './Project.css';
import { AiOutlineFolder } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';
import {BiShow} from 'react-icons/bi'
import { HashRouter, NavLink } from 'react-router-dom';
function Project() {
  const[state,setState]=React.useState(false);
  const [buttonText, setButtonText] = React.useState('Show More');
  
  function showMore()
  {
    if(state==true)
    {
      setButtonText('Show More')  
      setState(false);
    }
    else{
      setButtonText('Show Less')  
      setState(true);
    }
  }
  return (

    <div className="maindiv">
      <h5 className="projects">Projects That I have Worked on</h5>
      <div className="container1">
      <div className="card1">
  <div className="icons">
    <div className="folder-icon">

        <AiOutlineFolder size={30} color="#64ffda" />

    </div>
    <div className="other-icons">
      <a href='https://play.google.com/store/apps/details?id=com.volt.gaming&hl=en_IN&gl=US'  target="_blank">
        <BsLink45Deg size={20} />
        </a>
    </div>
  </div>
  <div className="techie">
    <h5 style={{ color: '#64ffda' }}>Volt Gaming</h5>
    <p style={{ fontSize: 15 }} class="description">Built VPN based Android  mobile application using React Native, ensuring a seamless user experience</p>
  </div>
  <div className="techstack" >
    <p>React Native</p>
    <p>Java</p>
  </div>
</div>
        <div className="card1">
          <div className="icons">
            <div className="folder-icon">
            <a href="https://onymos.com/api/onymos-access-functions/" target="_blank"> <AiOutlineFolder size={30} color="#64ffda" /></a>
            </div>
            <div className="other-icons">
            <a href="https://onymos.com/api/onymos-access-functions/" target="_blank"> <BsLink45Deg size={20} /></a>
            </div>
          </div>
          <div className="techie">
            <h5 className="title" style={{color:'#64ffda'}}>Access Feature for Web</h5>
            <p style={{fontSize:15}} class="description">Developed an npm module that provides comprehensive functionality for user authentication, including login, logout, and signup features using email and password credentials.</p>
          </div>
          <div className="techstack">
            <p>JavaScript</p>
            <p>Firebase</p>
          </div>
        </div>
        <div className="card1">
          <div className="icons">
            <div className="folder-icon">
<AiOutlineFolder size={30} color="#64ffda" />
            </div>
            <div className="other-icons">
<BsLink45Deg size={20} />

            </div>
           
          </div>
          <div className="techie">
            <h5 className="title" style={{color:'#64ffda'}}>FHIR</h5>
            <p style={{fontSize:15}} class="description">The UI screens developed for the FHIR project offer a user-friendly interface that facilitates seamless access and management of healthcare data</p>
          </div>
          <div className="techstack">
            <p>Reactjs</p>
            <p>Bootstrap</p>

          </div>
        </div>
      </div>
      <div className="container1">
        <div className="card1">
          <div className="icons">
            <div className="folder-icon">
<AiOutlineFolder size={30} color="#64ffda" /> 
            </div>
            <div className="other-icons">
              <BsLink45Deg size={20} />
            </div>
          </div>
          <div className="techie">
            <h5 className="title" style={{color:'#64ffda'}}>Daily Health Screening Questionnaire Mobile Application</h5>
            <p style={{fontSize:15}} class="description">Replicated react-native app.A secure and intuitive authentication solution for organizations, ensuring authorized access and streamlined user experience</p>
          </div>
          <div className="techstack">
            <p>Ionic</p>
            <p>Firebase</p>
            <p>Angular</p>
          </div>
        </div>
        <div className="card1">
          <div className="icons">
         

            <div className="folder-icon">
           <a href=" https://onymos.com/api/onymos-deeplink-functions/" target="_blank">    <AiOutlineFolder size={30} color="#64ffda" /></a>
            </div>
            <div className="other-icons">
            <a href=" https://onymos.com/api/onymos-deeplink-functions/" target="_blank">      <BsLink45Deg size={20} /></a>
            </div>
          </div>
          <div className="techie">
            <h5 className="title" style={{color:'#64ffda'}}>DeepLink Feature for Mobile</h5>
            <p style={{fontSize:15}} class="description">Developed a powerful native module that enables the creation of deeplinks and seamlessly navigates users to specific app content with a single click</p>
          </div>
          <div className="techstack">
    <p>Java</p>
    <p>TypeScript</p>
    <p>React Native</p>
          </div>
        </div>
        <div className="card1">
          <div className="icons">
            <div className="folder-icon">
             <a href="https://github.com/AdurintiAshok/portfolio" target="_target"><AiOutlineFolder size={30} color="#64ffda"  /></a>
            </div>
            <div className="other-icons">
             <a href="https://adurintiashok.github.io/portfolio" target='_blank' > <BsLink45Deg size={20}   /></a>
             <a href="https://github.com/AdurintiAshok/portfolio" target="_target"><VscGithubAlt size={20} /></a>
            </div>
           
          </div>
          <div className="techie">
            <h5 className="title" style={{color:'#64ffda'}}>Portfolio</h5>
            <p class="description">Created a portfolio using reactjs and bootstrap</p>
          </div>
          <div className="techstack">
            <p>Reactjs</p>
            
            <p>Bootstrap</p>
          </div>
        </div>
        
      </div>

{state ?
  <>
      <div className="container2">
      <div className="card1">
  <div className="icons">
    <div className="folder-icon">

        <AiOutlineFolder size={30} color="#64ffda" />

    </div>
    <div className="other-icons">

        <BsLink45Deg size={20} />

    </div>
  </div>
  <div className="techie">
    <h5 style={{ color: '#64ffda' }}>Vapotherm</h5>
    <p style={{ fontSize: 15 }} class="description">The UI screens developed for the Vapotherm project offer a user-friendly interface that facilitates seamless access and management of healthcare data</p>
  </div>
  <div className="techstack" >
    <p>Angular</p>
    <p>Tailwindcss</p>
  </div>
</div>     
<div className="card1">
  <div className="icons">
    <div className="folder-icon">
      <a href="https://onymos.com/api/onymos-access-functions/" target="_blank">
        <AiOutlineFolder size={30} color="#64ffda" />
      </a>
    </div>
    <div className="other-icons">
      <a href="https://onymos.com/api/onymos-access-functions/" target="_blank">
        <BsLink45Deg size={20} />
      </a>
    </div>
  </div>

    <div className="techie">
      <h5 style={{ color: '#64ffda' }} className="title">Access Feature for Mobile</h5>
      <p style={{ fontSize: 15 }} class="description">Developed a Native module to authenticate the user using one of the leading social authentication (OAuth 2.0) providers for React Native FrameWork</p>
    </div>
    <div className="techstack">
      <p>Java</p>
      <p>TypeScript</p>
      <p>React Native</p>
    </div>

</div>   
      </div>
      </> :null
    }
  <div class="hello-button-container">
    <button class="hello-button" onClick={()=>
    {
      showMore()
    }}>
      <span class="hello-button-text">{buttonText}</span>
    </button>
  </div>
    </div>
  );
}

export default Project;
