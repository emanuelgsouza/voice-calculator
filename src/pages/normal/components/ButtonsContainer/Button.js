import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  font-size: 4rem;
  color: #393e46;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export default props => {
  const executeFn = () => props.onClick(props.label)
  return (
    <Container>
      <Button onClick={executeFn}> {props.label} </Button>
    </Container>
  )
}
