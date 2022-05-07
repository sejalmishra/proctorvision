import React from 'react';
import frame from './assets/frame.png';
import Header from './Header';
const Spash = () => {
  const nextpage = () => {
    window.location.href = '/proctor/#/login'
  }
  return (
    <div>
    <Header/>
    <div className='div-body'>
      <div className='spash-div'>
       <img src={frame} alt="logo" className='logo'/>
       <div className='spash-content'>Welcome aboard to the future in the making you've just become a part of it</div>
       <button className='buttons' onClick={nextpage}>Continue <span className='special-char'>&gt;</span></button>
      </div>
    </div>
    </div>
  );
};

export default Spash;
