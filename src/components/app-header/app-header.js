import React from 'react';
import './app-header.css';

const AppHeader = ({ active, finished }) => {
  const text = `${active} more to do, ${finished} done`;

  return (
    <div className="d-flex app-header">
      <h1>Todo list</h1>
      <span>{text}</span>
    </div>
  );
};

export default AppHeader;
