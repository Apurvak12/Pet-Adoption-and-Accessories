import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginRegister = () => {
  const [action, setAction] = useState('');

  const registerLink = (e) => {
    e.preventDefault();
    setAction('active');
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction('');
  };

  return (
    <section className="login-register-container">
      <div className={`wrapper1 ${action}`}>
        <div className="form-box login">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="text-white">Login</button>
            <div className="register-link">
              <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <form>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="email" required />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="text-white">Register</button>
            <div className="register-link">
              <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginRegister;