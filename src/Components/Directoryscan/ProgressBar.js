// ProgressBar.js
import React from 'react';

const ProgressBar = ({ percentage }) => {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#1DA598',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
