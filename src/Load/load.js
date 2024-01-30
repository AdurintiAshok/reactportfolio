import React from 'react'
import { useNavigate } from 'react-router-dom';

function Load() {
    const navigate=useNavigate();
    const [state,setState]=React.useState(false);
    React.useEffect(()=>
    {
  
      const timer=setTimeout(()=>
      {
        navigate('home')
      },2500)
    },[])
  return (
<div id="loadingOverlay" class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
  )
}

export default Load