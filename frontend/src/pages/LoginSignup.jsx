import './CSS/LoginSinup.css'

const LoginSignup = () => {
  return (
    <div className="loginSignUp">
      <div className="loginSignUpContainer">
        <h1>Sign Up</h1>
        <div className="loginSignUpFields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
        </div>

        <button>Continue</button>
        <p className="loginSignUp-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginSignUp-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms ans privacy policy </p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
