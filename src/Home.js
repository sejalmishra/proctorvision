import React, { useState } from 'react';
import {classes} from './data';
import SingleSubject from './SingleSubject';
import profilepic from './assets/theguy.png';
import Header from './Header';

const Home = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [exams, setexams] = useState(classes);

    const goto = () => {
      window.location.href = '/proctor/#/settings'   
    }
  return (
    <div>
        <Header/>
        <h1 className='home-heading'>My Classes</h1>
        <div className='home-examdiv'>
           {exams.map((cls) => {
             return (
                 <SingleSubject key={cls.id} {...cls}></SingleSubject>
             );
         })}
        </div>
      <footer>
      <a className="link">Take Demo Exam</a>
      <div class='pcontainer'>
          <p className='namee'>Samuel Doe</p>
          <p className='pstuid'>18B1S1241</p>
          <img src={profilepic} alt="profile-pic" onClick={goto}/>
      </div>
      </footer>
    </div>
  );
};

export default Home;
