import React from 'react';
import './ProgressButton.css'
function ProgressButton({ progress }) {
  return (
    <div className="progress-button ">
      <div className="filled " style={{ width: `${progress}%` }} />
      <div className="empty " />
      <span>{`${progress}%`}</span>
    </div>
  );
}
export default ProgressButton