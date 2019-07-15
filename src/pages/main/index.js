import React from 'react';
import './styles.css';
import ActionsContainer from './components/Actions';

export default () => {
  return (
    <div className="main-page">
      <div className="content">
        <p> This a Calculator made with React. But, it is not a simple Calculator because it has a voice mode, in that we will use his voice to build a expression and calculate the result from it. </p>
      </div>
      <br />
      <ActionsContainer />
    </div>
  )
}
