import React from 'react';
import './styles.css';

export default (props) => {
  return (
    <div className="visor-container">
      <textarea
        value={props.value}
        disabled
        readOnly
        rows={1}
        wrap='hard'
      />
    </div>
  )
}
