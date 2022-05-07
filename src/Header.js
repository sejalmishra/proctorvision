import React from 'react';
import './header.css'
import minimize from './assets/minimize.png';
import bigscreen from './assets/bigscreen.png';

const Header = () => {
  return (
    <div className='headerall'>
    <h4>Proctor Vision</h4>
    <input type="text" placeholder="Search" name="search"/>
    <img src={minimize} className='minimize'/>
    <img src={bigscreen} className='bigscreen'/>
    <button className='cross'>X</button>
    </div>
  );
};

export default Header;
