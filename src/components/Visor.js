import React from 'react';
import styled from 'styled-components';

const VisorContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;

  textarea {
    width: 100%;
    height: 100%;
    padding: 8px;
    font-size: 32px;
    text-align: right;
  }
`;

export default (props) => {
  return (
    <VisorContainer>
      <textarea
        value={props.value}
        disabled
        readOnly
        rows={1}
        wrap='hard'
      />
    </VisorContainer>
  )
}
