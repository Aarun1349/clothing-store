import React from 'react'
import {signInWithGooglePopup} from '../../utility/firebase/firebase.utils'
function Signin() {
  const logGoogleUser= async()=>{
    const response = await signInWithGooglePopup()
    console.log(response)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
    </div>
  )
}

export default Signin
