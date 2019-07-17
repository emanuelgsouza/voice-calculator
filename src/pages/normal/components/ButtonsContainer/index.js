import React from 'react';
import CalcButton from './Button';
import './styles.css';

export default (props) => {
  return (
    <div className="buttons-container">
      <div className="row">
        <CalcButton onClick={props.onInput} label="7" />
        <CalcButton onClick={props.onInput} label="4" />
        <CalcButton onClick={props.onInput} label="1" />
        <CalcButton onClick={props.onInput} label="0" />
      </div>

      <div className="row">
        <CalcButton onClick={props.onInput} label="8" />
        <CalcButton onClick={props.onInput} label="5" />
        <CalcButton onClick={props.onInput} label="2" />
        <CalcButton onClick={props.onInput} label="," />
      </div>

      <div className="row">
        <CalcButton onClick={props.onInput} label="9" />
        <CalcButton onClick={props.onInput} label="6" />
        <CalcButton onClick={props.onInput} label="3" />
        <CalcButton onClick={props.onEvaluate} label="=" />
      </div>

      <div className="row">
        <CalcButton onClick={props.onInput} label="/" />
        <CalcButton onClick={props.onInput} label="x" />
        <CalcButton onClick={props.onInput} label="-" />
        <CalcButton onClick={props.onInput} label="+" />
      </div>
    </div>
  )
}
