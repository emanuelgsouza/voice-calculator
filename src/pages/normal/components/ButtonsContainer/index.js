import React from 'react';
import CalcButton from './Button';
import './styles.css';

export default (props) => {
  return (
    <div className="buttons-container">
      <div className="row">
        <CalcButton label="7" />
        <CalcButton label="4" />
        <CalcButton label="1" />
        <CalcButton label="0" />
      </div>

      <div className="row">
        <CalcButton label="8" />
        <CalcButton label="5" />
        <CalcButton label="2" />
        <CalcButton label="," />
      </div>

      <div className="row">
        <CalcButton label="9" />
        <CalcButton label="6" />
        <CalcButton label="3" />
        <CalcButton label="=" />
      </div>

      <div className="row">
        <CalcButton label="/" />
        <CalcButton label="x" />
        <CalcButton label="-" />
        <CalcButton label="+" />
      </div>
    </div>
  )
}
