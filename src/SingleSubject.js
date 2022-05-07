import React, { useState } from 'react';
import './index.css';
import down from './assets/downwhite.png';
import up from './assets/upwhite.png';
import nobell from './assets/bell.png';
import bell from './assets/bellno.png';

const SingleSubject = ({ classname, classcode,exam1, exam2,exam3 }) => {
  const [showInfo, setShowInfo] = useState(false);
  const goto = () => {
    localStorage.setItem('exam-date',JSON.stringify(exam2.date));
    localStorage.setItem('exam-time',JSON.stringify(exam2.time));
    window.location.href = '/proctor/#/check' 
  }
  return (
    <article className='home-exams'>
      <header>
        <h4>{classname}</h4>
        <p className='para'>{classcode}</p>
        <button className='home-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <img className='dropup' src={up} alt="up"/> : <img className='dropdown' src={down} alt="down"/>}
        </button>
      </header>
      {showInfo && 
        <div className='big-showinfo'>
            <div className='showinfo'>
            <span>{exam1.name}</span>
              <span>{exam1.date} . {exam1.time}<img src={nobell} alt="notification-off"/></span>
            <span><button className='cantclick' disabled>{exam1.status}</button></span>
            
            </div>
            <div className='showinfo'>
            
              <span>{exam2.name}</span>
              <span>{exam2.date} . {exam2.time}<img src={bell} alt="notification-on"/></span>
              <span><button onClick={goto} className='startexam'>{exam2.status}</button></span>
            
            </div>
            <div className='showinfo'>
            <span>{exam3.name}</span>
            <span>{exam3.date} . {exam3.time}<img src={bell} alt="notification-on"/></span>
            <span><button className='cantclick' disabled>{exam3.status}</button></span>
            </div>

        </div>
      }
    </article>
  );
};

export default SingleSubject;
