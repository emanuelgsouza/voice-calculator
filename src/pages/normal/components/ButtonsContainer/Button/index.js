import React from 'react';
import './styles.css';

export default props => {
  return (
    <div className="button-container">
      <button className="button">
        {props.label}
      </button>
    </div>
  )
}
