import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

export default () => {
  return (
    <div className="actions-container">
      <Link className="action-button" to="/normal"> Normal Mode </Link>
      <Link className="action-button" to="/voice"> Voice Mode </Link>
    </div>
  )
}
