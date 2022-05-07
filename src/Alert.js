import { Alert } from "react-bootstrap";
import React, { useEffect, useState, useRef } from 'react';

function AlertM({ alertimg }) {
  const [showwarning, setShowwarning] = useState(false);
  const warnning =()=>{
    setShowwarning(true);
  }
  useEffect(() => {
    setTimeout(warnning, 2000);
  },[]);

  if (showwarning) {
    return (
      <Alert variant="danger" onClick={() => setShowwarning(false)} style={{height: '76px', width: '361px', background: '#232527', boxShadow: '7px 8px 52px rgba(0, 0, 0, 0.35)', border: 'none', display: 'relative', top: '580px', left: '996px'}}dismissible>
        <Alert.Heading  style={{height: '27px', width: '90px'}}>Warning1</Alert.Heading>
        <p style={{height: '18px', width: '58px', color: 'rgba(255, 255, 255, 0.5)'}}>Warning1</p>
      </Alert>
    );
  }
  return <div></div>;
}

export default AlertM;