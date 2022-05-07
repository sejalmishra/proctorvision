import React, {useState} from 'react';
import profilepic from './assets/theguy.png';
import edit from './assets/edit.png';
import './set.css';
import down from './assets/downwhite.png';
import up from './assets/upwhite.png';
import back from './assets/backbtn.png';
import Header from './Header';
import { Switch } from '@mui/material';

const Settings = () => {
  const [showSetting1, setShowSetting1] = useState(false);
  const [showSetting2, setShowSetting2] = useState(false);

  const goback = () => {
    window.location.href = '/proctor/#/home'
  }
  return (
    <div>
      <Header/>
      <div className='div1'>
      <img src={back} onClick={goback} alt="back-btn" className='back-btn'/>
      <img className="profile-pic" src={profilepic} alt="profile-pic"/>
      <h4 className='name'>Samuel Doe</h4>
      <p className='stu-id'>18BISI241</p>
      <img src={edit} alt="edit-btn" className='edit-btn' style={{ background: '#131415', border: 'none', cursor: 'pointer'}}/>
      <p className='editp'>Edit Profile Picture</p>
      </div>
      <div className='generals'>
      <h4 className='g1'>General Settings</h4>

      <div className='s1div'>
      <div className='set1'>
      <div className='point1'><span className='span1'>Settings 1 </span><button onClick={() => setShowSetting1(!showSetting1)} style={{background: '#232527', border: 'none'}}>{showSetting1 ? <img src={up} className='up' style={{height: '40px', width: '40px'}}/> : <img src={down} className='up' style={{height: '40px', width: '40px'}}/>}</button></div>
      <div className='point2'></div>
      <div className='point3'><span className='span2'>Settings 2 </span> <span className='span3'><Switch defaultChecked color='default'/></span></div>
      </div>
      {showSetting1 && <div><div className='point4'></div><div className='point5'><span className='span4'>Settings 2 </span><span className='span5'><Switch defaultChecked color='default'/></span></div>
      </div>}
      </div>

      <h4 className='g2'>General Settings</h4>
      <div className='s2div'>
      <div className='set2'>
      <div className='point6'><span className='span6'>Settings 1</span> <span className='span7'><button onClick={() => setShowSetting2(!showSetting2)} style={{background: '#232527', border: 'none', color: '#fff'}}>{showSetting2 ? 'view less' : 'view more'}</button></span></div>
      <div className='point7'></div>
      <div className='point8'><span className='span8'>Settings 2</span> <span className='span9'><Switch defaultChecked color='default'/></span></div>
      </div>
      {showSetting2 && <div><div className='point9'></div><div className='point10'><span className='span11'>Settings 2</span> <span className='span12'><Switch defaultChecked color='default'/></span></div></div>}
      </div>
      </div>
    </div>
  );
};

export default Settings;
