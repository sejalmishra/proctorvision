import React, { useEffect, useState, useRef } from 'react';
import timer from './assets/timerimg.png';
import {questions, numbers} from './data';
import './examination.css';
import Header from './Header';
import redalert  from './assets/redwarning.png';
import yellowalert from './assets/yellowwarning.png';
import AlertM from './Alert';

const Exam = () => {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(30);
  const [sec,setSec] = useState(0);
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(0);
  const { id, Question, img, optiona, optionb, optionc, optiond} =  questions[index];
  const {idd, num1, num2, num3} = numbers[display];
  const intervalRef = useRef();
 
  let count=5400;
  function startSetInterval() {
        count--;
        setSec(count%60);
        setMinute(parseInt((count/60)%60));
        setHour(parseInt((count/60)/60)); 
  }
  useEffect(()=>{
   intervalRef.current = setInterval(startSetInterval, 1000);
  },[])

  useEffect(() => {
    return () => {
    clearInterval(intervalRef);
    }
  },[])

  const onChangeValue = (event) => {
    localStorage.setItem(JSON.stringify(id),JSON.stringify(event.target.value));
    console.log(localStorage.getItem(JSON.stringify(id)));
    
  }

  const previousQuestion =()=>{
    if(index==0){
      return;
    }
    setIndex(index-1);
  }

  const nextQuestion = () => {
    if(index==questions.length-1){
        return;
    }
    setIndex(index+1);
  }

  const changePrevNum = () => {
    if(display==0){
      return;
    }
    setDisplay(display-1);
  }

  const changeNextNum = () => {
    if(display==6){
      return;
    }
    setDisplay(display+1);
  }
  const exit = () => {
    window.location.href = '/proctor/#/home'
  }
  const submit = () => {
    window.location.href = '/proctor/#/check'
  }
  return (
    <div className='bodyy'>
      <Header/>
      <header>
      <img src={timer} alt="timer" className='timerimg'/> 
      <div className='timer'>
        {hour<10 ? <span>0{hour}</span> : <span>{hour}</span>}
        <span>:</span>
        {minute<10 ? <span>0{minute}</span> : <span>{minute}</span>}
        <span>:</span>
        {sec<10 ? <span>0{sec}</span> : <span>{sec}</span>}
      </div>
      <button onClick={exit} className='exit'>Exit</button>
      <button onClick={submit} className='submit-btn'>Submit</button>
      </header>

        <h4 className='header'>Question {id}</h4>
        <div className='q-div'>
        <p className='q-question'>{Question}</p>
        {img? <img className='q-img' src={img}/> : <div></div>}
        </div>
        <div>
        <div className='optiona'><input type="radio" name={id} id='optiona' value="a"  onChange={(e)=>onChangeValue(e)}/>
        <label htmlFor="optiona">{optiona}</label></div>
        <div className='optionb'><input type="radio" name={id} id='optionb' value="b" onChange={(e)=>onChangeValue(e)}/>
        <label htmlFor="optionb">{optionb}</label></div>
        <div className='optionc'><input type="radio" name={id} id='optionc' value="c" onChange={(e)=>onChangeValue(e)}/>
        <label htmlFor="optionc">{optionc}</label></div>
        <div className='optiond'><input type="radio" name={id} id='optiond' value="d" onChange={(e)=>onChangeValue(e)}/>
        <label htmlFor="optiond">{optiond}</label></div>
        </div>
            <button className='q1' onClick={() => setIndex(0)} style={ id==1? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==1? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>1</span>
            </button>
            <button className='q2' onClick={() => setIndex(1)} style={ id==2? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==2? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>2</span>
            </button>
            <button className='q3' onClick={() => setIndex(2)} style={ id==3? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==3? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>3</span>
            </button>
            <button className='q4' onClick={() => setIndex(3)} style={ id==4? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==4? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>4</span>
            </button>
            <button className='q5' onClick={() => setIndex(4)} style={ id==5? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==5? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>5</span>
            </button>
            <button className='q6' onClick={() => setIndex(5)} style={ id==6? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==6? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>6</span>
            </button>
            <button className='q7' onClick={() => setIndex(6)} style={ id==7? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==7? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>7</span>
            </button>
            <button className='q8' onClick={() => setIndex(7)} style={ id==8? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==8? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>8</span>
            </button>
            <button className='q9' onClick={() => setIndex(8)} style={ id==9? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==9? {color: '#232527', left: '10px'} : {color: '#fff', left: '10px'}}>9</span>
            </button>
            <button className='q10' onClick={() => setIndex(9)} style={ id==10? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==10? {color: '#232527'} : {color: '#fff'}}>10</span>
            </button>
            <button className='q11' onClick={() => setIndex(10)} style={ id==11? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==11? {color: '#232527'} : {color: '#fff'}}>11</span>
            </button>
            <button className='q12' onClick={() => setIndex(11)} style={ id==12? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==12? {color: '#232527'} : {color: '#fff'}}>12</span>
            </button>
            <button className='q13' onClick={() => setIndex(12)} style={ id==13? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==13? {color: '#232527'} : {color: '#fff'}}>13</span>
            </button>
            <button className='q14' onClick={() => setIndex(13)} style={ id==14? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==14? {color: '#232527'} : {color: '#fff'}}>14</span>
            </button>
            <button className='q15' onClick={() => setIndex(14)} style={ id==15? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==15? {color: '#232527'} : {color: '#fff'}}>15</span>
            </button>
            <button className='q16' onClick={() => setIndex(15)} style={ id==16? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==16? {color: '#232527'} : {color: '#fff'}}>16</span>
            </button>
            <button className='q17' onClick={() => setIndex(16)} style={ id==17? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==17? {color: '#232527'} : {color: '#fff'}}>17</span>
            </button>
            <button className='q18' onClick={() => setIndex(17)} style={ id==18? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==18? {color: '#232527'} : {color: '#fff'}}>18</span>
            </button>
            <button className='q19' onClick={() => setIndex(18)} style={ id==19? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==19? {color: '#232527'} : {color: '#fff'}}>19</span>
            </button>
            <button className='q20' onClick={() => setIndex(19)} style={ id==20? {background: '#fff'} : {background: '#232527'}}>
            <span className='nums' style={ id==20? {color: '#232527'} : {color: '#fff'}}>20</span>
            </button>
      <div>
      <div>
      <button onClick={changePrevNum} className='numslt'> &lt; </button>
      <button onClick={() => setIndex(parseInt(num1)-1)}  className='num1' style={ parseInt(num1)-1==index? {opacity: '0.8'} : {opacity: '0.5'}}>{num1}</button>
      <button onClick={() => setIndex(parseInt(num2)-1)} className='num2' style={ parseInt(num2)-1==index? {opacity: '0.8'} : {opacity: '0.5'}}>{num2}</button>
      {num3? <button onClick={() => setIndex(parseInt(num3)-1)} className='num3' style={ parseInt(num3)-1==index? {opacity: '0.8'} : {opacity: '0.5'}}>{num3}</button> : <span></span>}
      <button onClick={changeNextNum} className='numsgt'> &gt; </button>
      </div>
        <button onClick={previousQuestion} className='previous-btn' style={ id==1 ? {background: 'rgba(255, 255, 255, 0.5)'}:{background: '#fff'}}><span className='lt'>&lt;</span> Previous</button>
        <button onClick={nextQuestion} className='next-btn' style={ id==20 ? {background: 'rgba(255, 255, 255, 0.5)'}:{background: '#fff'}}>Next <span className='gt'>&gt;</span></button>
        
      </div>
      <AlertM alertimg={redalert}/>
      <AlertM alertimg={yellowalert}/>
    </div>
  )
}
export default Exam;