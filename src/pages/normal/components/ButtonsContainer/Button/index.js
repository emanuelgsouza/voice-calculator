import React from 'react';
import './styles.css';

export default props => {
  const executeFn = () => props.onClick(props.label)
  return (
    <div className="button-container">
      <button onClick={executeFn} className="button">
        {props.label}
      </button>
    </div>
  )
}
