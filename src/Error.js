import React from 'react';
import './SeasonDisplay.css';
const Error = (props) => {
  return (
    <div className='season-display error'>
      <h1>{props.error}</h1>
    </div>
  );
};

export default Error;
