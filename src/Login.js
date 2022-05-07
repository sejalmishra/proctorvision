import React, { useState } from 'react';
import logo from './assets/logoonly.png';
import Header from './Header';
import './app.css'

const Login = () => {

  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      localStorage.setItem('username',JSON.stringify(username));
      console.log(localStorage.getItem('username'));
      window.location.href = '/proctor/#/onboard'
  }

  return (
    <div>
    <Header/>
    <div className='big-div'>
      <div className='login-form'>
      <img src={logo} alt="Proctor Vision" className='logo1'/>
      <form onSubmit={handleSubmit} className="form">
        <input type='text' name='username' placeholder='Username' className='formelement' value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <div className='bottom-border'></div>
        <input type='password' name='password' placeholder='Password' className='formelement'/>
        <div className='bottom-border'></div>
        <div className='atags'>
        <a href='/#/'>Reset Password From Defalut/</a>
        <br></br>
        <a href='/#/'>Forgot Password</a>
        </div>
        <button type='submit' className='login-btn'>Log In</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Login;