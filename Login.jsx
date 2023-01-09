import React from 'react';
import "./Login.css";

export default function Login() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="login">
        <div className="logo">
          <img src="/assets/logo_gms.png" alt="logo" id="logo" style={{width: "20px", height: "20px"}}/>
        </div>
        <h3>Sign in</h3>
        <h6>Sign in using your GMS account</h6>
        <form action="">
          <fieldset>
            <p>
              <input type="text" placeholder="Username" required />
            </p>
            <p>
              <input type="password" placeholder="Password" required />
            </p>
            <button style={{ color: "white", align: "center" }}>Proceed</button>
            <p style={{ fontSize: "10px" }}>
              Don't have an account? <a href="/#">Register</a>
            </p>
          </fieldset>
        </form>
      </div>
    </>
  )
}
