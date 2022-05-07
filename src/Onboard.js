import React, { useState } from 'react';
import {data} from './data';
import './app.css';
import Header from './Header';

const Onboard = () => {
    const [index, setIndex] = useState(0);
    const {id, pic, desc} = data[index];

    const changeContent = () => {
        if(index==3){
            window.location.href = '/proctor/#/home'
        }
        setIndex(index+1);
    }

  return (
    <div>
    <Header/>
    <div className='big-div'>
      <div className='onboard-div'>
        <div><img src={pic} alt="onboard-img" className='onboard-img'/></div>
        <h3 className='description'>{desc}</h3>
        { index==3?
        <button onClick={changeContent} className='btn2-onboard'>Go to dashboard <span className='special-char-onboard'>&gt;</span></button>:
        <button onClick={changeContent} className='btn-onboard'>Continue <span className='special-char-onboard'>&gt;</span></button>
        }
        <div className='dots-div'>
        { index===0? <div className='stretch-dots'></div> : <div className='dots'></div>}
        { index===1? <div className='stretch-dots'></div> : <div className='dots'></div>}
        { index===2? <div className='stretch-dots'></div> : <div className='dots'></div>} 
        { index===3? <div className='stretch-dots'></div> : <div className='dots'></div>}
        </div>
      </div>
        {index==3? <span></span>:<button onClick={() => setIndex(3)} className='skip'>Skip</button>}
    </div>
    </div>
  );
};

export default Onboard;
