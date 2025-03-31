import { useState } from 'react'
import './CSS/LoginSinup.css'

const LoginSignup = () => {

  const [loginSignUp, setloginSignUp] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) =>{
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const login = async() =>{
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((res)=>res.json())
      .then((data)=> responseData = data)

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }    
  }

  const signUp = async () =>{
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((res)=>res.json())
      .then((data)=> responseData = data)

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace("/");
      }
      else{
        alert(responseData.errors)
      }
  }

  return (
    <div className="loginSignUp">
      <div className="loginSignUpContainer">
        <h1>{loginSignUp}</h1>
        <div className="loginSignUpFields">
          {loginSignUp === "Sign Up" ? 
          <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" /> 
          : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Your Email" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>

        <button onClick={()=>{loginSignUp === "Login" ? login() : signUp()}}>
          Continue
        </button>
        {loginSignUp === "Sign Up" ? 
          <p className="loginSignUp-login">
           Already have an account? <span onClick={()=>{setloginSignUp("Login")}}>Login here</span>
          </p> : 
          <p className="loginSignUp-login">
           Create an account: <span onClick={()=>{setloginSignUp("Sign Up")}}>Click here</span>
          </p>
        }      
        <div className="loginSignUp-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms ans privacy policy </p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
