import React from 'react';
import '../css/BurgerButton.css'; 

function BurguerButton(props) {
  return (
    <div className="Burguer" onClick={props.handleClick}>
      <div className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default BurguerButton;
