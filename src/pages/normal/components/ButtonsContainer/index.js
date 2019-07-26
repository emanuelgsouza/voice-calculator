import React from 'react';
import CalcButton from './Button';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;

  .row {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default (props) => {
  return (
    <Container>
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
        <CalcButton onClick={props.onInput} label="*" />
        <CalcButton onClick={props.onInput} label="-" />
        <CalcButton onClick={props.onInput} label="+" />
      </div>
    </Container>
  )
}
