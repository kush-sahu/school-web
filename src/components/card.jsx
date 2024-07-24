

import "./about.css";
import React from 'react';

function Card({ text, para, bt_text, col }) {
  const cardStyle = {
    backgroundColor: col,
    // width: '20vw',
    color:'white',
    height: '35vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',

  };

  return (
    <div className="row  homecard "  >
      <div className="card"style={cardStyle} >
        <div className="card-body " style={cardStyle}>
          <h5 className="card-title" style={{ textAlign: 'center' }}>{text}</h5>
          <p className="card-text" style={{ textAlign: 'center', height: '10vh' }}>{para}</p>
          <a href="#" className="btn btn-primary" style={{ margin: 'auto' }}>{bt_text}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
