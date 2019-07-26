import React from 'react';
import styled from 'styled-components';

import ActionsContainer from './components/Actions';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export default () => {
  return (
    <Container>
      <div className="content">
        <p> This a Calculator made with React. But, it is not a simple Calculator because it has a voice mode, in that we will use his voice to build a expression and calculate the result from it. </p>
      </div>
      <br />
      <ActionsContainer />
    </Container>
  )
}
