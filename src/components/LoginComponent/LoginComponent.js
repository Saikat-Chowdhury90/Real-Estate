import React from "react";
import "./LoginCss.css";

function LoginComponent() {
  return (
    <div className="login-container">
      <div className="close-btn">&times;</div>
      <h2>Login</h2>
      <button className="google-btn">Continue with Google</button>
      <button className="facebook-btn">Continue with Facebook</button>
      <div className="separator">
        <span>OR</span>
      </div>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="submit-btn" type="submit">
          Continue
        </button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
      <div className="separator"></div>
      <div className="signup-option">
        <span>If you don't have an account?</span>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
}

export default LoginComponent;
