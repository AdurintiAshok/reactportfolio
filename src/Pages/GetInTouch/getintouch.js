import React from 'react'
import './getintouch.css'
import emailjs from '@emailjs/browser'
function Getintouch() {

    const [email,setEmail]=React.useState('')
    const [name,setName]=React.useState('')
    const [subject,setSubject]=React.useState('')
    const [textarea,setTextArea]=React.useState('')
    const handleChangeName = (e) => setName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangeSubject = (e) => setSubject(e.target.value);
    const handleChangeTextArea = (e) => setTextArea(e.target.value);
    const [errors, setErrors] = React.useState({});
    const [status, setStatus] = React.useState(false);
    const [state,setState]=React.useState(false);
    const form = React.useRef();
    function handleSubmit(e)
    {

        e.preventDefault();
        // Perform custom validations
        const validationErrors = {};
    
        if (!name) {
          validationErrors.name = 'Name is required';
        }
    
        if (!email) {
          validationErrors.email = 'Email is required';
        }
    
        if (!subject) {
          validationErrors.subject = 'Subject is required';
        }
    
        if (!textarea) {
          validationErrors.textarea = 'Message is required';
        }
    
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
        setState(true)
        emailjs.sendForm('service_j3larp5', 'template_x7nk9mq', form.current, '_VColnZxzhRErKE4l')
      .then((result) => {
          console.log(result.text);
          setStatus(true);
          setState(false)
      }, (error) => {
          console.log(error.text);
      }); 
   
    }
  return (
    
    <div>

{!state ?
    <>
    {!status ? 

    <div className='maindivP'>
    <div className='container'>
      <div className='row justify-content-center '>
        <h2 className='headingtext'>Get In Touch With Me</h2>
        <div className='col-md-6'>
          <form  ref={form} onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name' className='labeltext'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                name="name"
                placeholder='Enter your name'
                value={name}
                onChange={handleChangeName}
              />
              {errors.name && <span className='error' >{errors.name}</span>}
            </div>
            
            <div className='form-group mt-2'>
              <label htmlFor='email' className='labeltext '>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                name="email"
                placeholder='Enter your email'
                value={email}
                onChange={handleChangeEmail}
              />
              {errors.email && <span className='error' style={{color:'#f75b5b'}}>{errors.email}</span>}
              
            </div>
            <div className='form-group mt-2'>
              <label htmlFor='subject' className='labeltext'>
                Subject
              </label>
              <input
                className='form-control'
                id='subject'
                name="subject"
                placeholder='Subject'
                value={subject}
                onChange={handleChangeSubject}
              />
              {errors.subject && <span className='error' style={{color:'#f75b5b'}}>{errors.subject}</span>}
            </div>
            <div className='form-group mt-2'>
              <label htmlFor='exampleFormControlTextarea1' className='labeltext'>
                Message
              </label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                name="message"
                rows='6'
                value={textarea}
                onChange={handleChangeTextArea}
              />
              {errors.textarea && <span className='error' style={{color:'#f75b5b'}}>{errors.textarea}</span>}
            </div>
            <button type='submit' className='submit1 mt-2'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
    :<div className="container">
    <div className="row hello justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="mb-4 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width="75" height="75" style={{ color: '#64ffda' }}
          fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </div>
      <div className="col-md-6 text-center">
        <div className="thank-you">
          <h2>Thank You!</h2>
          <p>for connecting with me.</p>
        </div>
      </div>
    </div>
  </div>
  }
    </>
    :<div id="loadingOverlay" class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>}
    </div>

  )
}

export default Getintouch;